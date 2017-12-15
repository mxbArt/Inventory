using System.Collections.Generic;
using InventoryApp.Logic.Domain.Dtos;

namespace InventoryApp.Logic.Domain.Models
{
    public class UpdatedItemsModel
    {
        public IEnumerable<ProductDto> UpdatedProducts { get; set; }

        public IEnumerable<CategoryDto> UpdatedCategories { get; set; }
    }
}
