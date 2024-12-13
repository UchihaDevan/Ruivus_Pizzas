import React, { useState } from 'react';

interface ImageCardProps {
  src: string;
  title: string;
}

const ImageCard: React.FC<ImageCardProps> = ({ src, title }) => (
  <div className="flex flex-col items-center">
    <img 
      src={src} 
      alt={`Imagem relacionada a ${title}`} 
      className="w-full h-auto rounded-lg shadow-lg"
    />
    <h3 className="mt-4 text-lg font-semibold text-gray-800">{title}</h3>
  </div>
);

const ImageCarousel: React.FC = () => {
  const images = [
    { src: '/src/imgs/pngwing.com (3).png', title: 'Título 1' },
    { src: '/src/imgs/pngwing.com (3).png', title: 'Título 2' },
    { src: '/src/imgs/pngwing.com (3).png', title: 'Título 3' },
    { src: '/src/imgs/pngwing.com (3).png', title: 'Título 4' },
    { src: '/src/imgs/pngwing.com (3).png', title: 'Título 5' },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Funções para navegação
  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <section className="flex flex-col items-center bg-gray-100 min-h-screen p-6">
      {/* Contêiner do Carrossel */}
      <div className="relative w-full max-w-md overflow-hidden">
        <div
          className="flex transition-transform duration-500"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {images.map((image, index) => (
            <div 
              key={index} 
              className="flex-shrink-0 w-full"
              style={{ minWidth: "100%" }}
            >
              <ImageCard src={image.src} title={image.title} />
            </div>
          ))}
        </div>

        {/* Botões de Navegação */}
        <button
          className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full hover:bg-gray-700 transition"
          onClick={goToPrevious}
        >
          ‹
        </button>
        <button
          className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full hover:bg-gray-700 transition"
          onClick={goToNext}
        >
          ›
        </button>
      </div>

      {/* Indicadores */}
      <div className="flex space-x-2 mt-4">
        {images.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full ${
              currentIndex === index ? "bg-orange-500" : "bg-gray-400"
            }`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </section>
  );
};

export default ImageCarousel;
