using System;
using System.Collections.Generic;
using System.Linq;
using AutoMapper;
using InventoryApp.Data.Domain.Entities;
using InventoryApp.Data.Logic.Interfaces;
using InventoryApp.Logic.Core.Interfaces;
using InventoryApp.Logic.Domain.Dtos;

namespace InventoryApp.Logic.Core.Facades
{
    public class CategoryFacade : ICategoryFacade
    {
        private readonly ICategoryRepository _categories;
        private readonly IMapper _mapper;

        public CategoryFacade(IMapper mapper, ICategoryRepository categoryRepository)
        {
            _mapper = mapper;
            _categories = categoryRepository;
        }

        public IEnumerable<CategoryDto> GetCategories()
        {
            return _mapper.Map<List<Category>, List<CategoryDto>>(_categories.GetAll().ToList());
        }

        public CategoryDto GetCategoryProducts(Guid categoryId)
        {
            return _mapper.Map<Category, CategoryDto>(_categories.GetById(categoryId));
        }
    }
}
