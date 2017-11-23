using System;
using System.Collections.Generic;
using System.Text;
using InventoryApp.Data.Domain.Entities;
using InventoryApp.Data.Logic.Interfaces;

namespace InventoryApp.Data.Logic.Implementations
{
    public class CategoryRepository : ICategoryRepository
    {
        public IEnumerable<Category> GetAll()
        {
            throw new NotImplementedException();
        }

        public Category GetById(Guid id)
        {
            throw new NotImplementedException();
        }

        public void Insert(Category newCategory)
        {
            throw new NotImplementedException();
        }

        public void Delete(Guid id)
        {
            throw new NotImplementedException();
        }

        public void Update(Category updatedCategory)
        {
            throw new NotImplementedException();
        }
    }
}
