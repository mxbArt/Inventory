using System.Collections.Generic;
using System.Linq;
using AutoMapper;
using InventoryApp.Data.Domain.Entities;
using InventoryApp.Data.Logic.Interfaces;
using InventoryApp.Logic.Core.Interfaces;
using InventoryApp.Logic.Domain.Models;

namespace InventoryApp.Logic.Core.Facades
{
    public class ManagementFacade : IManagementFacade
    {
        private readonly IUnitOfWork _uow;
        private readonly IMapper _mapper;

        public ManagementFacade(IUnitOfWork uow, IMapper mapper)
        {
            _uow = uow;
            _mapper = mapper;
        }

        public void UpdateItems(UpdatedItemsModel updatedItems)
        {
            if (updatedItems.UpdatedCategories.Count() != 0)
            {
                _uow.CategoryRepository.UpdateRange(_mapper.Map<IEnumerable<Category>>(updatedItems.UpdatedCategories));
            }
            if (updatedItems.UpdatedProducts.Count() != 0)
            {
                _uow.ProductRepository.UpdateRange(_mapper.Map<IEnumerable<Product>>(updatedItems.UpdatedProducts));
            }
            _uow.SaveChanges();
        }
    }
}
