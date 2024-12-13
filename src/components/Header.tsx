function Header() {
    return (
      <header className="flex items-center justify-between px-6 py-4 bg-gray-950">
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
            <h1 className="text-orange-600 ml-3 text-3xl md:text-5xl font-bold">
              Ruivu's Pizzas
            </h1>
          </a>
        </div>
  
        {/* Navegação */}
        <nav>
          <ul className="gap-4 text-slate-50 text-lg md:text-2xl font-medium hidden md:flex">
            <li>
              <a
                href="#sobre"
                className="hover:text-orange-600 transition-colors"
                aria-label="Ir para a seção Sobre"
              >
                Sobre
              </a>
            </li>
            <li>
              <a
                href="#contato"
                className="hover:text-orange-600 transition-colors"
                aria-label="Ir para a seção Contato"
              >
                Contato
              </a>
            </li>
            <li>
              <a
                href="#produtos"
                className="hover:text-orange-600 transition-colors"
                aria-label="Ir para a seção Produtos"
              >
                Produtos
              </a>
            </li>
          </ul>
        </nav>
      </header>
    );
  }
  
  export default Header;
  