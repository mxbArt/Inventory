using InventoryApp.Logic.Domain.Models;

namespace InventoryApp.Logic.Core.Interfaces
{
    public interface IManagementFacade
    {
        void UpdateItems(UpdatedItemsModel updatedItems);
    }
}
