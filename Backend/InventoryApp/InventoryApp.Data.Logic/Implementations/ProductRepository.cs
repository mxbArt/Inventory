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
        private DbSet<Product> _products;

        public ProductRepository()
        {
            _products = (new InventoryContext()).Product;
        }

        public IEnumerable<Product> GetAll()
        {
            return _products.ToList();
        }
        
        public Product GetById(Guid id)
        {
            return _products.Find(id);
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
    }
}
