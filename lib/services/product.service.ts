import axios from "axios";
import { urlParser } from "../common/url-parser";
import { GetProductsOutput } from "../dto/get-products";
import { GetProductOutput } from "../dto/get-product";

const ProductService = {
  getProducts: async (
    page: number = 1,
    limit: number = 10,
    sort: string = "-createdAt",
    tag: string = ""
  ): Promise<GetProductsOutput> => {
    const resp = await axios.get(
      urlParser(
        "/products",
        `?page=${page}`,
        `&limit=${limit}`,
        `&sort=${sort}`,
        `&tag=${tag}`
      )
    );

    if (!resp) throw new Error("get products error");

    return resp.data as GetProductsOutput;
  },

  getProduct: async (slug: string): Promise<GetProductOutput> => {
    console.log(slug);

    const resp = await axios.get(urlParser(`/products/${slug}`));

    if (!resp) throw new Error("get product error");

    return resp.data as GetProductOutput;
  },
};

export default ProductService;
