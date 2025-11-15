import { useState } from "react";
import { Product } from "../types/product";
import { ProductCard } from "./ProductCard";
import { Button } from "@/components/ui/button";

interface ProductGridProps {
  products: Product[];
  onAddToCart: (product: Product) => void;
  onViewDetails: (product: Product) => void;
}

export function ProductGrid({ products, onAddToCart, onViewDetails }: ProductGridProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const categories = [
    { id: "all", label: "All Products" },
    { id: "pickles", label: "Pickles" },
    { id: "sweets", label: "Healthy Sweets" },
    { id: "hots", label: "Hots" },
  ];

  const filteredProducts = selectedCategory === "all"
    ? products
    : products.filter(product => product.category === selectedCategory);

  return (
    <section className="py-8 sm:py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl font-semibold text-foreground mb-6 sm:mb-8">
          Our Products
        </h2>

        {/* Category Filter */}
        <div className="flex flex-wrap gap-2 sm:gap-3 mb-6 sm:mb-8">
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={selectedCategory === category.id ? "default" : "outline"}
              onClick={() => setSelectedCategory(category.id)}
              className="text-sm sm:text-base"
            >
              {category.label}
            </Button>
          ))}
        </div>

        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                onAddToCart={onAddToCart}
                onViewDetails={onViewDetails}
              />
            ))}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-16 px-4">
            <div className="text-6xl mb-4">🌶️</div>
            <h3 className="text-2xl font-semibold text-foreground mb-2">Coming Soon!</h3>
            <p className="text-muted-foreground text-center max-w-md">
              We're working on adding more delicious products to this category. Check back soon for new authentic homemade treats from Vintage Ruchulu!
            </p>
          </div>
        )}
      </div>
    </section>
  );
}