using App.DAL.Entities;

namespace App.DAL.Interface
{
    public interface IUserRepository
    {
        Guid CreateUser(User user);
        User Login(string firstName, string password);
        public User UpdateUser(User userToUpdate);

        public User GetUserById(Guid id);

    }
}