
import React, { useState } from 'react';
import Header from '../components/Header';
import Carousel from '../components/Carousel';
import FeaturedPizzas from '../components/FeaturedPizzas';
import Beverages from '../components/Beverages';
import Cart from '../components/Cart';

const Index = () => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  
  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  const bannerImages = [
    {
      src: "https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
      alt: "Deliciosas pizzas artesanais",
      url: "#featured"
    },
    {
      src: "https://images.unsplash.com/photo-1571407970349-bc81e7e96d47?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
      alt: "Pizza especial do dia",
      url: "#featured"
    },
    {
      src: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
      alt: "Promoção de terça-feira",
      url: "#featured"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Header />
      
      <main className="flex-grow">
        <div className="mobile-container">
          {/* Banner Carousel */}
          <Carousel images={bannerImages} />
          
          {/* Featured Pizzas */}
          <FeaturedPizzas />
          
          {/* Beverages */}
          <Beverages />
          
          {/* About Section */}
          <section id="about" className="py-8 mb-16">
            <h2 className="section-title">Sobre a Ruivu's Pizzas</h2>
            <div className="mt-6 bg-white rounded-lg p-4 pizza-shadow">
              <p className="text-gray-700 mb-3">
                A Ruivu's Pizzas nasceu da paixão por sabores autênticos e ingredientes de qualidade. 
                Desde 2018, nossa missão é levar até você as melhores pizzas artesanais da cidade.
              </p>
              <p className="text-gray-700 mb-3">
                Usamos apenas ingredientes frescos e selecionados, nossa massa é fermentada naturalmente 
                por 24 horas, garantindo aquele sabor único e inconfundível.
              </p>
              <p className="text-gray-700">
                Faça seu pedido e experimente o que há de melhor em pizzas artesanais!
              </p>
            </div>
          </section>
        </div>
      </main>
      
      {/* Floating action buttons */}
      <div className="fixed bottom-4 right-4 z-30">
        <a 
          href="https://wa.me/5511999999999" 
          target="_blank" 
          rel="noopener noreferrer"
          className="block bg-green-500 text-white p-3 rounded-full shadow-lg hover:bg-green-600 transition-colors"
          aria-label="Contact us on WhatsApp"
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 24 24" 
            fill="currentColor" 
            className="w-6 h-6"
          >
            <path 
              d="M16.6 14c-.2-.1-1.5-.7-1.7-.8-.2-.1-.4-.1-.6.1-.2.2-.6.8-.8 1-.1.2-.3.2-.5.1-.7-.3-1.4-.7-2-1.2-.5-.5-1-1.1-1.4-1.7-.1-.2 0-.4.1-.5.1-.1.2-.3.4-.4.1-.1.2-.3.2-.4.1-.1.1-.3 0-.4-.1-.1-.6-1.3-.8-1.8-.1-.7-.3-.7-.5-.7h-.5c-.2 0-.5.2-.6.3-.6.6-.9 1.3-.9 2.1.1.9.4 1.8 1 2.6 1.1 1.6 2.5 2.9 4.2 3.7.5.2.9.4 1.4.5.5.2 1 .2 1.6.1.7-.1 1.3-.6 1.7-1.2.2-.4.2-.8.1-1.2l-.4-.2m2.5-9.1C15.2 1 8.9 1 5 4.9c-3.2 3.2-3.8 8.1-1.6 12L2 22l5.3-1.4c1.5.8 3.1 1.2 4.7 1.2 5.5 0 9.9-4.4 9.9-9.9.1-2.6-1-5.1-2.8-7m-2.7 14c-1.3.8-2.8 1.3-4.4 1.3-1.5 0-2.9-.4-4.2-1.1l-.3-.2-3.1.8.8-3-.2-.3c-2.4-4-1.2-9 2.7-11.5S15.7 3.7 18.1 7.7c2.4 4.1 1.2 9.2-2.7 11.3"
            />
          </svg>
        </a>
      </div>
      
      {/* Cart Modal */}
      <button
        onClick={toggleCart}
        className="fixed bottom-4 left-4 bg-secondary text-primary p-3 rounded-full shadow-lg z-30 hover:bg-opacity-90 transition-colors"
      >
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          viewBox="0 0 24 24" 
          fill="currentColor" 
          className="w-6 h-6"
        >
          <path d="M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zM1 2v2h2l3.6 7.59-1.35 2.45c-.16.28-.25.61-.25.96 0 1.1.9 2 2 2h12v-2H7.42c-.14 0-.25-.11-.25-.25l.03-.12.9-1.63h7.45c.75 0 1.41-.41 1.75-1.03l3.58-6.49c.08-.14.12-.31.12-.48 0-.55-.45-1-1-1H5.21l-.94-2H1zm16 16c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2z" />
        </svg>
      </button>
      
      {isCartOpen && <Cart isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />}
    </div>
  );
};

export default Index;
