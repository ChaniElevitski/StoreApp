using App.DAL.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace App.DAL.Interface
{
    public interface IOrderRpository
    {
        public List<Order> GetOrderById(Guid userId);
        public Guid CreateOrder(Order order);
        public void DeleteOrder(Guid orderId);
        public Order UpdateOrder(Order orderToUpdate);

    }
}
