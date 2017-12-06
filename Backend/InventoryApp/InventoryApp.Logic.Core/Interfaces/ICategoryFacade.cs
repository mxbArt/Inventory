using System;
using System.Collections.Generic;
using InventoryApp.Logic.Domain.Dtos;

namespace InventoryApp.Logic.Core.Interfaces
{
    public interface ICategoryFacade
    {
        IEnumerable<CategoryDto> GetCategories(bool includeProducts = false);

        CategoryDto GetCategory(Guid categoryId, bool includeProducts = false);
    }
}
