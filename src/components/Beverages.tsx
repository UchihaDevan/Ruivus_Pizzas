
import React from 'react';
import BeverageCard, { BeverageProps } from './BeverageCard';

const BEVERAGES: BeverageProps[] = [
  {
    id: 'bev1',
    name: 'Coca-Cola',
    price: 7.90,
    imageUrl: 'https://images.unsplash.com/photo-1581098365948-6a5a912b7a49?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80',
    size: '350ml'
  },
  {
    id: 'bev2',
    name: 'Guaraná Antarctica',
    price: 7.90,
    imageUrl: 'https://assets.propmark.com.br/uploads/2020/01/guarana-antarctica.jpg',
    size: '350ml'
  },
  {
    id: 'bev3',
    name: 'Sprite',
    price: 7.90,
    imageUrl: 'https://images.unsplash.com/photo-1625772299848-391b6a87d7b3?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80',
    size: '350ml'
  },
  {
    id: 'bev5',
    name: 'Suco de Laranja',
    price: 9.90,
    imageUrl: 'https://images.unsplash.com/photo-1600271886742-f049cd451bba?ixlib=rb-1.2.1&auto=format&fit=crop&w=300&q=80',
    size: '500ml'
  },
];

const Beverages: React.FC = () => {
  return (
    <section id="beverages" className="py-8">
      <h2 className="section-title">Bebidas</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
        {BEVERAGES.map((beverage) => (
          <BeverageCard key={beverage.id} {...beverage} />
        ))}
      </div>
    </section>
  );
};

export default Beverages;
