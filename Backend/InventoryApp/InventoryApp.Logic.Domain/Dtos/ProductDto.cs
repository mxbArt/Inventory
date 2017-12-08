using System;

namespace InventoryApp.Logic.Domain.Dtos
{
    public class ProductDto
    {
        public Guid Id { get; set; }
        public string Name { get; set; }
        public int Count { get; set; }
        public DateTime LastUpdate { get; set; }
        public string Description { get; set; }
        public string Measurement { get; set; }
        public string ImgPath { get; set; }

        public Guid CategoryId { get; set; }
    }
}
