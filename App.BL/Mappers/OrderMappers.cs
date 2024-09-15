using App.DAL.Entities;
using App.DTO.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace App.BL.Mappers
{
    internal static class OrderMappers
    {
        internal static Order Map(OrderDTO order)
        {
            return new Order
            {
                OrderId = Guid.NewGuid(),
                UserId = order.UserId,  // איך הוא  שולח??
                Total = order.Total,
                PaymentStatus = order.PaymentStatus,
            };
        }


        internal static OrderDTO Map(Order order)
        {
            return new OrderDTO
            {
                //OrderId = Guid.NewGuid(),
                UserId = order.UserId,
                Total = order.Total,
                PaymentStatus = order.PaymentStatus,

            };

        }
        

    }
}
