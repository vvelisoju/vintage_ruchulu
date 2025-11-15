import { Product } from "../types/product";
import { ProductCard } from "./ProductCard";

interface ProductGridProps {
  products: Product[];
  onAddToCart: (product: Product) => void;
  onViewDetails: (product: Product) => void;
}

export function ProductGrid({ products, onAddToCart, onViewDetails }: ProductGridProps) {
  return (
    <section className="py-8 sm:py-12" data-testid="section-products">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-6 sm:mb-8" data-testid="text-products-heading">
          Our Pickles
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6" data-testid="grid-products">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onAddToCart={onAddToCart}
              onViewDetails={onViewDetails}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
