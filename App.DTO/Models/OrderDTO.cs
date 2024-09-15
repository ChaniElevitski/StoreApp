using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace App.DTO.Models
{
    public class OrderDTO
    {
        public Guid? OrderId { get; set; }

        public Guid? UserId { get; set; }

        public double? Total { get; set; }

        public string PaymentStatus { get; set; } = null!;
    }
}
