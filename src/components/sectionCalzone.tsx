import React, { useState, useEffect } from "react";

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
    <h3 className="mt-4 text-2xl font-semibold text-gray-100">{title}</h3>
  </div>
);

const ImageCarousel: React.FC = () => {
  const images = [
    { src: "/src/imgs/Calzones/calzone1.png", title: "Título 1" },
    { src: "/src/imgs/Calzones/calzone2.png", title: "Título 2" },
    { src: "/src/imgs/Calzones/calzone3.png", title: "Título 3" },
    { src: "/src/imgs/pngwing.com (3).png", title: "Título 4" },
    { src: "/src/imgs/pngwing.com (3).png", title: "Título 5" },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [slidesToShow, setSlidesToShow] = useState(1);

  useEffect(() => {
    const updateSlidesToShow = () => {
      setSlidesToShow(window.innerWidth >= 768 ? 3 : 1);
    };

    updateSlidesToShow();
    window.addEventListener("resize", updateSlidesToShow);

    return () => window.removeEventListener("resize", updateSlidesToShow);
  }, []);

  const totalSlides = Math.ceil(images.length / 1);

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
      <h2 className="text-4xl font-bold mb-6 text-gray-100">
        Nossos Calzones de <span className="text-green-lima">outra galáxia</span>!
      </h2>
      {/* Carrossel */}
      <div className="relative w-full max-w-6xl overflow-hidden">
        <div
          className="flex transition-transform duration-500 items-center"
          style={{
            transform: `translateX(-${(currentIndex * 100) / slidesToShow}%)`,
            width: `${(70 / slidesToShow) * images.length}%`,
          }}
        >
          {images.map((image, index) => (
            <div
              key={index}
              className="flex-shrink-0"
              style={{
                width: `${100 / slidesToShow}%`,
              }}
            >
              <ImageCard src={image.src} title={image.title} />
            </div>
          ))}
        </div>

        {/* Botões de navegação */}
        <button
          onClick={prevSlide}
          className="absolute top-1/2 left-4 -translate-y-1/2 bg-green-lima text-white p-2 rounded-full hover:bg-gray-700 transition"
        >
          ‹
        </button>
        <button
          onClick={nextSlide}
          className="absolute top-1/2 right-4 -translate-y-1/2 bg-green-lima text-white p-2 rounded-full hover:bg-gray-700 transition"
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
              currentIndex === index ? "bg-green-lima" : "bg-gray-400"
            }`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
    </section>
  );
};

export default ImageCarousel;
