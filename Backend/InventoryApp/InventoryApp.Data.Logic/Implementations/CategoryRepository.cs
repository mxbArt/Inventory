using System;
using System.Collections.Generic;
using System.Linq;
using InventoryApp.Data.Domain.Entities;
using InventoryApp.Data.Logic.Interfaces;
using Microsoft.EntityFrameworkCore;

namespace InventoryApp.Data.Logic.Implementations
{
    public class CategoryRepository : ICategoryRepository
    {
        private readonly DbSet<Category> _categories;

        public CategoryRepository(DbContext context)
        {
            _categories = context.Set<Category>();
        }

        public IEnumerable<Category> GetAll(bool includeProducts)
        {
            IEnumerable<Category> categories;
            if (includeProducts)
            {
                categories = _categories
                    .Include("Products");
            }
            else
            {
                categories = _categories;
            }

            return categories
                .OrderBy(x => x.Name);
        }

        public Category GetById(Guid id, bool includeProducts)
        {
            if (includeProducts)
            {
                return _categories.Include("Products").Single(c => c.Id == id);
            }

            return _categories
                .Single(c => c.Id == id);
        }

        public void Insert(Category newCategory)
        {
            _categories.Add(newCategory);
        }

        public void Delete(Guid id)
        {
            _categories.Remove(_categories.Single(c => c.Id == id));
        }

        // todo: test method.
        public void Update(Category updatedCategory)
        {
            _categories.Update(updatedCategory);
        }

        public void UpdateRange(IEnumerable<Category> updatedCategories)
        {
            _categories.UpdateRange(updatedCategories);
        }
    }
}
