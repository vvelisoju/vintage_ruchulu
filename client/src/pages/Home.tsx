import { useState, useRef } from "react";
import { Header } from "../components/Header";
import { Hero } from "../components/Hero";
import { TrustBanner } from "../components/TrustBanner";
import { ProductGrid } from "../components/ProductGrid";
import { ProductDetailModal } from "../components/ProductDetailModal";
import { CartDrawer } from "../components/CartDrawer";
import { CheckoutModal } from "../components/CheckoutModal";
import { AboutSection } from "../components/AboutSection";
import { Footer } from "../components/Footer";
import { useCart } from "../hooks/useCart";
import { Product } from "../types/product";
import { products } from "../data/products";
import { useToast } from "@/hooks/use-toast";

export default function Home() {
  const { toast } = useToast();
  const {
    cartItems,
    addToCart,
    updateQuantity,
    removeFromCart,
    clearCart,
    getCartTotal,
    getCartItemCount,
  } = useCart();

  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);
  const productsRef = useRef<HTMLDivElement>(null);

  const handleAddToCart = (product: Product) => {
    addToCart(product);
    toast({
      title: "Added to cart",
      description: `${product.name} has been added to your cart.`,
    });
  };

  const handleBrowseClick = () => {
    productsRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const handleCheckout = () => {
    if (cartItems.length === 0) {
      toast({
        title: "Cart is empty",
        description: "Please add items to your cart before checking out.",
        variant: "destructive",
      });
      return;
    }
    setIsCartOpen(false);
    setIsCheckoutOpen(true);
  };

  const handleOrderComplete = () => {
    clearCart();
    toast({
      title: "Order sent!",
      description: "Your order has been sent via WhatsApp. We'll contact you soon!",
    });
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header cartItemCount={getCartItemCount()} onCartClick={() => setIsCartOpen(true)} />

      <main className="flex-1">
        <Hero onBrowseClick={handleBrowseClick} />
        <TrustBanner />
        
        <div ref={productsRef}>
          <ProductGrid
            products={products}
            onAddToCart={handleAddToCart}
            onViewDetails={setSelectedProduct}
          />
        </div>

        <AboutSection />
      </main>

      <Footer />

      <ProductDetailModal
        product={selectedProduct}
        open={!!selectedProduct}
        onClose={() => setSelectedProduct(null)}
        onAddToCart={handleAddToCart}
      />

      <CartDrawer
        open={isCartOpen}
        onClose={() => setIsCartOpen(false)}
        cartItems={cartItems}
        cartTotal={getCartTotal()}
        onUpdateQuantity={updateQuantity}
        onRemove={removeFromCart}
        onClearCart={clearCart}
        onCheckout={handleCheckout}
      />

      <CheckoutModal
        open={isCheckoutOpen}
        onClose={() => setIsCheckoutOpen(false)}
        cartItems={cartItems}
        cartTotal={getCartTotal()}
        onOrderComplete={handleOrderComplete}
      />
    </div>
  );
}
