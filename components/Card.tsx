import { fileUrl } from "@/lib/common/file-link";
import { Product } from "@/lib/types/product";
import Image from "next/image";
import Link from "next/link";

interface Props {
  className?: string;
  product: Product;
}

const Card = ({ className, product }: Props) => {
  return (
    <div className={`card w-full shadow-lg bg-white ${className}`}>
      <figure>
        <Link href={`/products/${product._id}`} className="w-full h-full">
          <Image
            className="w-full h-full aspect-square object-cover object-center"
            src={fileUrl(product.images[0])}
            alt={product.title}
            width={0}
            height={0}
            sizes="100vw"
          />
        </Link>
      </figure>

      <div className="card-body p-5 gap-3">
        <Link href={`/products/${product._id}`}>
          <div className="tooltip w-full" data-tip={product.title}>
            <h2 className="card-title text-right text-base block truncate">
              {product.title}
            </h2>
          </div>
        </Link>

        <div className="text-center text-md mt-2">
          {product.salePrice.toLocaleString() + " "}
          تومان
        </div>

        <div className="h-4 text-center text-xs -mt-2 line-through text-gray-400">
          {product.salePrice < product.referencePrice
            ? product.referencePrice.toLocaleString() + " تومان"
            : ""}
        </div>

        <div className="card-actions justify-end">
          {product.tags.map((tag, index) => (
            <Link key={index} href={`/products?tag=${tag}`}>
              <div className="badge badge-ghost text-xs">{tag}</div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Card;
