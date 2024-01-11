using entities.e_market;
using repository.e_market.Context;
using repository.e_market.Infrastructure;

namespace repository.e_market.Repositories;

public interface IStockRepository : IRepository<Stock> { }

public class StockRepository : Repository<Stock>, IStockRepository
{
    public StockRepository(ApplicationDbContext dbContext) : base(dbContext) { }
}
