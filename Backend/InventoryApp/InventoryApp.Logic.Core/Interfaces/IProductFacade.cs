using System;
using InventoryApp.Logic.Domain.Dtos;

namespace InventoryApp.Logic.Core.Interfaces
{
    public interface IProductFacade
    {
        ProductDto GetProduct(Guid productId);
    }
}
