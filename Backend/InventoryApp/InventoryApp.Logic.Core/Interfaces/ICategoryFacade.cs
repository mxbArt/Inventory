using System;
using System.Collections.Generic;
using InventoryApp.Logic.Domain.Dtos;

namespace InventoryApp.Logic.Core.Interfaces
{
    public interface ICategoryFacade
    {
        IEnumerable<CategoryDto> GetCategories();

        CategoryDto GetCategoryWithProducts(Guid categoryId);
    }
}
