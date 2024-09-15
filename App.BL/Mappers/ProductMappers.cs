using App.DAL.Entities;
using App.DTO.Models;

namespace App.BL.Mappers
{
    internal static class ProductMappers
    {
        internal static Product Map(ProductDTO productDto)
        {
            return new Product
            {
                Id = productDto.Id,
                Name = productDto.Name,
                Description = productDto.Description,
                Price = productDto.Price,
                Img = productDto.Img
            };
        }

        internal static ProductDTO Map(Product product)
        {
            return new ProductDTO
            {
                Id = product.Id,
                Name = product.Name,
                Description = product.Description,
                Price = product.Price,
                Img = product.Img
            };
        }
    }
}
