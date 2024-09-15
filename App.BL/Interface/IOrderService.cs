using App.DAL.Entities;
using App.DTO.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace App.BL.Interface
{
    public interface IOrderService
    {
        public List<Order> GetOrderById(Guid userId);
        public Guid CreateOrder(OrderDTO order);
        public void DeleteOrder(Guid orderId);
        public OrderDTO UpdateOrder(OrderDTO orderToUpdate);


    }
}
