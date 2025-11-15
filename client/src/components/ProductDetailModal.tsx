import { Flame, X, Package, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogClose,
} from "@/components/ui/dialog";
import { Product } from "../types/product";
import { Separator } from "@/components/ui/separator";

interface ProductDetailModalProps {
  product: Product | null;
  open: boolean;
  onClose: () => void;
  onAddToCart: (product: Product) => void;
}

export function ProductDetailModal({ product, open, onClose, onAddToCart }: ProductDetailModalProps) {
  if (!product) return null;

  const spiceIcons = Array(product.spiceLevel).fill(null);

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto" data-testid="modal-product-detail">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold" data-testid="text-modal-product-name">
            {product.name}
          </DialogTitle>
          <DialogClose asChild>
            <Button
              variant="ghost"
              size="icon"
              className="absolute right-4 top-4"
              data-testid="button-close-modal"
            >
              <X className="h-4 w-4" />
            </Button>
          </DialogClose>
        </DialogHeader>

        <div className="space-y-6">
          <div className="aspect-square w-full overflow-hidden rounded-lg bg-muted">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover"
              data-testid="img-modal-product"
            />
          </div>

          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-3xl font-bold text-foreground" data-testid="text-modal-price">
                  ₹{product.price}
                </p>
                <p className="text-sm text-muted-foreground" data-testid="text-modal-weight">
                  {product.weight}
                </p>
              </div>

              <div className="flex items-center gap-2">
                <Badge variant="secondary" className="flex items-center gap-1" data-testid="badge-modal-spice">
                  {spiceIcons.map((_, i) => (
                    <Flame key={i} className="h-3 w-3 text-destructive fill-destructive" />
                  ))}
                  <span className="ml-1">Spice Level {product.spiceLevel}/5</span>
                </Badge>
              </div>
            </div>

            <Separator />

            <div>
              <h4 className="font-semibold text-foreground mb-2">Description</h4>
              <p className="text-muted-foreground leading-relaxed" data-testid="text-modal-description">
                {product.description}
              </p>
            </div>

            <Separator />

            <div>
              <h4 className="font-semibold text-foreground mb-3 flex items-center gap-2">
                <Package className="h-4 w-4" />
                Ingredients
              </h4>
              <div className="flex flex-wrap gap-2">
                {product.ingredients.map((ingredient, index) => (
                  <Badge key={index} variant="secondary" data-testid={`badge-ingredient-${index}`}>
                    {ingredient}
                  </Badge>
                ))}
              </div>
            </div>

            <Separator />

            <div className="flex items-start gap-2">
              <Clock className="h-4 w-4 text-muted-foreground mt-0.5" />
              <div>
                <h4 className="font-semibold text-foreground">Shelf Life</h4>
                <p className="text-sm text-muted-foreground" data-testid="text-modal-shelf-life">
                  {product.shelfLife}
                </p>
              </div>
            </div>

            <div className="pt-4">
              <Button
                onClick={() => {
                  onAddToCart(product);
                  onClose();
                }}
                className="w-full h-12 text-base"
                disabled={!product.inStock}
                data-testid="button-modal-add-to-cart"
              >
                {product.inStock ? "Add to Cart" : "Out of Stock"}
              </Button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
