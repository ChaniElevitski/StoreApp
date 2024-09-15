using App.BL.Mappers;
using App.BL.Interface;
using App.DAL.Entities;
using App.DAL.Interface;
using App.DTO.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace App.BL.Services
{
    public class ProductService : IProductService
    {
        private IProductRepository products;

        public ProductService(IProductRepository productRepository)
        {
            products = productRepository;
        }

        public List<ProductDTO> GetAllProducts()
        {
            List<Product> productList = products.GetAllProducts();
            return productList.Select(p => ProductMappers.Map(p)).ToList();
        }
    }
}
