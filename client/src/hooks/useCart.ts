import { useLocalStorage } from "./useLocalStorage";
import { Product, CartItem } from "../types/product";

export function useCart() {
  const [cartItems, setCartItems] = useLocalStorage<CartItem[]>("vintage-ruchulu-cart", []);

  const addToCart = (product: Product, quantity: number = 1) => {
    setCartItems((items) => {
      const existingItem = items.find((item) => item.product.id === product.id);
      
      if (existingItem) {
        return items.map((item) =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }
      
      return [...items, { product, quantity }];
    });
  };

  const removeFromCart = (productId: string) => {
    setCartItems((items) => items.filter((item) => item.product.id !== productId));
  };

  const updateQuantity = (productId: string, quantity: number) => {
    if (quantity < 1) {
      removeFromCart(productId);
      return;
    }
    
    setCartItems((items) =>
      items.map((item) =>
        item.product.id === productId ? { ...item, quantity } : item
      )
    );
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const getCartTotal = () => {
    return cartItems.reduce((total, item) => total + item.product.price * item.quantity, 0);
  };

  const getCartItemCount = () => {
    return cartItems.reduce((count, item) => count + item.quantity, 0);
  };

  return {
    cartItems,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
    getCartTotal,
    getCartItemCount,
  };
}
