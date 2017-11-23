using System;
using System.Collections.Generic;
using InventoryApp.Data.Domain.Entities;

namespace InventoryApp.Data.Logic.Interfaces
{
    public interface IProductRepository
    {
        IEnumerable<Product> GetAll();

        Product GetById(Guid id);

        void Insert(Product newProduct);

        void Delete(Guid id);

        void Update(Product updatedProduct);
    }
}
