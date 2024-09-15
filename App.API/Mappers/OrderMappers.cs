using App.API.Models;
using App.DTO.Models;

namespace App.API.Mappers
{
    internal static class OrderMapper
    {
        internal static OrderDTO Map(CreateOrderRequest order)
        {
            return new OrderDTO
            {
                OrderId = Guid.NewGuid(),
                UserId = order.UserId, 
                Total = order.Total,
                PaymentStatus = order.PaymentStatus,
            };
        }
    }
}
