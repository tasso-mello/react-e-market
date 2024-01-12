import {get, post, put, remove} from "../communication/api-e-market"

export const getStocks = () => get("Stock");
export const getStockById = (id) => get(`Stock/${id}`);
export const filterStock = (filter) => get(`Stock/${filter}/filter`);
export const postStock = (stockData) => post("Stock", stockData);
export const putStock = (stockData) => put("Stock", stockData);
export const deleteStock = (id) => remove(`Stock/${id}`);