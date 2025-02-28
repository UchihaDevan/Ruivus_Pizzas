import React, { useState } from "react";

interface CarouselItem {
  id: number;
  image: string;
  title: string;
  description: string;
}

const carouselItems: CarouselItem[] = [
  {
    id: 1,
    image:
      "https://raw.githubusercontent.com/UchihaDevan/Ruivus_Pizzas/refs/heads/main/src/imgs/slides/img1.webp",
    title: "Primeiro Slide",
    description: "Descrição do primeiro slide",
  },
  {
    id: 2,
    image:
      "https://raw.githubusercontent.com/UchihaDevan/Ruivus_Pizzas/refs/heads/main/src/imgs/slides/img2.webp",
    title: "Segundo Slide",
    description: "Descrição do segundo slide",
  },
  {
    id: 3,
    image:
      "https://raw.githubusercontent.com/UchihaDevan/Ruivus_Pizzas/refs/heads/main/src/imgs/slides/img3.webp",
    title: "Terceiro Slide",
    description: "Descrição do terceiro slide",
  },
];

const Carousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === carouselItems.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? carouselItems.length - 1 : prevIndex - 1
    );
  };

  return (
    <section className="relative w-full p-3 overflow-hidden mx-auto bg-gray-950">
      {/* Container do Carrossel */}
      <div className="relative w-full h-[80vh]">
        {/* Slide Atual */}
        <div
          className="w-full h-full transition-transform duration-500 ease-in-out"
          key={carouselItems[currentIndex].id}
        >
          <img
            src={carouselItems[currentIndex].image}
            alt={carouselItems[currentIndex].title}
            className="w-full h-full object-cover rounded-2xl"
          />

          {/* Overlay de Informações */}
          <div className="absolute bottom-0 left-0 right-0 bg-gray-950 bg-opacity-50 p-4 text-white">
            <h2 className="text-2xl font-bold">{carouselItems[currentIndex].title}</h2>
            <p className="mt-2">{carouselItems[currentIndex].description}</p>
          </div>
        </div>

        {/* Botões de Navegação */}
        <button
          onClick={prevSlide}
          className="absolute top-1/2 left-4 -translate-y-1/2 bg-white/50 rounded-full p-3 hover:bg-white/75 transition-colors duration-300"
        >
          &#10094;
        </button>
        <button
          onClick={nextSlide}
          className="absolute top-1/2 right-4 -translate-y-1/2 bg-white/50 rounded-full p-3 hover:bg-white/75 transition-colors duration-300"
        >
          &#10095;
        </button>
      </div>

      {/* Navegação por Pontos */}
      <div className="flex justify-center mt-4 space-x-2">
        {carouselItems.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`
              w-3 h-3 rounded-full
              ${index === currentIndex ? "bg-green-lima" : "bg-gray-300 hover:bg-blue-300"}
              transition-colors duration-300
            `}
          />
        ))}
      </div>
    </section>
  );
};

export default Carousel;
