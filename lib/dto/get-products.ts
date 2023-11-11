import { Pagination } from "../types/pagination";
import { Product } from "../types/product";

export interface GetProductsOutput {
  message: string;
  pagination: Pagination;
  products: Product[];
}
