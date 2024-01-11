using entities.e_market;
using repository.e_market.Context;
using repository.e_market.Infrastructure;

namespace repository.e_market.Repositories;

public interface IRepositoryStock : IRepository<Stock> { }

public class RepositoryStock : Repository<Stock>, IRepositoryStock
{
    public RepositoryStock(ApplicationDbContext dbContext) : base(dbContext) { }
}
