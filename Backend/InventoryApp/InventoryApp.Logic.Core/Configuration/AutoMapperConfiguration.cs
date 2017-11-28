using AutoMapper;
using InventoryApp.Data.Domain.Entities;
using InventoryApp.Logic.Domain.Dtos;

namespace InventoryApp.Logic.Core.Configuration
{
    public static class AutoMapperConfiguration
    {
        public static void Configure(IMapperConfigurationExpression cfg)
        {
            cfg.CreateMap<Category, CategoryDto>().ForMember(destinationMember: dest => dest.Products,
                memberOptions: opt => opt.MapFrom(src => src.Products));
            cfg.CreateMap<Product, ProductDto>().ForMember(destinationMember: dest => dest.CategoryId,
                memberOptions: opt => opt.MapFrom(src => src.Category.Id));
        }
    }
}
