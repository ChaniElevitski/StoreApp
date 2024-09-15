using App.API.Models;
using App.DAL.Entities;
using App.DTO.Models;

namespace App.API.Mappers
{
    internal static class UserMapper
    {
        internal static UserDTO Map(CreateUserRequest user)
        {
            return new UserDTO
            {
                Id = Guid.NewGuid(),
                FirstName = user.FirstName,
                LastName = user.LastName,
                PhoneNumber = user.PhoneNumber,
                Email = user.Email,
                Password = user.Password,
            };
        }

        internal static User Map(UserDTO user)
        {
            return new User
            {
                Id = user.Id != Guid.Empty ? user.Id : Guid.NewGuid(), // Check if the ID is provided
                FirstName = user.FirstName,
                LastName = user.LastName,
                PhoneNumber = user.PhoneNumber,
                Email = user.Email,
                Password = user.Password,
            };
        }

        internal static UserDTO Map(User user)
        {
            return new UserDTO
            {
                Id = user.Id,
                FirstName = user.FirstName,
                LastName = user.LastName,
                PhoneNumber = user.PhoneNumber,
                Email = user.Email,
                Password = user.Password,
            };
        }

    }
}
