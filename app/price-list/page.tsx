import PriceListService from "@/lib/services/priceList.service";
import { Product } from "@/lib/types/product";
import Image from "next/image";

const PriceList = async () => {
  const resp = await PriceListService.getPriceList();
  const products: Product[] = resp.data.products;

  return (
    <div className="container mx-auto">
      <div className="overflow-x-auto">
        <table className="table">
          <thead>
            <tr>
              <th className="text-center">-</th>
              <th className="text-center">اسم</th>
              <th className="text-center">دسته بندی</th>
              <th className="text-center">قیمت (تومان)</th>
            </tr>
          </thead>

          <tbody>
            {products.map((product: Product, index: number) => (
              <tr key={product._id}>
                <td className="min-w-[80px] min-h-[80px] md:w-28 md:h-28 p-2">
                  <Image
                    src={`${process.env.NEXT_PUBLIC_BASE_URL}/${product.images[0]?.paths.small}`}
                    alt={product.title}
                    width={200}
                    height={200}
                  ></Image>
                </td>

                <td>{product.title}</td>
                <td className="text-center">
                  {product.tags.map((tag, i) => (
                    <div key={i} className="badge badge-primary m-0.5">
                      {tag}
                    </div>
                  ))}
                </td>
                <td className="text-center">
                  {product.referencePrice.toLocaleString()}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PriceList;
