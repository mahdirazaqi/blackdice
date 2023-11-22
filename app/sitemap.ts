import { MetadataRoute } from "next";
import ProductService from "@/lib/services/product.service";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const resp = await ProductService.getProducts(1, 100000);

  const sitemap = resp.products.map((product) => {
    return {
      url: `https://blackdice.ir/products/${product._id}`,
      lastModified: product.updatedAt,
    };
  });

  return sitemap;
}
