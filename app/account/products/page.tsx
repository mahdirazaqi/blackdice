import Pagination from "@/components/Pagination";
import { fileUrl } from "@/lib/common/file-link";
import ProductService from "@/lib/services/product.service";
import Image from "next/image";
import Link from "next/link";

const Products = async ({ searchParams }: any) => {
  const page = searchParams.page || 1;
  const limit = 30;

  const resp = await ProductService.getProducts(page, limit);

  const totalPages = Math.ceil(resp.pagination.totalCount / limit);

  return (
    <main>
      <div className="flex justify-between items-center py-2">
        <h2 className="font-bold text-base">محصولات</h2>

        <Link className="btn btn-sm btn-primary" href="/account/products/add">
          محصول جدید
        </Link>
      </div>

      <div>
        <div className="bg-base-200 rounded-lg flex items-center p-2 my-2">
          <div className="w-[50px] grow-0 text-center font-bold ">تصویر</div>
          <div className="grow px-2 font-bold">عنوان</div>
          <div className="w-28 grow-0 mx-2 text-center font-bold">
            قیمت مرجع
          </div>
          <div className="w-28 grow-0 mx-2 text-center font-bold">
            قیمت فروش
          </div>
          <div className="w-14 grow-0 mx-2 text-center font-bold">موجودی</div>
        </div>

        {resp.products.map((product) => (
          <div
            key={product.slug}
            className="bg-base-200 rounded-lg flex items-center p-2 my-2"
          >
            <Image
              className="grow-0 rounded-lg aspect-square object-cover"
              src={fileUrl(product.images[0])}
              width={50}
              height={50}
              alt={product.title}
            />
            <div className="grow px-2">{product.title}</div>
            <div className="w-28 grow-0 mx-2 text-center">
              {product.referencePrice.toLocaleString()}
            </div>
            <div className="w-28 grow-0 mx-2 text-center">
              {product.salePrice.toLocaleString()}
            </div>
            <div className="w-14 grow-0 mx-2 text-center">
              {product.stockQuantity.toLocaleString()}
            </div>
          </div>
        ))}
      </div>

      <Pagination totalPages={totalPages} />
    </main>
  );
};

export default Products;
