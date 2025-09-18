import { useState, createContext, useContext } from 'react';

interface CartItem {
  product: any;
  size: string;
  quantity: number;
}

interface CartContext {
  items: CartItem[];
  addToCart: (product: any, size: string, quantity: number) => void;
  removeItem: (index: number) => void;
  updateQuantity: (index: number, quantity: number) => void;
  getTotalItems: () => number;
  isOpen: boolean;
  openCart: () => void;
  closeCart: () => void;
  clearCart: () => void;
}

const CartContext = createContext<CartContext>({
  items: [],
  addToCart: () => {},
  removeItem: () => {},
  updateQuantity: () => {},
  getTotalItems: () => 0,
  isOpen: false,
  openCart: () => {},
  closeCart: () => {},
  clearCart: () => {},
});

export const CartProvider: React.FC = ({ children }) => {
  const [items, setItems] = useState<CartItem[]>([]);
  const [isOpen, setIsOpen] = useState(false);

  const addToCart = (product: any, size: string, quantity: number) => {
    const existingItem = items.find((item) => item.product.id === product.id && item.size === size);
    if (existingItem) {
      setItems(items.map((item) => (item.product.id === product.id && item.size === size ? { ...item, quantity: item.quantity + quantity } : item)));
    } else {
      setItems([...items, { product, size, quantity }]);
    }
  };

  const removeItem = (index: number) => {
    setItems(items.filter((_, i) => i !== index));
  };

  const updateQuantity = (index: number, quantity: number) => {
    setItems(items.map((item, i) => (i === index ? { ...item, quantity } : item)));
  };

  const getTotalItems = () => {
    return items.reduce((sum, item) => sum + item.quantity, 0);
  };

  const openCart = () => {
    setIsOpen(true);
  };

  const closeCart = () => {
    setIsOpen(false);
  };

  const clearCart = () => {
    setItems([]);
  };

  return (
    <CartContext.Provider
      value={{
        items,
        addToCart,
        removeItem,
        updateQuantity,
        getTotalItems,
        isOpen,
        openCart,
        closeCart,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (context === null) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
