using core.e_market.Contracts;
using core.e_market.Implementation;
using System.Reflection.Metadata;

namespace api.e_market.Core.Extensions;

public static class CoreInjections
{
    public static IServiceCollection AddCoreInjections(this IServiceCollection services)
    {
        services.AddScoped<ICoreStock, CoreStock>();
        services.AddScoped<ICoreProduct, CoreProduct>();

        return services;
    }
}
