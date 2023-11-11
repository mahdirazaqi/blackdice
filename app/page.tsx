import CardSection from "@/components/CardSection";
import ProductService from "@/lib/services/product.service";

const Root = async () => {
  const newGames = await ProductService.getProducts(1, 4);
  const strategyGames = await ProductService.getProducts(1, 4, "استراتژی");
  const partyGames = await ProductService.getProducts(1, 4, "مهمانی");
  const familyGames = await ProductService.getProducts(1, 4, "خانوادگی");

  return (
    <main>
      <div className="md:container m-auto">
        <CardSection
          title="جدیدترین بردگیم‌ها"
          link="#"
          products={newGames.products}
        />
      </div>

      <div className="md:container m-auto">
        <CardSection
          title="بردگیم‌های استراتژی"
          link="/products?tag=استراتژی"
          products={strategyGames.products}
        />
      </div>

      <div className="md:container m-auto">
        <CardSection
          title="بردگیم‌های مهمانی"
          link="/products?tag=مهمانی"
          products={partyGames.products}
        />
      </div>

      <div className="md:container m-auto">
        <CardSection
          title="بردگیم‌های خانوادگی"
          link="/products?tag=خانوادگی"
          products={familyGames.products}
        />
      </div>
    </main>
  );
};

export default Root;
