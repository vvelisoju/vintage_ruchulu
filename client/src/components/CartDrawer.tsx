import { X, ShoppingBag } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetClose,
} from "@/components/ui/sheet";
import { CartItem as CartItemType } from "../types/product";
import { CartItem } from "./CartItem";
import { Separator } from "@/components/ui/separator";

interface CartDrawerProps {
  open: boolean;
  onClose: () => void;
  cartItems: CartItemType[];
  cartTotal: number;
  onUpdateQuantity: (productId: string, selectedWeight: string, quantity: number) => void;
  onRemove: (productId: string, selectedWeight: string) => void;
  onClearCart: () => void;
  onCheckout: () => void;
}

export function CartDrawer({
  open,
  onClose,
  cartItems,
  cartTotal,
  onUpdateQuantity,
  onRemove,
  onClearCart,
  onCheckout,
}: CartDrawerProps) {
  const isEmpty = cartItems.length === 0;

  return (
    <Sheet open={open} onOpenChange={onClose}>
      <SheetContent className="w-full sm:max-w-lg flex flex-col" data-testid="drawer-cart">
        <SheetHeader>
          <SheetTitle className="text-2xl font-bold" data-testid="text-cart-title">
            Your Cart
          </SheetTitle>
          <SheetClose asChild>
            <Button
              variant="ghost"
              size="icon"
              className="absolute right-4 top-4"
              data-testid="button-close-cart"
            >
              <X className="h-4 w-4" />
            </Button>
          </SheetClose>
        </SheetHeader>

        {isEmpty ? (
          <div className="flex-1 flex flex-col items-center justify-center text-center space-y-4 py-12">
            <ShoppingBag className="h-16 w-16 text-muted-foreground" />
            <div>
              <h3 className="text-lg font-medium text-foreground mb-2" data-testid="text-cart-empty">
                Your cart is empty
              </h3>
              <p className="text-sm text-muted-foreground">
                Start adding delicious pickles to your cart!
              </p>
            </div>
            <Button onClick={onClose} data-testid="button-continue-shopping">
              Continue Shopping
            </Button>
          </div>
        ) : (
          <>
            <div className="flex-1 overflow-y-auto py-4 space-y-3">
              {cartItems.map((item) => (
                <CartItem
                  key={item.product.id}
                  item={item}
                  onUpdateQuantity={onUpdateQuantity}
                  onRemove={onRemove}
                />
              ))}
            </div>

            <div className="space-y-4 pt-4 border-t border-border">
              <Separator />
              <Button
                variant="outline"
                onClick={onClearCart}
                className="w-full"
                data-testid="button-clear-cart"
              >
                Clear Cart
              </Button>

              <Separator />

              <div className="space-y-2">
                <div className="flex items-center justify-between text-lg font-bold" data-testid="div-cart-total">
                  <span className="text-foreground" data-testid="text-cart-total-label">Total:</span>
                  <span className="text-foreground" data-testid="text-cart-total">
                    ₹{cartTotal}
                  </span>
                </div>
              </div>

              <Button
                onClick={onCheckout}
                className="w-full h-12 text-base"
                data-testid="button-checkout"
              >
                Proceed to Checkout
              </Button>
            </div>
          </>
        )}
      </SheetContent>
    </Sheet>
  );
}
