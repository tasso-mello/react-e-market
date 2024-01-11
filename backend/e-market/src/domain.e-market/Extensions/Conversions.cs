using AutoMapper;
using domain.e_market.Models;
using entities.e_market;

namespace domain.e_market.Extensions;

public static class Conversions
{
    public static IMapper mapper;

    #region Product

    public static MProduct ToModelProduct(this Product product)
        => mapper.Map<MProduct>(product);

    public static Product ToEntityProduct(this MProduct product)
        => mapper.Map<Product>(product);

    #endregion Product

    #region Stock

    public static MStock ToModelStock(this Stock stock)
        => mapper.Map<MStock>(stock);

    public static Stock ToEntityStock(this MStock stock)
        => mapper.Map<Stock>(stock);

    #endregion Stock
}
