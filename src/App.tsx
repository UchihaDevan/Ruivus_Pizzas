import "./App.css";
import CardSection from "./components/CardSection";
import Main from "./components/Main";
import ImageContentSection from "./components/cardPromotion";
import ImageSection from "./components/sectionCalzone";

function App() {
  return (
    <div className="overflow-hidden">
      <header className="flex w-screen items-center h-24 p-6 justify-between bg-gray-900">
        <div className="flex ml-6">
          <a href="">
            <img
              src="icon.png"
              className="-mt-3 w-15 h-16"
              alt="Ruivu's Pizzas"
            />
          </a>
          <a href="">
            <h1 className="text-orange-600 ml-3 text-5xl font-bold">
              Ruivu's Pizzas
            </h1>
          </a>
        </div>

        <nav>
          <ul className="right-0 gap-2 text-slate-50 text-2xl font-medium hidden mr-3 md:flex space-x-4">
            <li>
              <a href="#sobre" className="hover:text-orange-600">
                Sobre
              </a>
            </li>
            <li>
              <a href="#contato" className="hover:text-orange-600">
                Contato
              </a>
            </li>
            <li>
              <a href="#produtos" className="hover:text-orange-600">
                Produtos
              </a>
            </li>
          </ul>
        </nav>
      </header>
      <Main />
      <CardSection />
      <ImageContentSection />
      <ImageSection />
    </div>
  );
}

export default App;
