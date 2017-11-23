using System;
using System.Collections.Generic;
using System.Text;
using InventoryApp.Data.Domain.Entities;
using InventoryApp.Data.Logic.Interfaces;

namespace InventoryApp.Data.Logic.Implementations
{
    public class ProductRepository : IProductRepository
    {
        public IEnumerable<Product> GetAll()
        {
            throw new NotImplementedException();
        }

        public IEnumerable<Product> GetByCategory(Guid categoryId)
        {
            throw new NotImplementedException();
        }

        public Product GetById(Guid id)
        {
            throw new NotImplementedException();
        }

        public void Insert(Product newProduct)
        {
            throw new NotImplementedException();
        }

        public void Delete(Guid id)
        {
            throw new NotImplementedException();
        }

        public void Update(Product updatedProduct)
        {
            throw new NotImplementedException();
        }
    }
}
