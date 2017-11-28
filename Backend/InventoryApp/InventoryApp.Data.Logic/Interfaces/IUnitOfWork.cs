namespace InventoryApp.Data.Logic.Interfaces
{
    public interface IUnitOfWork
    {
        ICategoryRepository CategoryRepository { get; }

        IProductRepository ProductRepository { get; }

        void SaveChanges();
    }
}
