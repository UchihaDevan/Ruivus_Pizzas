
import React, { useState } from 'react';
import PizzaCard, { PizzaProps } from './PizzaCard';
import PizzaModal from './PizzaModal';

const FEATURED_PIZZAS: PizzaProps[] = [
  {
    id: 'pizza1',
    name: 'Pizza Margherita',
    description: 'Molho de tomate, mussarela fresca, manjericão e azeite extra virgem.',
    price: 45.90,
    imageUrl: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
    isVegetarian: true,
  },
  {
    id: 'pizza2',
    name: 'Pizza Pepperoni',
    description: 'Molho de tomate, mussarela e pepperoni fatiado.',
    price: 49.90,
    imageUrl: 'https://images.unsplash.com/photo-1628840042765-356cda07504e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
    isPromotion: true,
  },
  {
    id: 'pizza3',
    name: 'Pizza Calabresa',
    description: 'Molho de tomate, mussarela, calabresa fatiada e cebola.',
    price: 47.90,
    imageUrl: 'https://images.unsplash.com/photo-1595708684082-a173bb3a06c5?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
  },
  {
    id: 'pizza4',
    name: 'Pizza Quatro Queijos',
    description: 'Molho de tomate, mussarela, provolone, parmesão e gorgonzola.',
    price: 52.90,
    imageUrl: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
    isVegetarian: true,
  },
  {
    id: 'pizza5',
    name: 'Pizza Diablo',
    description: 'Molho de tomate apimentado, mussarela, calabresa, jalapeños e pimentão.',
    price: 54.90,
    imageUrl: 'https://images.unsplash.com/photo-1571407970349-bc81e7e96d47?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
    isSpicy: true,
  },
  {
    id: 'pizza6',
    name: 'Pizza Vegetariana',
    description: 'Molho de tomate, mussarela, brócolis, tomate, cebola roxa, pimentão e champignon.',
    price: 51.90,
    imageUrl: 'https://images.unsplash.com/photo-1604917877934-07d8d248d396?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80',
    isVegetarian: true,
    isPromotion: true,
  },
];

const FeaturedPizzas: React.FC = () => {
  const [selectedPizza, setSelectedPizza] = useState<PizzaProps | null>(null);

  const handleOpenModal = (pizza: PizzaProps) => {
    setSelectedPizza(pizza);
  };

  const handleCloseModal = () => {
    setSelectedPizza(null);
  };

  return (
    <section id="featured" className="py-8">
      <h2 className="section-title">Pizzas em Destaque</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-6">
        {FEATURED_PIZZAS.map((pizza) => (
          <PizzaCard 
            key={pizza.id} 
            {...pizza} 
            onClick={() => handleOpenModal(pizza)}
          />
        ))}
      </div>
      
      {selectedPizza && (
        <PizzaModal 
          pizza={selectedPizza} 
          isOpen={!!selectedPizza} 
          onClose={handleCloseModal} 
        />
      )}
    </section>
  );
};

export default FeaturedPizzas;
