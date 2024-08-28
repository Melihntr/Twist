using Backend.Models;
using Backend.Data;
using Microsoft.IdentityModel.Tokens;
using System;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;
using System.Security.Cryptography;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;

namespace Backend.DomainService
{
    public interface IUserDomainService
    {
        Task<string> CreateUserAsync(CreateUserRequest request);
        Task<string?> LoginAsync(string username, string password);
        Task LogoutAsync(string authKey);
    }

    public class UserDomainService : IUserDomainService
    {
        private readonly ApplicationDbContext _context;
        private readonly string _jwtSecret;

        public UserDomainService(ApplicationDbContext context, IConfiguration configuration)
        {
            _context = context;
            _jwtSecret = configuration["JwtSettings:Secret"];
        }

        public async Task<string> CreateUserAsync(CreateUserRequest request)
        {
            var user = new User
            {
                Username = request.Username,
                Email = request.Email,
                PasswordHash = HashPassword(request.Password),
                Gender = request.Gender,
                CreatedAt = DateTime.UtcNow
            };

            _context.Users.Add(user);
            await _context.SaveChangesAsync();

            // Generate the AuthKey after the user has been saved
            user.AuthKey = GenerateJwtToken(user);

            // Update the user with the AuthKey
            _context.Users.Update(user);
            await _context.SaveChangesAsync();

            return user.AuthKey;
        }

        public async Task<string?> LoginAsync(string username, string password)
        {
            var user = await _context.Users
                .FirstOrDefaultAsync(u => u.Username == username);

            if (user == null || user.PasswordHash != HashPassword(password))
            {
                return null;
            }

            return GenerateJwtToken(user);
        }

        public async Task LogoutAsync(string authKey)
        {
            var user = await _context.Users.FirstOrDefaultAsync(u => u.AuthKey == authKey);
            if (user != null)
            {
                user.AuthKey = null;
                _context.Users.Update(user);
                await _context.SaveChangesAsync();
            }
        }

        private string HashPassword(string password)
        {
            using (var sha256 = SHA256.Create())
            {
                var passwordBytes = Encoding.UTF8.GetBytes(password);
                var hashedBytes = sha256.ComputeHash(passwordBytes);
                return Convert.ToBase64String(hashedBytes);
            }
        }

        private string GenerateJwtToken(User user)
        {
            var tokenHandler = new JwtSecurityTokenHandler();
            var key = Encoding.ASCII.GetBytes(_jwtSecret);
            var tokenDescriptor = new SecurityTokenDescriptor
            {
                Subject = new ClaimsIdentity(new[]
                {
                new Claim(ClaimTypes.Name, user.Username),
                new Claim(ClaimTypes.Email, user.Email),
                new Claim(ClaimTypes.Gender, user.Gender)
            }),
                Expires = DateTime.UtcNow.AddHours(1),
                SigningCredentials = new SigningCredentials(new SymmetricSecurityKey(key), SecurityAlgorithms.HmacSha256Signature)
            };
            var token = tokenHandler.CreateToken(tokenDescriptor);
            return tokenHandler.WriteToken(token);
        }
    }

    public class CreateUserRequest
    {
        public string Username { get; set; }
        public string Email { get; set; }
        public string Password { get; set; }
        public string Gender { get; set; }
    }
}
