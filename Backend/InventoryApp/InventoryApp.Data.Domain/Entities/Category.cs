using System;

namespace InventoryApp.Data.Domain.Entities
{
    public class Category
    {
        public Guid Id { get; set; }
        public string Name { get; set; }
        public string ImgPath { get; set; }
    }
}
