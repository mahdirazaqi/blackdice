import Card from "@/components/Card";
import Pagination from "@/components/Pagination";
import ProductService from "@/lib/services/product.service";

const Products = async ({ searchParams }: any) => {
  const page = searchParams.page || 1;
  const limit = 12;

  const resp = await ProductService.getProducts(page, limit);

  const totalPages = Math.ceil(resp.pagination.totalCount / limit);

  return (
    <main>
      <div className="md:container m-auto">
        <div className="flex">
          <div className="w-full p-2">
            <div className="gap-2 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              {resp.products.map((product) => (
                <Card key={product.slug} product={product} />
              ))}
            </div>

            <Pagination totalPages={totalPages} />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Products;
