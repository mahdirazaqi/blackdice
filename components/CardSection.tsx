import { Product } from "@/lib/types/product";
import Link from "next/link";
import Card from "./Card";

interface Props {
  className?: string;
  title: string;
  link: string;
  products: Product[];
}

const CardSection = ({ className = "", title, link, products }: Props) => {
  return (
    <section className={`py-3 ${className}`}>
      <div className="flex justify-between items-center px-2">
        <h2 className="font-bold text-base">{title}</h2>

        <Link className="btn btn-sm btn-primary" href={link}>
          مشاهده همه
        </Link>
      </div>

      <div className="overflow-y-auto flex p-3 gap-3 md:overflow-visible md:grid md:grid-cols-2 md:grid-rows-2 lg:grid-rows-1 lg:grid-cols-4">
        {products.map((product) => (
          <Card
            key={product._id}
            className="min-w-[280px] md:min-w-0"
            product={product}
          />
        ))}
      </div>
    </section>
  );
};

export default CardSection;
