using System;
using System.Collections.Generic;

namespace InventoryApp.Logic.Domain.Dtos
{
    public class CategoryDto
    {
        public CategoryDto()
        {
            Products = new List<ProductDto>();
        }

        public Guid Id { get; set; }
        public string Name { get; set; }
        public string ImgPath { get; set; }

        public List<ProductDto> Products { get; set; }
    }
}
