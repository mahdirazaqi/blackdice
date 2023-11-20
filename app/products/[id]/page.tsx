import Slider from "@/components/Slider";
import { fileUrl } from "@/lib/common/file-link";
import ProductService from "@/lib/services/product.service";
import Image from "next/image";

const Product = async ({ params }: any) => {
  const { product } = await ProductService.getProduct(params.id);

  const { products } = await ProductService.getProducts(
    1,
    10,
    "-createdAt",
    product.tags[0]
  );

  return (
    <main>
      <div className="md:container m-auto">
        <div className="flex">
          <div className="grow-0">
            <Image
              className="rounded-xl"
              src={fileUrl(product.images[0])}
              width={400}
              height={400}
              alt={product.title}
            />
          </div>

          <div className="grow p-3 flex flex-col justify-between">
            <div>
              <h1 className="text-xl font-bold">{product.title}</h1>

              <div>
                {product.tags.map((tag, index) => (
                  <div key={index} className="badge badge-ghost text-xs">
                    {tag}
                  </div>
                ))}
              </div>
            </div>

            <div className="w-fit">
              <div className="text-center text-xs line-through text-gray-400 m-1">
                {product.salePrice < product.referencePrice
                  ? product.referencePrice.toLocaleString() + " تومان"
                  : ""}
              </div>

              <div className="text-center text-md m-1">
                {product.salePrice.toLocaleString() + " "}
                تومان
              </div>

              <button className="btn btn-wide btn-neutral">
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

          <Slider products={products} />
        </div>
      </div>
    </main>
  );
};

export default Product;
