
using App.DAL.DataContext;
using App.DAL.Entities;
using App.DAL.Interface;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace App.DAL.Repositories
{
    public class UserRepository : IUserRepository
    {
        private ShopContext dbContext;
        public UserRepository(ShopContext languageEasilyContext)
        {
            dbContext = languageEasilyContext;
        }

        // יצירת לקוח חדש
        public Guid CreateUser(User user)
        {
            dbContext.Users.Add(user);
            dbContext.SaveChanges();
            return user.Id;
        }

        // פונקציית התחברות
        public User Login(string firstName, string password)
        {
            return dbContext.Users.FirstOrDefault(u => u.FirstName == firstName && u.Password == password);
        }

        //עדכון משתמש
        public User UpdateUser(User userToUpdate)
        {
            var existingUser = dbContext.Users.FirstOrDefault(u => u.Id == userToUpdate.Id);

            if (existingUser == null)
            {
                return null; // User not found
            }

            dbContext.Entry(existingUser).CurrentValues.SetValues(userToUpdate);
            dbContext.SaveChanges();
            return existingUser;
        }


        public User GetUserById(Guid id)
        {
            return dbContext.Users.FirstOrDefault(u => u.Id == id);
        }

    }
}
