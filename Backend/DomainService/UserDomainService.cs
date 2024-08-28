using Backend.Models;
using Backend.Data;
using System;
using System.Security.Cryptography;
using System.Text;
using System.Threading.Tasks;

namespace Backend.DomainService
{
    public interface IUserDomainService
    {
        Task<string> CreateUserAsync(CreateUserRequest request);
    }

    public class UserDomainService : IUserDomainService
    {
        private readonly ApplicationDbContext _context;

        public UserDomainService(ApplicationDbContext context)
        {
            _context = context;
        }

       public async Task<string> CreateUserAsync(CreateUserRequest request)
{
    var user = new User
    {
        Username = request.Username,
        Email = request.Email,
        PasswordHash = HashPassword(request.Password),
        Gender = request.Gender,
        AuthKey = GenerateAuthKey(),
        CreatedAt = DateTime.UtcNow
    };

    _context.Users.Add(user);
    await _context.SaveChangesAsync();

    return user.AuthKey; // Return the AuthKey
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

        private string GenerateAuthKey()
        {
            using (var rng = new RNGCryptoServiceProvider())
            {
                var tokenData = new byte[32];
                rng.GetBytes(tokenData);
                return Convert.ToBase64String(tokenData);
            }
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
