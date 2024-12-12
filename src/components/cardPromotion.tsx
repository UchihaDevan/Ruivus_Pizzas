import React from 'react';

const ImageContentSection: React.FC = () => {
  return (
    <section className="w-[70%] mx-auto my-12 hover:scale-110">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center hover:bg-gray-900 hover:rounded-3xl hover:text-orange-700">
        {/* Imagem do Lado Esquerdo */}
        <div className="w-full h-96">
          <img 
            src="/src/imgs/img_container.png" 
            alt="Descrição da Imagem" 
            className="w-full h-full object-cover rounded-lg"
          />
        </div>

        {/* Conteúdo do Lado Direito */}
        <div className="space-y-6">
          {/* Título */}
          <h2 className="text-4xl font-bold text-orange-600">
            Título do Produto
          </h2>

          {/* Descrição */}
          <p className="text-gray-600 text-lg">
            Uma breve descrição do produto, destacando seus principais benefícios e características únicas que o tornam especial para os clientes.
          </p>

          {/* Subtítulo com Preço */}
          <div className="bg-blue-100 inline-block px-4 py-2 rounded-full">
            <span className="text-2xl font-semibold text-gray-800">
              R$ 299,90
            </span>
          </div>

          {/* Botão de Ação */}
          <div className="mt-6">
            <button className="bg-orange-600 text-white px-8 py-3 rounded-lg hover:bg-orange-600 transition duration-300">
              Comprar Agora
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImageContentSection;