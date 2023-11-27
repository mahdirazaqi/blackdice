import Slider from "@/components/Slider";
import { fileUrl } from "@/lib/common/file-link";
import ProductService from "@/lib/services/product.service";
import Head from "next/head";
import Image from "next/image";

const Product = async ({ params }: any) => {
  const { product } = await ProductService.getProduct(params.slug);

  const { products } = await ProductService.getProducts(
    1,
    10,
    "-createdAt",
    product.tags[0]
  );

  return (
    <main>
      <Head>
        <title>{product.title} | بلک دایس</title>
      </Head>

      <div className="md:container m-auto px-2">
        <div className="flex flex-wrap">
          <div className="sm:grow-0">
            <Image
              className="rounded-xl w-full sm:w-[300px] md:w-[400px]"
              src={fileUrl(product.images[0])}
              width={400}
              height={400}
              alt={product.title}
            />
          </div>

          <div className="w-full sm:w-fit sm:grow py-3 sm:p-3 flex flex-col justify-between">
            <div>
              <h1 className="text-xl font-bold mb-3">{product.title}</h1>

              <div>
                {product.tags.map((tag, index) => (
                  <div
                    key={index}
                    className="badge badge-ghost text-xs mr-3 mb-10"
                  >
                    {tag}
                  </div>
                ))}
              </div>
            </div>

            <div className="w-full sm:w-fit">
              <div className="text-center text-sm line-through text-gray-400 m-1">
                {product.salePrice < product.referencePrice
                  ? product.referencePrice.toLocaleString() + " تومان"
                  : ""}
              </div>

              <div className="text-center text-lg mt-1 mb-3">
                {product.salePrice.toLocaleString() + " "}
                تومان
              </div>

              <button className="btn btn-block sm:btn-wide btn-neutral">
                افزودن به سبدخرید
              </button>
            </div>
          </div>
        </div>

        <div className="mt-3">
          <h3 className="text-xl font-bold mt-2 mb-0">توضیحات</h3>

          <p className="text-justify">{product.description}</p>
        </div>

        <div className="mt-3">
          <h3 className="text-xl font-bold mt-2 mb-1">در همین سبک</h3>

          <Slider
            products={products}
            xs={2.5}
            sm={2.5}
            md={3.5}
            lg={4.5}
            xl={5.5}
            xxl={6.5}
          />
        </div>
      </div>
    </main>
  );
};

export default Product;
