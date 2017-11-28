using System;
using AutoMapper;
using InventoryApp.Data.Domain.Entities;
using InventoryApp.Data.Logic.Interfaces;
using InventoryApp.Logic.Core.Interfaces;
using InventoryApp.Logic.Domain.Dtos;

namespace InventoryApp.Logic.Core.Facades
{
    public class ProductFacade : IProductFacade
    {
        private readonly IUnitOfWork _uow;
        private readonly IMapper _mapper;

        public ProductFacade(IMapper mapper, IUnitOfWork uow)
        {
            _mapper = mapper;
            _uow = uow;
        }
        
        public ProductDto GetProduct(Guid productId)
        {
            return _mapper.Map<Product, ProductDto>(_uow.ProductRepository.GetById(productId));
        }
    }
}
