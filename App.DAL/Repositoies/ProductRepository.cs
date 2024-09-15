using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using App.DAL.DataContext;
using App.DAL.Entities;
using App.DAL.Interface;

namespace App.DAL.Repositories
{
    public class ProductRepository : IProductRepository
    {
        private ShopContext dbContext;

        public ProductRepository(ShopContext ShopContext)
        {
            dbContext = ShopContext;
        }

        public List<Product> GetAllProducts()
        {
            return dbContext.Products.ToList();
        }

        //public Product GetProductById(int id)
        //{
        //    return dbContext.Products.Find(x => x.Id == id);
        //}
    }
}
