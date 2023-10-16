import PriceListService from "@/lib/services/priceList.service";
import { Product } from "@/lib/types/product";
import Image from "next/image";

const PriceList = async () => {
  const resp = await PriceListService.getPriceList();
  const products: Product[] = resp.data.products;

  return (
    <div className="container mx-auto">
      <div className="overflow-x-auto">
        <table className="table table-lg">
          <thead>
            <tr>
              <th className="text-center">تصویر</th>
              <th className="text-center">اسم</th>
              <th className="text-center">موجودی</th>
              <th className="text-center">قیمت</th>
            </tr>
          </thead>

          <tbody>
            {products.map((product: Product, index: number) => (
              <tr key={product._id}>
                <td className="w-32 h-32 p-2">
                  <Image
                    src={`${process.env.NEXT_PUBLIC_BASE_URL}/${product.images[0]?.paths.small}`}
                    alt={product.title}
                    width={200}
                    height={200}
                  ></Image>
                </td>

                <td>{product.title}</td>
                <td className="text-center">{product.stockQuantity}</td>
                <td className="text-center">
                  {product.referencePrice.toLocaleString()} تومان
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
