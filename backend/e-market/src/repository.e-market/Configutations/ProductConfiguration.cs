using entities.e_market;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace repository.e_market.Configutations
{
    public class ProductConfiguration : IEntityTypeConfiguration<Product>
    {
        public void Configure(EntityTypeBuilder<Product> builder)
        {
            builder.HasKey(p => p.Id);
            builder.Property(p => p.Id).ValueGeneratedOnAdd(); 
            builder.Property(p => p.Name).IsRequired();
            builder.HasIndex(p => p.Name).IsUnique();
            builder.Property(p => p.Price).IsRequired();
        }
    }
}
