import { useState } from "react";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  return (
    <header className="flex items-center justify-between px-6 py-4 bg-gray-950 relative z-50">
      {/* Logo e título */}
      <div className="flex items-center">
        <a href="#" aria-label="Página inicial">
          <img
            src="icon.png"
            className="w-12 h-12 object-contain"
            alt="Ruivu's Pizzas"
          />
        </a>
        <a href="#" aria-label="Página inicial">
          <h1 className="text-green-lima ml-3 text-3xl md:text-5xl font-extrabold">
            Ruivu's Pizzas
          </h1>
        </a>
      </div>

      {/* Botão Hamburguer */}
      <button
        onClick={toggleMenu}
        className="block md:hidden text-white focus:outline-none z-50"
        aria-label="Abrir menu"
      >
        {isMenuOpen ? (
          <svg
            className="w-8 h-8"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        ) : (
          <svg
            className="w-8 h-8"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        )}
      </button>

      {/* Navegação */}
      <nav
        className={`${
          isMenuOpen ? "block" : "hidden"
        } absolute md:static top-16 left-0 right-0 bg-gray-950 md:bg-transparent md:flex z-40`}
      >
        <ul className="flex flex-col md:flex-row items-center gap-8 text-slate-50 text-lg md:text-2xl font-medium p-4 md:p-0">
          <li>
            <a
              href="#sobre"
              className="hover:text-green-lima transition-colors"
              aria-label="Ir para a seção Sobre"
              onClick={() => setIsMenuOpen(false)}
            >
              Sobre
            </a>
          </li>
          <li>
            <a
              href="#contato"
              className="hover:text-green-lima transition-colors"
              aria-label="Ir para a seção Contato"
              onClick={() => setIsMenuOpen(false)}
            >
              Contato
            </a>
          </li>
          <li>
            <a
              href="#produtos"
              className="hover:text-green-lima transition-colors"
              aria-label="Ir para a seção Produtos"
              onClick={() => setIsMenuOpen(false)}
            >
              Produtos
            </a>
          </li>
          <li>
            <a
              href="#cardapio"
              className="hover:text-green-lima transition-colors"
              aria-label="Ir para a seção Sobre"
              onClick={() => setIsMenuOpen(false)}
            >
              Cardapio
            </a>
          </li>
        </ul>
      </nav>
      <div>
        <button className="text-slate-100 text-xl bg-green-lima rounded-3xl p-3 font-bold hover:scale-105 hover:shadow-[0_0_10px_#00e645]">Contato</button>
      </div>
    </header>
  );
}

export default Header;
