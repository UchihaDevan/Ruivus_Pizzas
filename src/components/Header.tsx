
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import CartIcon from './CartIcon';
import Cart from './Cart';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const [isCartOpen, setIsCartOpen] = useState(false);

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="sticky top-0 z-50 bg-primary text-white shadow-md">
      <div className="container mx-auto py-4 px-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center">
          <h1 className="text-2xl font-bold text-white">Ruivu's Pizzas</h1>
        </div>

        {/* Cart Icon (Always Visible) */}
        <div className="flex items-center gap-4">
        <CartIcon onClick={() => setIsCartOpen(true)} />
        {isCartOpen && <Cart isOpen={isCartOpen} onClose={() => setIsCartOpen(false)} />}
          
          {/* Mobile Menu Button */}
          <button 
            onClick={toggleMenu} 
            className="p-2 rounded-md hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-secondary"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-primary border-t border-gray-700 animate-fade-in">
          <nav className="container mx-auto py-4 px-4">
            <ul className="space-y-4">
              <li>
                <a 
                  href="#home" 
                  className="block py-2 px-4 hover:bg-gray-800 rounded-md transition-all"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Início
                </a>
              </li>
              <li>
                <a 
                  href="#featured" 
                  className="block py-2 px-4 hover:bg-gray-800 rounded-md transition-all"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Destaques
                </a>
              </li>
              <li>
                <a 
                  href="#beverages" 
                  className="block py-2 px-4 hover:bg-gray-800 rounded-md transition-all"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Bebidas
                </a>
              </li>
              <li>
                <a 
                  href="#about" 
                  className="block py-2 px-4 hover:bg-gray-800 rounded-md transition-all"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Sobre
                </a>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
