using System;
using System.Collections.Generic;
using InventoryApp.Data.Domain.Entities;

namespace InventoryApp.Data.Logic.Interfaces
{
    public interface ICategoryRepository
    {
        IEnumerable<Category> GetAll(bool includeProducts);

        Category GetById(Guid id, bool includeProducts);

        void Insert(Category newCategory);

        void Delete(Guid id);

        void Update(Category updatedCategory);

        void UpdateRange(IEnumerable<Category> updatedCategories);
    }
}
