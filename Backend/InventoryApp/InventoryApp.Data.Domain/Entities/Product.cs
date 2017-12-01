using System;
using System.Collections.Generic;

namespace InventoryApp.Data.Domain.Entities
{
    public partial class Product
    {
        public Product()
        {
            ProductLog = new HashSet<ProductLog>();
        }

        public Guid Id { get; set; }
        public Guid CategoryId { get; set; }
        public string Name { get; set; }
        public int Count { get; set; }
        public DateTime LastUpdate { get; set; }
        public string Description { get; set; }
        public string Measurment { get; set; }
        public string ImgPath { get; set; }

        public Category Category { get; set; }
        public ICollection<ProductLog> ProductLog { get; set; }
    }
}
