using App.API.Mappers;
using App.API.Models;
using App.BL.Interface;
using App.BL.Services;
using App.DTO.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity.Data;
using Microsoft.AspNetCore.Mvc;

namespace App.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserController : ControllerBase
    {
        private IUserService _userService;
        public UserController(IUserService userServcie)
        {
            _userService = userServcie;
        }



        [HttpPost]
        public Guid CreateUser([FromBody] CreateUserRequest user)
        {
            return _userService.CreateUser(UserMapper.Map(user));
        }


        [HttpPost("login")]
        public IActionResult Login([FromBody] Models.LoginRequest request)
        {
            var user = _userService.Login(request.FirstName, request.Password);

            if (user == null)
            {
                return Unauthorized();
            }

            return Ok(user);
        }
        [HttpPut("{id}")]
        public IActionResult UpdateUser(Guid id, [FromBody] UserDTO user)
        {
            if (id != user.Id)
            {
                return BadRequest("User ID mismatch");
            }

            var updatedUser = _userService.UpdateUser(user);

            if (updatedUser == null)
            {
                return NotFound("User not found or update failed.");
            }

            return Ok(updatedUser);
        }


        [HttpGet("{id}")]
        public IActionResult GetUserById(Guid id)
        {
            var user = _userService.GetUserById(id);
            if (user == null)
            {
                return NotFound();
            }
            return Ok(user);
        }

    }
}
