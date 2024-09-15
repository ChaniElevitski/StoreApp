using System;
using System.Collections.Generic;

namespace App.DAL.Entities
{
    public partial class Order
    {
        public Guid OrderId { get; set; } // Changed to non-nullable

        public Guid? UserId { get; set; }

        public double? Total { get; set; }

        public string PaymentStatus { get; set; } = null!;
    }
}
