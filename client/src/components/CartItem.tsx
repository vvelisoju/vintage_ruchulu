import { Minus, Plus, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CartItem as CartItemType } from "../types/product";

interface CartItemProps {
  item: CartItemType;
  onUpdateQuantity: (productId: string, quantity: number) => void;
  onRemove: (productId: string) => void;
}

export function CartItem({ item, onUpdateQuantity, onRemove }: CartItemProps) {
  const { product, quantity } = item;
  const subtotal = product.price * quantity;

  return (
    <div
      className="flex gap-4 p-4 bg-card rounded-lg border border-card-border"
      data-testid={`cart-item-${product.id}`}
    >
      <div className="w-20 h-20 sm:w-24 sm:h-24 shrink-0 bg-muted rounded-md overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover"
          data-testid={`img-cart-item-${product.id}`}
        />
      </div>

      <div className="flex-1 min-w-0 space-y-2">
        <div className="flex items-start justify-between gap-2">
          <div className="flex-1 min-w-0">
            <h4 className="font-medium text-foreground truncate" data-testid={`text-cart-item-name-${product.id}`}>
              {product.name}
            </h4>
            <p className="text-sm text-muted-foreground" data-testid={`text-cart-item-weight-${product.id}`}>
              {product.weight}
            </p>
          </div>

          <Button
            variant="ghost"
            size="icon"
            onClick={() => onRemove(product.id)}
            className="shrink-0 h-8 w-8"
            data-testid={`button-remove-${product.id}`}
          >
            <Trash2 className="h-4 w-4 text-destructive" />
          </Button>
        </div>

        <div className="flex items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <Button
              variant="outline"
              size="icon"
              onClick={() => onUpdateQuantity(product.id, quantity - 1)}
              className="h-8 w-8"
              data-testid={`button-decrease-${product.id}`}
            >
              <Minus className="h-3 w-3" />
            </Button>

            <span className="w-8 text-center font-medium" data-testid={`text-quantity-${product.id}`}>
              {quantity}
            </span>

            <Button
              variant="outline"
              size="icon"
              onClick={() => onUpdateQuantity(product.id, quantity + 1)}
              className="h-8 w-8"
              data-testid={`button-increase-${product.id}`}
            >
              <Plus className="h-3 w-3" />
            </Button>
          </div>

          <div className="text-right">
            <p className="text-sm text-muted-foreground">₹{product.price} each</p>
            <p className="font-bold text-foreground" data-testid={`text-subtotal-${product.id}`}>
              ₹{subtotal}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
