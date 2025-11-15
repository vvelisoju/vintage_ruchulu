import { Flame } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Product } from "../types/product";

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product) => void;
  onViewDetails: (product: Product) => void;
}

export function ProductCard({ product, onAddToCart, onViewDetails }: ProductCardProps) {
  const spiceIcons = Array(product.spiceLevel).fill(null);

  return (
    <Card
      className="overflow-hidden hover-elevate cursor-pointer group"
      onClick={() => onViewDetails(product)}
      data-testid={`card-product-${product.id}`}
    >
      <div className="aspect-square overflow-hidden bg-muted">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          data-testid={`img-product-${product.id}`}
        />
      </div>

      <CardContent className="p-4 space-y-2">
        <div className="flex items-start justify-between gap-2">
          <h3 className="font-medium text-base sm:text-lg text-foreground line-clamp-2" data-testid={`text-product-name-${product.id}`}>
            {product.name}
          </h3>
          <Badge variant="secondary" className="shrink-0 flex items-center gap-1" data-testid={`badge-spice-${product.id}`}>
            {spiceIcons.map((_, i) => (
              <Flame key={i} className="h-3 w-3 text-destructive fill-destructive" />
            ))}
          </Badge>
        </div>

        <p className="text-sm text-muted-foreground line-clamp-2" data-testid={`text-product-description-${product.id}`}>
          {product.description}
        </p>

        <div className="flex items-center justify-between pt-2">
          <div>
            <p className="text-xl font-bold text-foreground" data-testid={`text-product-price-${product.id}`}>
              ₹{product.price}
            </p>
            <p className="text-xs text-muted-foreground" data-testid={`text-product-weight-${product.id}`}>
              {product.weight}
            </p>
          </div>

          {product.inStock ? (
            <Badge variant="secondary" className="text-xs">
              In Stock
            </Badge>
          ) : (
            <Badge variant="destructive" className="text-xs">
              Out of Stock
            </Badge>
          )}
        </div>
      </CardContent>

      <CardFooter className="p-4 pt-0">
        <Button
          onClick={(e) => {
            e.stopPropagation();
            onAddToCart(product);
          }}
          className="w-full"
          disabled={!product.inStock}
          data-testid={`button-add-to-cart-${product.id}`}
        >
          Add to Cart
        </Button>
      </CardFooter>
    </Card>
  );
}
