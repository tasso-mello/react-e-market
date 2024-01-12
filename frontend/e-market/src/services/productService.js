import {get, post, put, remove} from "../communication/api-e-market"

export const getProducts = () => get("Product");
export const getProductById = (id) => get(`Product/${id}`);
export const filterProduct = (filter) => get(`Product/${filter}/filter`);
export const postProduct = (productData) => post("Product", productData);
export const putProduct = (productData) => put("Product", productData);
export const deleteProduct = (id) => remove(`Product/${id}`);