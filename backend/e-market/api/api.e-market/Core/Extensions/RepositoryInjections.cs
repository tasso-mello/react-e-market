using repository.e_market.Repositories;

namespace api.e_market.Core.Extensions;

public static class RepositoryInjections
{
    public static IServiceCollection AddRepositoryInjections(this IServiceCollection services)
    {
        services.AddScoped<IRepositoryStock, RepositoryStock>();
        services.AddScoped<IRepositoryProduct, RepositoryProduct>();

        return services;
    }
}
