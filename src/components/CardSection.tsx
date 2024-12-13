import React from 'react';

// Interface para os dados do card
interface CardData {
  id: number;
  image: string;
  title: string;
  description: string;
  price: number;
}

// Dados dos cards
const cardsData: CardData[] = [
  {
    id: 1,
    image: "https://raw.githubusercontent.com/UchihaDevan/Ruivus_Pizzas/refs/heads/main/src/imgs/Pizzas/combo1.webp",
    title: "Serviço Básico",
    description: "Descrição detalhada do serviço básico oferecido.",
    price: 39
  },
  {
    id: 2,
    image: "https://raw.githubusercontent.com/UchihaDevan/Ruivus_Pizzas/refs/heads/main/src/imgs/Pizzas/combo2.webp", 
    title: "Serviço Intermediário",
    description: "Descrição detalhada do serviço intermediário com recursos adicionais.",
    price: 45
  },
  {
    id: 3,
    image: "https://raw.githubusercontent.com/UchihaDevan/Ruivus_Pizzas/refs/heads/main/src/imgs/Pizzas/combo3.webp",
    title: "Serviço Avançado", 
    description: "Descrição detalhada do serviço avançado com todos os recursos premium.",
    price: 42.50
  },
  {
    id: 4,
    image: "https://raw.githubusercontent.com/UchihaDevan/Ruivus_Pizzas/refs/heads/main/src/imgs/Pizzas/combo4.webp",
    title: "Serviço Avançado", 
    description: "Descrição detalhada do serviço avançado com todos os recursos premium.",
    price: 49.80
  }
];

const CardSection: React.FC = () => {
  return (
    <section className="mt-5 py-12 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {cardsData.map((card) => (
            <div 
              key={card.id} 
              className="bg-green-lima rounded-2xl shadow-lg overflow-hidden transform transition duration-300 hover:shadow-2xl hover:scale-105"
            >
              {/* Imagem do Card */}
              <div className="relative">
                <img 
                  src={card.image}
                  alt={card.title} 
                  className="w-full object-cover"
                />
                
                {/* Preço no canto superior direito */}
                <div className="absolute top-4 right-4 bg-gray-900 text-white px-3 py-1 rounded-full text-lg font-bold">
                  R$ {card.price.toFixed(2)}
                </div>
              </div>

              {/* Conteúdo do Card */}
              <div className="p-6 relative">
                {/* Título na parte inferior esquerda */}
                <h3 className="absolute -top-6 left-6 bg-gray-900 text-white px-4 py-2 rounded-t-lg text-xl font-bold">
                  {card.title}
                </h3>

                {/* Descrição */}
                <p className="text-slate-100 mt-4">
                  {card.description}
                </p>

                {/* Botão de Ação */}
                <button className="mt-6 w-full bg-gray-900 text-white py-3 rounded-full hover:bg-orange-600 transition duration-300">
                  Contratar Serviço
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CardSection;