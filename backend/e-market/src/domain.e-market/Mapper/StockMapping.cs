using AutoMapper;
using domain.e_market.Models;
using entities.e_market;

namespace domain.e_market.Mapper
{
    public class StockMapping : Profile
    {
        public StockMapping()
        {
            CreateMap<MStock, Stock>();
            CreateMap<Stock, MStock>();
        }
    }
}
