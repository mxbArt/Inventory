﻿using System;
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
        private readonly IUnitOfWork _uow;
        private readonly IMapper _mapper;

        public CategoryFacade(IMapper mapper, IUnitOfWork uow)
        {
            _mapper = mapper;
            _uow = uow;
        }

        public IEnumerable<CategoryDto> GetCategories(bool includeProducts = false)
        {
            return _mapper.Map<List<Category>, List<CategoryDto>>(_uow.CategoryRepository.GetAll(includeProducts).ToList());
        }

        public CategoryDto GetCategory(Guid categoryId, bool includeProducts = false)
        {
            return _mapper.Map<Category, CategoryDto>(_uow.CategoryRepository.GetById(categoryId, includeProducts));
        }
    }
}
