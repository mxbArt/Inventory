using System;
using System.Collections.Generic;

namespace InventoryApp.Data.Domain.Entities
{
    public partial class Category
    {
        public Category()
        {
            Products = new HashSet<Product>();
        }

        public Guid Id { get; set; }
        public string Name { get; set; }
        public string ImgPath { get; set; }

        public ICollection<Product> Products { get; set; }
    }
}
