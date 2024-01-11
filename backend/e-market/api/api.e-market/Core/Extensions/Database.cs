using Microsoft.EntityFrameworkCore;
using repository.e_market.Context;

namespace api.e_market.Core.Extensions;

public static class Database
{
    public static IServiceCollection AddDatabaseConf(this IServiceCollection services, ConfigurationManager configuration)
    {
        var connectionString = configuration.GetConnectionString("SqlConnection");

        services.AddDbContext<ApplicationDbContext>(options =>
            options.UseSqlServer(connectionString)
                   .UseQueryTrackingBehavior(QueryTrackingBehavior.NoTracking));

        return services;
    }
}
