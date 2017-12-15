using System;
using System.Collections.Generic;
using System.Linq;
using InventoryApp.Data.Domain.Entities;
using InventoryApp.Data.Logic.Interfaces;
using Microsoft.EntityFrameworkCore;

namespace InventoryApp.Data.Logic.Implementations
{
    public class ProductRepository : IProductRepository
    {
        private readonly DbSet<Product> _products;

        public ProductRepository(DbContext context)
        {
            _products = context.Set<Product>();
        }

        public IEnumerable<Product> GetAll()
        {
            return _products.Include("Category");
        }
        
        public Product GetById(Guid id)
        {
            return _products.Include("Category").Single(x => x.Id == id);
        }

        public void Insert(Product newProduct)
        {
            _products.Add(newProduct);
        }

        public void Delete(Guid id)
        {
            _products.Remove(GetById(id));
        }

        // todo: test method.
        public void Update(Product updatedProduct)
        {
            _products.Update(updatedProduct);
        }

        public void UpdateRange(IEnumerable<Product> updatedProducts)
        {
            foreach (var product in updatedProducts)
            {
                var oldProduct = _products.AsNoTracking().First(p => p.Id == product.Id);
                product.Category = oldProduct.Category;
                product.ProductLog = oldProduct.ProductLog;
            }
            _products.UpdateRange(updatedProducts);
        }
    }
}
