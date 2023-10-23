import axios, { AxiosResponse } from "axios";
import { Product } from "../types/product";
import { urlParser } from "../common/url-parser";

const ProductService = {
  getProducts: async (limit: number = 10): Promise<Product[]> => {
    const resp = await axios.get(
      urlParser("/products", "?sort=-createdAt", `&limit=${limit}`)
    );

    if (!resp) throw new Error("get products error");

    return resp.data.products as Product[];
  },
};

export default ProductService;
