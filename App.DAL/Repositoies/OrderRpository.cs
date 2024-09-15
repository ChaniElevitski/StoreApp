
using App.DAL.DataContext;
using App.DAL.Entities;
using App.DAL.Interface;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace App.DAL.Repositoies
{
    public class OrderRpository : IOrderRpository
    {
        private ShopContext dbContext;

        public OrderRpository(ShopContext languageEasilyContext)
        {
            dbContext = languageEasilyContext;
        }

        //public Order GetOrderById(Guid userId)
        //{
        //    return dbContext.Orders.FirstOrDefault(u => u.UserId == userId);
        //}
        public List<Order> GetOrderById(Guid userId)
        {
            return dbContext.Orders.Where(u => u.UserId == userId).ToList();
        }


        public Guid CreateOrder(Order order)
        {
            dbContext.Orders.Add(order);
            dbContext.SaveChanges();
            return (Guid)order.OrderId;
        }
        public void DeleteOrder(Guid orderId)
        {
            Order order = dbContext.Orders.SingleOrDefault(o => o.OrderId == orderId);
            dbContext.Orders.Remove(order);
            dbContext.SaveChanges();
        }
        public Order UpdateOrder(Order orderToUpdate)
        {
            dbContext.Orders.Entry(orderToUpdate).State = EntityState.Modified;
            dbContext.SaveChanges();
            return orderToUpdate;
        }
    }
}
