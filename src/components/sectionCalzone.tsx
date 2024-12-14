import React, { useState } from "react";

interface ImageCardProps {
  src: string;
  title: string;
}

const ImageCard: React.FC<ImageCardProps> = ({ src, title }) => (
  <div className="flex flex-col items-center px-2">
    <img
      src={src}
      alt={`Imagem relacionada a ${title}`}
      className="w-full h-auto rounded-lg shadow-lg"
    />
    <h3 className="mt-4 text-lg font-semibold text-gray-100">{title}</h3>
  </div>
);

const ImageCarousel: React.FC = () => {
  const images = [
    { src: "/src/imgs/pngwing.com (3).png", title: "Título 1" },
    { src: "/src/imgs/pngwing.com (3).png", title: "Título 2" },
    { src: "/src/imgs/pngwing.com (3).png", title: "Título 3" },
    { src: "/src/imgs/pngwing.com (3).png", title: "Título 4" },
    { src: "/src/imgs/pngwing.com (3).png", title: "Título 5" },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Define quantas imagens mostrar por slide
  const slidesToShow = window.innerWidth >= 768 ? 3 : 1; // 3 imagens no desktop, 1 no mobile
  const totalSlides = Math.ceil(images.length / slidesToShow);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === totalSlides - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? totalSlides - 1 : prevIndex - 1
    );
  };

  return (
    <section className="flex flex-col items-center bg-gray-950 min-h-screen p-6">
      <h2 className="text-2xl font-bold mb-6 text-gray-100">Galeria</h2>
      {/* Carrossel */}
      <div className="relative w-full max-w-6xl overflow-hidden">
        <div
          className="flex transition-transform duration-500"
          style={{
            transform: `translateX(-${currentIndex * (100 / slidesToShow)}%)`,
            width: `${(75 / slidesToShow) * images.length}%`,
          }}
        >
          {images.map((image, index) => (
            <div
              key={index}
              className="flex-shrink-0"
              style={{
                width: `${80 / slidesToShow}%`, // Distribui a largura dinamicamente
              }}
            >
              <ImageCard src={image.src} title={image.title} />
            </div>
          ))}
        </div>

        {/* Botões de navegação */}
        <button
          onClick={prevSlide}
          className="absolute top-1/2 left-2 -translate-y-1/2 bg-orange-600 text-white p-2 rounded-full hover:bg-gray-700 transition"
        >
          ‹
        </button>
        <button
          onClick={nextSlide}
          className="absolute top-1/2 right-2 -translate-y-1/2 bg-orange-600 text-white p-2 rounded-full hover:bg-gray-700 transition"
        >
          ›
        </button>
      </div>

      {/* Indicadores */}
      <div className="flex space-x-2 mt-4">
        {Array.from({ length: totalSlides }).map((_, index) => (
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
