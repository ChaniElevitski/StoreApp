namespace App.API.Models
{
    public class CreateOrderRequest
    {
        public Guid? UserId { get; set; }

        public double? Total { get; set; }

        public string PaymentStatus { get; set; } = null!;
    }
}
