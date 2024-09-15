using App.DAL.Entities;
using App.DTO.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace App.BL.Mappers
{
    internal static class UserMappers
    {
       
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
