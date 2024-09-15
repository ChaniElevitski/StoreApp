using App.DAL.Entities;

namespace App.DAL.Interface
{
    public interface IProductRepository
    {
        List<Product> GetAllProducts();
    }
}