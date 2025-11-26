import { Flame } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Product } from "../types/product";
import { useState } from "react";

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product, selectedWeight: string, selectedPrice: number) => void;
  onViewDetails: (product: Product) => void;
}

export function ProductCard({ product, onAddToCart, onViewDetails }: ProductCardProps) {
  const spiceIcons = Array(product.spiceLevel).fill(null);
  const [selectedQuantity, setSelectedQuantity] = useState(product.quantities[0].weight);
  const selectedPrice = product.quantities.find(q => q.weight === selectedQuantity)?.price || product.quantities[0].price;

  const getTagColor = (tag: string) => {
    switch (tag.toLowerCase()) {
      case 'most selling':
      case 'bestseller':
        return 'bg-orange-100 text-orange-800 border-orange-200';
      case 'hot':
      case 'spicy':
        return 'bg-red-100 text-red-800 border-red-200';
      case 'specialty':
      case 'unique':
      case 'fusion':
        return 'bg-purple-100 text-purple-800 border-purple-200';
      case 'traditional':
        return 'bg-amber-100 text-amber-800 border-amber-200';
      case 'popular':
      case 'coastal':
        return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'premium':
      case 'rich taste':
        return 'bg-green-100 text-green-800 border-green-200';
      case 'seafood':
        return 'bg-cyan-100 text-cyan-800 border-cyan-200';
      case 'fresh':
      case 'tangy':
        return 'bg-lime-100 text-lime-800 border-lime-200';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

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
        {/* Product Tags */}
        {product.tags && product.tags.length > 0 && (
          <div className="flex flex-wrap gap-1 mb-2">
            {product.tags.slice(0, 2).map((tag, index) => (
              <span
                key={index}
                className={`px-2 py-1 text-xs font-medium rounded-full border ${getTagColor(tag)}`}
                data-testid={`tag-${tag.toLowerCase().replace(' ', '-')}-${product.id}`}
              >
                {tag}
              </span>
            ))}
            {product.tags.length > 2 && (
              <span className="px-2 py-1 text-xs font-medium rounded-full border bg-gray-100 text-gray-800 border-gray-200">
                +{product.tags.length - 2}
              </span>
            )}
          </div>
        )}

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
              ₹{selectedPrice}
            </p>
            <Select value={selectedQuantity} onValueChange={setSelectedQuantity}>
              <SelectTrigger className="w-24 h-8 text-xs">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {product.quantities.map((quantity) => (
                  <SelectItem key={quantity.weight} value={quantity.weight}>
                    {quantity.weight}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
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
            onAddToCart(product, selectedQuantity, selectedPrice);
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
