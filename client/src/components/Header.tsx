import { ShoppingCart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { config } from "../config";

interface HeaderProps {
  cartItemCount: number;
  onCartClick: () => void;
  onOrderNowClick: () => void;
  onWhyChooseUsClick: () => void;
  onOurStoryClick: () => void;
}

export function Header({ 
  cartItemCount, 
  onCartClick,
  onOrderNowClick,
  onWhyChooseUsClick,
  onOurStoryClick
}: HeaderProps) {
  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border shadow-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20 gap-4">
          {/* Logo and Brand */}
          <div className="flex items-center gap-2 sm:gap-3 shrink-0 flex-1 sm:flex-initial">
            <img 
              src="/logo.png" 
              alt="Vintage Ruchulu Logo" 
              className="h-16 w-16 sm:h-12 sm:w-12 lg:h-14 lg:w-14 object-contain"
            />
            <div className="">
              <h1 className="text-lg md:text-2xl font-bold text-primary tracking-tight" data-testid="text-brand-name" style={{ fontFamily: 'Poppins, sans-serif' }}>
                {config.brand.name}
              </h1>
              <p className="hidden sm:block text-xs text-muted-foreground" data-testid="text-tagline">
                {config.brand.tagline}
              </p>
            </div>
          </div>

          {/* Navigation Menu - Hidden on mobile */}
          <nav className="hidden lg:flex items-center gap-1 flex-1 justify-center">
            <Button
              variant="ghost"
              className="text-sm font-medium hover:text-primary transition-colors"
              onClick={onOrderNowClick}
            >
              Order Now
            </Button>
            <Button
              variant="ghost"
              className="text-sm font-medium hover:text-primary transition-colors"
              onClick={onWhyChooseUsClick}
            >
              Why Choose Us
            </Button>
            <Button
              variant="ghost"
              className="text-sm font-medium hover:text-primary transition-colors"
              onClick={onOurStoryClick}
            >
              Our Story
            </Button>
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-2 sm:gap-3">
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

        {/* Mobile Navigation - Hidden on mobile, shown on tablet/desktop */}
        <div className="hidden md:flex lg:hidden items-center justify-center gap-1 pb-3 border-t border-border/50 mt-3 pt-3">
          <Button
            variant="ghost"
            size="sm"
            className="text-xs font-medium hover:text-primary transition-colors"
            onClick={onOrderNowClick}
          >
            Order Now
          </Button>
          <Button
            variant="ghost"
            size="sm"
            className="text-xs font-medium hover:text-primary transition-colors"
            onClick={onWhyChooseUsClick}
          >
            Why Choose Us
          </Button>
          <Button
            variant="ghost"
            size="sm"
            className="text-xs font-medium hover:text-primary transition-colors"
            onClick={onOurStoryClick}
          >
            Our Story
          </Button>
        </div>
      </div>
    </header>
  );
}
