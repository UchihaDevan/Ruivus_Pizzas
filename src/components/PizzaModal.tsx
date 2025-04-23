
import React, { useState } from 'react';
import { PizzaProps } from './PizzaCard';
import { X } from 'lucide-react';
import { addToCart, CartItem } from '../utils/cartUtils';
import { useToast } from "@/hooks/use-toast";

interface PizzaModalProps {
  pizza: PizzaProps;
  isOpen: boolean;
  onClose: () => void;
}

const EXTRAS = [
  { id: 'extra-cheese', name: 'Queijo Extra', price: 5 },
  { id: 'bacon', name: 'Bacon', price: 6 },
  { id: 'onion', name: 'Cebola Caramelizada', price: 4 },
  { id: 'cheddar', name: 'Cheddar', price: 5 },
];

const PizzaModal: React.FC<PizzaModalProps> = ({ pizza, isOpen, onClose }) => {
  const [quantity, setQuantity] = useState(1);
  const [selectedExtras, setSelectedExtras] = useState<string[]>([]);
  const { toast } = useToast();

  if (!isOpen) return null;

  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const handleQuantityChange = (amount: number) => {
    const newQuantity = quantity + amount;
    if (newQuantity >= 1) {
      setQuantity(newQuantity);
    }
  };

  const toggleExtra = (extraName: string) => {
    setSelectedExtras(prev => {
      if (prev.includes(extraName)) {
        return prev.filter(e => e !== extraName);
      } else {
        return [...prev, extraName];
      }
    });
  };

  const handleAddToCart = () => {
    const newItem: CartItem = {
      id: pizza.id,
      name: pizza.name,
      price: pizza.price,
      imageUrl: pizza.imageUrl,
      quantity,
      type: 'pizza',
      extras: selectedExtras.length > 0 ? selectedExtras : undefined
    };
    
    addToCart(newItem);
    
    // Dispatch event to update cart count
    window.dispatchEvent(new Event('cartUpdated'));
    
    toast({
      title: "Adicionado ao carrinho",
      description: `${quantity}x ${pizza.name} foi adicionado ao seu carrinho.`,
      duration: 3000,
    });
    
    onClose();
  };

  return (
    <div 
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
      onClick={handleBackdropClick}
    >
      <div className="bg-white rounded-lg w-full max-w-md max-h-[90vh] overflow-y-auto animate-slide-in">
        <div className="relative h-48">
          <img 
            src={pizza.imageUrl} 
            alt={pizza.name} 
            className="w-full h-full object-cover rounded-t-lg"
          />
          <button
            onClick={onClose}
            className="absolute top-2 right-2 bg-black/50 text-white p-1 rounded-full hover:bg-black/70"
          >
            <X size={20} />
          </button>
          <div className="absolute bottom-0 left-0 right-0 flex justify-end p-2 space-x-1">
            {pizza.isVegetarian && (
              <span className="bg-secondary text-primary text-xs font-medium px-2 py-1 rounded-full">
                Vegetariana
              </span>
            )}
            {pizza.isSpicy && (
              <span className="bg-red-500 text-white text-xs font-medium px-2 py-1 rounded-full">
                Picante
              </span>
            )}
          </div>
        </div>
        
        <div className="p-4">
          <div className="mb-4">
            <h2 className="text-xl font-bold">{pizza.name}</h2>
            <p className="text-gray-600 mt-1">{pizza.description}</p>
          </div>
          
          <div className="mb-4">
            <h3 className="font-bold mb-2">Extras</h3>
            <div className="space-y-2">
              {EXTRAS.map((extra) => (
                <div key={extra.id} className="flex items-center justify-between">
                  <label className="flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      className="form-checkbox h-4 w-4 text-secondary rounded border-gray-300 focus:ring-secondary"
                      checked={selectedExtras.includes(extra.name)}
                      onChange={() => toggleExtra(extra.name)}
                    />
                    <span className="ml-2 text-sm">{extra.name} (+R$ {extra.price.toFixed(2)})</span>
                  </label>
                </div>
              ))}
            </div>
          </div>
          
          <div className="mb-6">
            <h3 className="font-bold mb-2">Quantidade</h3>
            <div className="flex items-center">
              <button
                onClick={() => handleQuantityChange(-1)}
                className="bg-gray-200 rounded-l-md px-3 py-1 text-lg"
                disabled={quantity <= 1}
              >
                -
              </button>
              <span className="bg-gray-100 px-4 py-1 text-center w-12">{quantity}</span>
              <button
                onClick={() => handleQuantityChange(1)}
                className="bg-gray-200 rounded-r-md px-3 py-1 text-lg"
              >
                +
              </button>
            </div>
          </div>
          
          <div className="flex items-center justify-between">
            <div className="text-xl font-bold">
              R$ {(pizza.price * quantity).toFixed(2)}
            </div>
            <button
              onClick={handleAddToCart}
              className="bg-secondary text-primary font-bold py-2 px-6 rounded-md hover:opacity-90 transition-opacity"
            >
              Adicionar ao Carrinho
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PizzaModal;
