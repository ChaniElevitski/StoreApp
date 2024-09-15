using App.DTO.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace App.BL.Interface
{
 
    public interface IProductService
    {
        List<ProductDTO> GetAllProducts();
    }
}
