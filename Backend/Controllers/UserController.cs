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

        [HttpPost]
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
    }
}