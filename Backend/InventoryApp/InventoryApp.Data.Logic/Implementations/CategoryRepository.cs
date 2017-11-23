﻿using System;
using System.Collections.Generic;
using System.Linq;
using InventoryApp.Data.Domain.Entities;
using InventoryApp.Data.Logic.Interfaces;
using Microsoft.EntityFrameworkCore;

namespace InventoryApp.Data.Logic.Implementations
{
    public class CategoryRepository : ICategoryRepository
    {
        //private InventoryContext _context;
        private DbSet<Category> _categories;

        public CategoryRepository()
        {
            //_context = new InventoryContext();
            _categories = (new InventoryContext()).Category;
        }

        public IEnumerable<Category> GetAll()
        {
            return _categories.ToList();
        }

        public Category GetById(Guid id)
        {
            return _categories.Find(id); 
        }

        public void Insert(Category newCategory)
        {
            _categories.Add(newCategory);
        }

        public void Delete(Guid id)
        {
            _categories.Remove(GetById(id));
        }

        // todo: test method.
        public void Update(Category updatedCategory)
        {
            _categories.Update(updatedCategory);
        }
    }
}
