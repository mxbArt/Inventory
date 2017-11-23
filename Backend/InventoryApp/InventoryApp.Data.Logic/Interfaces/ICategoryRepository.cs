using System;
using System.Collections.Generic;
using InventoryApp.Data.Domain.Entities;

namespace InventoryApp.Data.Logic.Interfaces
{
    public interface ICategoryRepository
    {
        IEnumerable<Category> GetAll();

        Category GetById(Guid id);

        void Insert(Category newCategory);

        void Delete(Guid id);

        void Update(Category updatedCategory);
    }
}
