import React, { createContext, useContext, useState, useEffect } from 'react';

interface CartItem {
  id: string;
  name: string;
  price: number;
  img: string;
  quantity: number;
}

interface AppContextType {
  cart: CartItem[];
  setCart: React.Dispatch<React.SetStateAction<CartItem[]>>;
  isDarkMode: boolean;
  setIsDarkMode: React.Dispatch<React.SetStateAction<boolean>>;
  isCartOpen: boolean;
  setIsCartOpen: React.Dispatch<React.SetStateAction<boolean>>;
  username: string | null;
  setUsername: React.Dispatch<React.SetStateAction<string | null>>;
  addToCart: (item: { name: string; price: string; img: string }, imgElement?: HTMLImageElement) => void;
  removeFromCart: (id: string) => void;
  clearCart: () => void;
  cartTotal: number;
  searchQuery: string;
  setSearchQuery: React.Dispatch<React.SetStateAction<string>>;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [username, setUsername] = useState<string | null>(localStorage.getItem('username'));
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
  }, [isDarkMode]);

  const addToCart = (item: { name: string; price: string; img: string }, imgElement?: HTMLImageElement) => {
    const priceNum = parseInt(item.price.replace('₹', '').trim());
    const itemId = `${item.name}-${priceNum}`;

    setCart(prev => {
      const existing = prev.find(i => i.id === itemId);
      if (existing) {
        return prev.map(i => i.id === itemId ? { ...i, quantity: i.quantity + 1 } : i);
      }
      return [...prev, { id: itemId, name: item.name, price: priceNum, img: item.img, quantity: 1 }];
    });
    
    if (imgElement) {
      const cartIcon = document.querySelector('.cart-icon');
      if (!cartIcon) return;

      const clone = imgElement.cloneNode(true) as HTMLImageElement;
      const rect = imgElement.getBoundingClientRect();
      const cartRect = cartIcon.getBoundingClientRect();

      clone.classList.add('flying-img');
      clone.style.left = `${rect.left}px`;
      clone.style.top = `${rect.top}px`;
      document.body.appendChild(clone);

      setTimeout(() => {
        clone.style.left = `${cartRect.left}px`;
        clone.style.top = `${cartRect.top}px`;
        clone.style.opacity = '0';
        clone.style.transform = 'scale(0.1)';
      }, 10);

      setTimeout(() => {
        clone.remove();
      }, 800);
    }
  };

  const removeFromCart = (id: string) => {
    setCart(prev => prev.filter(item => item.id !== id));
  };

  const clearCart = () => {
    setCart([]);
  };

  const cartTotal = cart.reduce((acc, item) => acc + (item.price * item.quantity), 0);

  return (
    <AppContext.Provider value={{ 
      cart, setCart, 
      isDarkMode, setIsDarkMode, 
      isCartOpen, setIsCartOpen,
      username, setUsername,
      addToCart,
      removeFromCart,
      clearCart,
      cartTotal,
      searchQuery,
      setSearchQuery
    }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (!context) throw new Error('useAppContext must be used within an AppProvider');
  return context;
};
