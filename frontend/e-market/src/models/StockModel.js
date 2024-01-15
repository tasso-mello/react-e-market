import ProductModel from "./ProductModel";

class StockModel {
  constructor(productModel, quantity, id) {
    this.Id = id || 0;
    this.Product = productModel;
    this.Quantity = quantity;
  }
}

export default StockModel;