import { ShoppingCart, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { config } from "../config";

interface HeaderProps {
  cartItemCount: number;
  onCartClick: () => void;
}

export function Header({ cartItemCount, onCartClick }: HeaderProps) {
  const handleWhatsAppClick = () => {
    const whatsappUrl = `https://wa.me/${config.contact.whatsapp.replace(/\+/g, "")}?text=${encodeURIComponent(
      `Hi! I'd like to know more about your pickles.`
    )}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <header className="sticky top-0 z-50 bg-background border-b border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20 gap-4">
          <div className="flex-1 min-w-0">
            <h1 className="text-lg sm:text-xl md:text-2xl font-semibold text-foreground truncate" data-testid="text-brand-name">
              {config.brand.name}
            </h1>
            <p className="text-xs sm:text-sm text-muted-foreground truncate" data-testid="text-tagline">
              {config.brand.tagline}
            </p>
          </div>

          <div className="flex items-center gap-2 sm:gap-3">
            <Button
              variant="outline"
              size="icon"
              onClick={handleWhatsAppClick}
              className="hidden sm:flex bg-[#25D366] hover:bg-[#25D366] text-white border-[#25D366] shrink-0"
              data-testid="button-whatsapp-header"
            >
              <MessageCircle className="h-5 w-5" />
            </Button>

            <Button
              variant="outline"
              size="icon"
              onClick={onCartClick}
              className="relative shrink-0"
              data-testid="button-cart"
            >
              <ShoppingCart className="h-5 w-5" />
              {cartItemCount > 0 && (
                <Badge
                  variant="destructive"
                  className="absolute -top-2 -right-2 h-5 w-5 flex items-center justify-center p-0 text-xs"
                  data-testid="badge-cart-count"
                >
                  {cartItemCount}
                </Badge>
              )}
            </Button>
          </div>
        </div>
      </div>

      <Button
        onClick={handleWhatsAppClick}
        className="sm:hidden fixed bottom-4 right-4 z-50 h-14 w-14 rounded-full bg-[#25D366] hover:bg-[#25D366] shadow-lg border-2 border-white"
        size="icon"
        data-testid="button-whatsapp-floating"
      >
        <MessageCircle className="h-6 w-6" />
      </Button>
    </header>
  );
}
