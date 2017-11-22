using System;

namespace InventoryApp.Data.Domain.Entities
{
    public class Product
    {
        public Guid Id { get; set; }
        public Guid CategoryId { get; set; }
        public string Name { get; set; }
        public int Count { get; set; }
        public DateTime LastUpdate { get; set; }
        public string Description { get; set; }
        public string Measurment { get; set; }
        public string ImgPath { get; set; }
    }
}
