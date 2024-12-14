import React from 'react';

const ImageContentSection: React.FC = () => {
  return (
    <section className="max-w-7xl mx-auto px-4 py-12 bg-gray-950">
      <div className="group grid grid-cols-1 md:grid-cols-2 gap-8 items-center bg-gray-950 rounded-3xl hover:bg-green-lima hover:scale-[1.02] transition-all duration-300">
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
          <h2 className="text-3xl md:text-4xl font-bold text-orange-600 group-hover:text-gray-100 duration-300">
            Título do Produto
          </h2>

          {/* Descrição */}
          <p className="group-hover:text-gray-200 duration-300 text-gray-700 text-base md:text-lg leading-relaxed ">
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
            <button className="group-hover:bg-gray-950 bg-orange-600 text-white px-6 py-2 md:px-8 md:py-3 rounded-lg mb-5 transition duration-300">
              Comprar Agora
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImageContentSection;
