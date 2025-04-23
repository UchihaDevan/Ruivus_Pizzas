
import React from 'react';
import { formatPrice } from '../utils/cartUtils';

export interface PizzaProps {
  id: string;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
  isVegetarian?: boolean;
  isSpicy?: boolean;
  isPromotion?: boolean;
  onClick?: () => void;
}

const PizzaCard: React.FC<PizzaProps> = ({
  name,
  description,
  price,
  imageUrl,
  isVegetarian,
  isSpicy,
  isPromotion,
  onClick
}) => {
  return (
    <div 
      onClick={onClick}
      className="bg-white rounded-lg overflow-hidden pizza-shadow flex flex-col h-full cursor-pointer btn-hover"
    >
      <div className="relative h-40">
        <img
          src={imageUrl}
          alt={name}
          className="w-full h-full object-cover"
        />
        {isPromotion && (
          <div className="absolute top-2 right-2 bg-red-600 text-white text-xs font-bold px-2 py-1 rounded-full">
            Promoção
          </div>
        )}
        <div className="absolute bottom-0 left-0 right-0 flex justify-end p-2 space-x-1">
          {isVegetarian && (
            <span className="bg-secondary text-primary text-xs font-medium px-2 py-1 rounded-full">
              Vegetariana
            </span>
          )}
          {isSpicy && (
            <span className="bg-red-500 text-white text-xs font-medium px-2 py-1 rounded-full">
              Picante
            </span>
          )}
        </div>
      </div>
      <div className="p-4 flex-grow flex flex-col">
        <h3 className="font-bold text-lg">{name}</h3>
        <p className="text-gray-600 text-sm mt-1 mb-2 flex-grow">{description}</p>
        <div className="flex justify-between items-center mt-2">
          <span className="font-bold text-lg">{formatPrice(price)}</span>
          <button 
            onClick={(e) => {
              e.stopPropagation(); // Prevent parent onClick from firing
              onClick && onClick();
            }} 
            className="bg-secondary text-primary font-medium py-1 px-3 rounded-md text-sm btn-hover"
          >
            Visualizar
          </button>
        </div>
      </div>
    </div>
  );
};

export default PizzaCard;
