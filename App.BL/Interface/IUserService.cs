using App.DTO.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace App.BL.Interface
{
    public interface IUserService
    {
        public Guid CreateUser(UserDTO user);
        public UserDTO Login(string firstName, string password);
        public UserDTO UpdateUser(UserDTO userToUpdate);
        public UserDTO GetUserById(Guid id);

    }

}
