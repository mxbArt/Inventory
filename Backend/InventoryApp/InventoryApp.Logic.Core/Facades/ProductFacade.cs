using System;
using System.Collections.Generic;
using AutoMapper;
using InventoryApp.Data.Domain.Entities;
using InventoryApp.Data.Logic.Interfaces;
using InventoryApp.Logic.Core.Interfaces;
using InventoryApp.Logic.Domain.Dtos;
using InventoryApp.Logic.Domain.Models;

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

        public void ProcessWaybill(List<WaybillItem> waybill)
        {
            foreach (var item in waybill)
            {
                _uow.ProductRepository.GetById(item.ProductId).Count += item.Count;
            }
            _uow.SaveChanges();
        }
    }
}
