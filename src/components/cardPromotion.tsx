import React from 'react';

const ImageContentSection: React.FC = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center bg-gray-100 rounded-3xl hover:bg-gray-900 hover:scale-[1.02] transition-all duration-300 hover:text-orange-700">
        {/* Imagem do Lado Esquerdo */}
        <div className="w-full h-auto">
          <img 
            src="https://raw.githubusercontent.com/UchihaDevan/Ruivus_Pizzas/refs/heads/main/src/imgs/img_container.png" 
            alt="Descrição da Imagem" 
            className="w-full h-full object-cover rounded-lg"
          />
        </div>

        {/* Conteúdo do Lado Direito */}
        <div className="space-y-6 text-center md:text-left px-4">
          {/* Título */}
          <h2 className="text-3xl md:text-4xl font-bold text-orange-600">
            Título do Produto
          </h2>

          {/* Descrição */}
          <p className="text-gray-700 text-base md:text-lg leading-relaxed">
            Uma breve descrição do produto, destacando seus principais benefícios e características únicas que o tornam especial para os clientes.
          </p>

          {/* Subtítulo com Preço */}
          <div className="bg-blue-100 inline-block px-4 py-2 rounded-full">
            <span className="text-xl md:text-2xl font-semibold text-gray-800">
              R$ 299,90
            </span>
          </div>

          {/* Botão de Ação */}
          <div className="">
            <button className="bg-orange-600 text-white px-6 py-2 md:px-8 md:py-3 rounded-lg mb-5 hover:bg-orange-500 transition duration-300">
              Comprar Agora
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImageContentSection;
