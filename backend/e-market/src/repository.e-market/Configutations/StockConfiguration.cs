using entities.e_market;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace repository.e_market.Configutations
{
    public class StockConfiguration : IEntityTypeConfiguration<Stock>
    {
        public void Configure(EntityTypeBuilder<Stock> builder)
        {
            builder.HasKey(p => p.Id);
            builder.Property(p => p.Id).ValueGeneratedOnAdd();
            builder.Property(p => p.Quantity).IsRequired();
            builder.Property(p => p.ProductId).IsRequired();
            builder.HasIndex(p => p.ProductId).IsUnique();
        }
    }
}
