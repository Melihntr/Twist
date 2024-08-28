using Microsoft.AspNetCore.Mvc;
using Backend.DomainService;
using System.Threading.Tasks;

namespace Backend.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class UserController : ControllerBase
    {
        private readonly IUserDomainService _userService;

        public UserController(IUserDomainService userService)
        {
            _userService = userService;
        }

        // Endpoint to create a new user
        [HttpPost("register")]
        public async Task<IActionResult> CreateUser([FromBody] CreateUserRequest request)
        {
            if (request == null || !ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            try
            {
                var authKey = await _userService.CreateUserAsync(request);

                return CreatedAtAction(nameof(CreateUser), new
                {
                    message = "Account created successfully",
                    authKey
                });
            }
            catch (Exception ex)
            {
                // Log the exception (you might use a logging framework here)
                return StatusCode(500, new { message = "An error occurred while creating the account.", error = ex.Message });
            }
        }

        // Endpoint for user login
        [HttpPost("login")]
        public async Task<IActionResult> Login([FromBody] LoginRequest request)
        {
            if (request == null || !ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            try
            {
                var authKey = await _userService.LoginAsync(request.Username, request.Password);

                if (authKey == null)
                {
                    return Unauthorized(new { message = "Invalid username or password." });
                }

                return Ok(new
                {
                    message = "Login successful",
                    authKey
                });
            }
            catch (Exception ex)
            {
                // Log the exception (you might use a logging framework here)
                return StatusCode(500, new { message = "An error occurred during login.", error = ex.Message });
            }
        }
        [HttpPost("logout")]
        public async Task<IActionResult> Logout([FromHeader(Name = "Authorization")] string authKey)
        {
            if (string.IsNullOrEmpty(authKey))
            {
                return BadRequest(new { message = "AuthKey is required" });
            }

            await _userService.LogoutAsync(authKey);
            return Ok(new { message = "Logged out successfully" });
        }
    }

    public class LoginRequest
    {
        public string Username { get; set; }
        public string Password { get; set; }
    }
}
