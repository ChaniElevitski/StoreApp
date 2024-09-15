using App.BL.Interface;
using App.BL.Mappers;
using App.DAL.Entities;
using App.DAL.Interface;
using App.DAL.Repositoies;
using App.DTO.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;


namespace App.BL.Services
{
    public class OrderService : IOrderService
    {
        private IOrderRpository orders;
        public OrderService(IOrderRpository orderRpository)
        {
            orders = orderRpository;

        }
        public List<Order> GetOrderById(Guid userId)
        {
            
            return orders.GetOrderById(userId);
        }
        public Guid CreateOrder(OrderDTO order)
        {
            order.OrderId = Guid.NewGuid();
            return orders.CreateOrder(OrderMappers.Map(order));
        }


        public void DeleteOrder(Guid orderId)
        {
            orders.DeleteOrder(orderId);
        }

        public OrderDTO UpdateOrder(OrderDTO orderToUpdate)
        {

            Order orderEntity = OrderMappers.Map(orderToUpdate);
   
            Order updatedOrder = orders.UpdateOrder(orderEntity);
            return OrderMappers.Map(updatedOrder);
        }


    }
}
