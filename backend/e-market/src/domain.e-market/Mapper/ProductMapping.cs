using AutoMapper;
using domain.e_market.Models;
using entities.e_market;

namespace domain.e_market.Mapper
{
    public class ProductMapping : Profile
    {
        public ProductMapping()
        {
            CreateMap<MProduct, Product>();
            CreateMap<Product, MProduct>();
        }
    }
}
