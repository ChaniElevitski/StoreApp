using App.API.Mappers;
using App.API.Models;
using App.BL.Interface;
using App.DAL.Entities;
using App.DTO.Models;
using Microsoft.AspNetCore.Mvc;

namespace App.API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class OrderController : ControllerBase
    {
        private readonly IOrderService _orderService;

        public OrderController(IOrderService orderService)
        {
            _orderService = orderService;
        }

        // Updated method name and route to clarify its purpose
        [HttpGet("user/{userId}")]
        public ActionResult<List<Order>> GetOrdersByUserId(Guid userId)
        {
            var orders = _orderService.GetOrderById(userId);
            if (orders == null || !orders.Any())
            {
                return NotFound("No orders found for this user.");
            }
            return Ok(orders);
        }


        [HttpPost]
        public ActionResult<Guid> CreateOrder([FromBody] CreateOrderRequest order)
        {
            var orderId = _orderService.CreateOrder(OrderMapper.Map(order));
            return Ok(orderId);
        }

        [HttpDelete("{orderId}")]
        public IActionResult DeleteOrder(Guid orderId)
        {
            _orderService.DeleteOrder(orderId);
            return NoContent();
        }

        [HttpPut]
        public ActionResult<OrderDTO> UpdateOrder([FromBody] OrderDTO order)
        {
            var updatedOrder = _orderService.UpdateOrder(order);
            return Ok(updatedOrder);
        }
    }
}
