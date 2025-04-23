
import React, { useState, useEffect } from 'react';
import { X, ShoppingCart } from 'lucide-react';
import { 
  loadCart, 
  removeFromCart, 
  updateCartItemQuantity, 
  getTotalCartPrice, 
  formatPrice, 
  CartItem 
} from '../utils/cartUtils';
import OrderForm from './OrderForm';

interface CartProps {
  isOpen: boolean;
  onClose: () => void;
}

const Cart: React.FC<CartProps> = ({ isOpen, onClose }) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [showOrderForm, setShowOrderForm] = useState(false);
  
  useEffect(() => {
    const loadCartItems = () => {
      const items = loadCart();
      setCartItems(items);
    };
    
    loadCartItems();
    
    // Listen for storage events
    const handleStorageChange = () => {
      loadCartItems();
    };
    
    window.addEventListener('storage', handleStorageChange);
    window.addEventListener('cartUpdated', handleStorageChange);
    
    return () => {
      window.removeEventListener('storage', handleStorageChange);
      window.removeEventListener('cartUpdated', handleStorageChange);
    };
  }, []);
  
  const handleRemoveItem = (id: string, extras?: string[]) => {
    const updatedCart = removeFromCart(id, extras);
    setCartItems(updatedCart);
    window.dispatchEvent(new Event('cartUpdated'));
  };
  
  const handleUpdateQuantity = (id: string, quantity: number, extras?: string[]) => {
    const updatedCart = updateCartItemQuantity(id, quantity, extras);
    setCartItems(updatedCart);
    window.dispatchEvent(new Event('cartUpdated'));
  };
  
  const handleCheckout = () => {
    setShowOrderForm(true);
  };

  if (!isOpen) return null;

  const totalPrice = getTotalCartPrice();

  return (
    <div 
      className="fixed inset-0 bg-black bg-opacity-50 z-50 flex justify-end"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="bg-white w-full max-w-md h-full flex flex-col animate-slide-in">
        <div className="p-4 bg-primary text-white flex items-center justify-between">
          <h2 className="text-xl font-bold flex items-center">
            <ShoppingCart className="mr-2" size={24} />
            Carrinho
          </h2>
          <button onClick={onClose} className="p-1 hover:bg-gray-700 rounded">
            <X size={24} />
          </button>
        </div>
        
        {showOrderForm ? (
          <OrderForm 
            cartItems={cartItems} 
            totalPrice={totalPrice} 
            onCancel={() => setShowOrderForm(false)}
          />
        ) : (
          <>
            <div className="flex-grow overflow-y-auto p-4">
              {cartItems.length === 0 ? (
                <div className="flex flex-col items-center justify-center h-full text-gray-500">
                  <ShoppingCart size={48} className="mb-4" />
                  <p className="text-lg">Seu carrinho está vazio</p>
                  <p className="mt-2 text-sm">Adicione itens ao seu carrinho para fazer o pedido</p>
                </div>
              ) : (
                <div className="space-y-4">
                  {cartItems.map((item, index) => {
                    const itemKey = `${item.id}-${JSON.stringify(item.extras || [])}-${index}`;
                    
                    return (
                      <div key={itemKey} className="flex items-center border-b pb-4">
                        <div className="w-16 h-16 rounded overflow-hidden mr-3">
                          <img 
                            src={item.imageUrl} 
                            alt={item.name} 
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="flex-grow">
                          <h3 className="font-medium">{item.name}</h3>
                          {item.extras && item.extras.length > 0 && (
                            <p className="text-xs text-gray-500">
                              {item.extras.join(', ')}
                            </p>
                          )}
                          <div className="flex items-center justify-between mt-1">
                            <div className="flex items-center">
                              <button 
                                onClick={() => handleUpdateQuantity(item.id, item.quantity - 1, item.extras)}
                                className="text-gray-500 hover:text-primary border rounded-l px-2 py-0.5"
                              >
                                -
                              </button>
                              <span className="px-2 border-t border-b">{item.quantity}</span>
                              <button 
                                onClick={() => handleUpdateQuantity(item.id, item.quantity + 1, item.extras)}
                                className="text-gray-500 hover:text-primary border rounded-r px-2 py-0.5"
                              >
                                +
                              </button>
                            </div>
                            <span className="font-medium">
                              {formatPrice(item.price * item.quantity)}
                            </span>
                          </div>
                        </div>
                        <button 
                          onClick={() => handleRemoveItem(item.id, item.extras)}
                          className="ml-2 text-gray-400 hover:text-red-500"
                        >
                          <X size={20} />
                        </button>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
            
            <div className="border-t p-4">
              <div className="flex justify-between mb-4">
                <span className="font-bold">Total:</span>
                <span className="font-bold text-xl">{formatPrice(totalPrice)}</span>
              </div>
              <button 
                onClick={handleCheckout}
                disabled={cartItems.length === 0}
                className={`w-full py-3 rounded-md font-bold text-center ${
                  cartItems.length === 0 
                    ? 'bg-gray-300 text-gray-500 cursor-not-allowed' 
                    : 'bg-secondary text-primary hover:opacity-90 transition-opacity'
                }`}
              >
                Finalizar Pedido
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Cart;
