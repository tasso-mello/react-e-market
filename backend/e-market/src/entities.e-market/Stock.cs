﻿namespace entities.e_market
{
    public class Stock
    {
        public int Id { get; set; }
        public int ProductId { get; set; }
        public virtual ICollection<Product> Products { get; set; }
        public int Quantity { get; set; }
    }
}
