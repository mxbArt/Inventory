using System;
using System.Collections.Generic;
using AutoMapper;
using InventoryApp.Data.Domain.Entities;
using InventoryApp.Data.Logic.Interfaces;
using InventoryApp.Logic.Core.Interfaces;
using InventoryApp.Logic.Domain.Dtos;

namespace InventoryApp.Logic.Core.Facades
{
    public class ProductFacade : IProductFacade
    {
        private readonly IProductRepository _products;
        private readonly IMapper _mapper;

        public ProductFacade(IMapper mapper, IProductRepository products)
        {
            _mapper = mapper;
            _products = products;
        }
        
        public ProductDto GetProduct(Guid productId)
        {
            return _mapper.Map<Product, ProductDto>(_products.GetById(productId));
        }
    }
}
