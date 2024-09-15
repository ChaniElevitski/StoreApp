using App.BL.Interface;
using App.DAL.Entities;
using App.DAL.Repositoies;
using App.DTO.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using App.DAL.Interface;
using App.BL.Mappers;

namespace App.BL.Services
{
    public class UserService : IUserService
    {
        private IUserRepository users;
        public UserService(IUserRepository userRepository)
        {
            users = userRepository;
        }

        public Guid CreateUser(UserDTO user)
        {
            user.Id = Guid.NewGuid();
            return users.CreateUser(UserMappers.Map(user));
        }


        public UserDTO Login(string firstName, string password)
        {
            var user = users.Login(firstName, password);
            if (user == null) return null;
            return UserMappers.Map(user);
        }

        public UserDTO UpdateUser(UserDTO userToUpdate)
        {
            User userEntity = UserMappers.Map(userToUpdate);

            User updatedUser = users.UpdateUser(userEntity);

            if (updatedUser == null)
            {
                return null; // User not found
            }

            return UserMappers.Map(updatedUser);
        }


        public UserDTO GetUserById(Guid id)
        {
            var user = users.GetUserById(id);
            if (user == null) return null;
            return UserMappers.Map(user);
        }

    }
}
