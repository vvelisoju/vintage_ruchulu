import { useLocalStorage } from "./useLocalStorage";
import { Product, CartItem, DeliveryInfo } from "../types/product";

export function useCart() {
  const [cartItems, setCartItems] = useLocalStorage<CartItem[]>("vintage-ruchulu-cart", []);
  const [deliveryType, setDeliveryType] = useLocalStorage<"ap-telangana" | "other-international" | null>("vintage-ruchulu-delivery", null);

  const addToCart = (product: Product, quantity: number = 1, selectedWeight: string, selectedPrice: number) => {
    setCartItems((items) => {
      const existingItem = items.find((item) => 
        item.product.id === product.id && item.selectedWeight === selectedWeight
      );
      
      if (existingItem) {
        return items.map((item) =>
          item.product.id === product.id && item.selectedWeight === selectedWeight
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }
      
      return [...items, { product, quantity, selectedWeight, selectedPrice }];
    });
  };

  const removeFromCart = (productId: string, selectedWeight: string) => {
    setCartItems((items) => items.filter((item) => 
      !(item.product.id === productId && item.selectedWeight === selectedWeight)
    ));
  };

  const updateQuantity = (productId: string, selectedWeight: string, quantity: number) => {
    if (quantity < 1) {
      removeFromCart(productId, selectedWeight);
      return;
    }
    
    setCartItems((items) =>
      items.map((item) =>
        item.product.id === productId && item.selectedWeight === selectedWeight
          ? { ...item, quantity }
          : item
      )
    );
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const getCartTotal = () => {
    return cartItems.reduce((total, item) => total + item.selectedPrice * item.quantity, 0);
  };

  const getTotalWeightInKg = () => {
    return cartItems.reduce((total, item) => {
      const weightInKg = parseFloat(item.selectedWeight.replace(/[gk]/g, '')) / (item.selectedWeight.includes('kg') ? 1 : 1000);
      return total + (weightInKg * item.quantity);
    }, 0);
  };

  const getDeliveryCharge = () => {
    if (!deliveryType || cartItems.length === 0) return 0;
    
    const totalWeightKg = getTotalWeightInKg();
    
    if (deliveryType === "ap-telangana") {
      return Math.ceil(totalWeightKg) * 75;
    }
    
    // For other states and international, we'll return 0 and handle it in checkout
    return 0;
  };

  const getGrandTotal = () => {
    const subtotal = getCartTotal();
    const delivery = getDeliveryCharge();
    return subtotal + delivery;
  };

  const updateDeliveryType = (type: "ap-telangana" | "other-international" | null) => {
    setDeliveryType(type);
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
    deliveryType,
    updateDeliveryType,
    getTotalWeightInKg,
    getDeliveryCharge,
    getGrandTotal,
  };
}
