
import React, { useEffect, useState } from 'react';
import { ShoppingCart } from 'lucide-react';
import { getTotalCartItems } from '../utils/cartUtils';

interface CartIconProps {
  onClick?: () => void;
}

const CartIcon: React.FC<CartIconProps> = ({ onClick }) => {
  const [itemCount, setItemCount] = useState(0);

  useEffect(() => {
    // Initial load
    setItemCount(getTotalCartItems());

    // Listen for storage events to update cart count
    const handleStorageChange = () => {
      setItemCount(getTotalCartItems());
    };
    
    window.addEventListener('storage', handleStorageChange);
    
    // Custom event for cart updates
    const handleCartUpdate = () => {
      setItemCount(getTotalCartItems());
    };
    
    window.addEventListener('cartUpdated', handleCartUpdate);
    
    return () => {
      window.removeEventListener('storage', handleStorageChange);
      window.removeEventListener('cartUpdated', handleCartUpdate);
    };
  }, []);

  return (
    <button 
      onClick={onClick} 
      className="relative p-2 btn-hover"
      aria-label="Carrinho de compras"
    >
      <ShoppingCart size={24} />
      {itemCount > 0 && (
        <span className="absolute -top-1 -right-1 bg-secondary text-primary text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
          {itemCount}
        </span>
      )}
    </button>
  );
};

export default CartIcon;
