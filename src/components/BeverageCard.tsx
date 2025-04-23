
import React from 'react';
import { formatPrice } from '../utils/cartUtils';
import { CartItem, addToCart } from '../utils/cartUtils';
import { useToast } from "@/hooks/use-toast";

export interface BeverageProps {
  id: string;
  name: string;
  price: number;
  imageUrl: string;
  size?: string;
}

const BeverageCard: React.FC<BeverageProps> = ({
  id,
  name,
  price,
  imageUrl,
  size
}) => {
  const { toast } = useToast();

  const handleAddToCart = () => {
    const newItem: CartItem = {
      id,
      name,
      price,
      imageUrl,
      quantity: 1,
      type: 'beverage'
    };
    
    addToCart(newItem);
    
    // Dispatch event to update cart count
    window.dispatchEvent(new Event('cartUpdated'));
    
    toast({
      title: "Adicionado ao carrinho",
      description: `${name} foi adicionado ao seu carrinho.`,
      duration: 3000,
    });
  };

  return (
    <div className="bg-white rounded-lg overflow-hidden pizza-shadow flex h-24">
      <div className="w-1/3 h-full">
        <img
          src={imageUrl}
          alt={name}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="w-2/3 p-3 flex flex-col justify-between">
        <div>
          <h3 className="font-bold">{name}</h3>
          {size && <span className="text-xs text-gray-500">{size}</span>}
        </div>
        <div className="flex justify-between items-center">
          <span className="font-bold">{formatPrice(price)}</span>
          <button 
            onClick={handleAddToCart}
            className="bg-secondary text-primary text-xs font-medium py-1 px-2 rounded-md btn-hover"
          >
            Adicionar
          </button>
        </div>
      </div>
    </div>
  );
};

export default BeverageCard;
