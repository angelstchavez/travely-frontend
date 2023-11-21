"use client";

import React, { useState, useEffect } from "react";

interface CarouselProps {
  imageUrls: string[];
}
const imageUrls = [
  "https://img.freepik.com/foto-gratis/vista-particulas-coche-blanco-lujo-moderno-estacionado-interior-dia_146671-16450.jpg?w=1380&t=st=1700338240~exp=1700338840~hmac=7b41a7d40bfb04430b996798a46baede9a5e470651a1e01a4c36cc3f7a2d2a2f",
  "https://img.freepik.com/foto-gratis/faros-potentes-vista-particulas-automoviles-lujo-modernos-estacionados-interiores-dia_146671-17395.jpg?w=1380&t=st=1700338187~exp=1700338787~hmac=12ef2385e3558239c0a59090b84e3f7e44fc11ce04b2831ce96af7651dc4346f",
  "https://img.freepik.com/foto-gratis/trafico-vehiculos-reflexiones-urbano-ciudad_1112-973.jpg?w=1380&t=st=1700339057~exp=1700339657~hmac=a3a97211b7008c684f5ccf015f48847a5fb607edb5ccd1d8e6de240b4474db99",
  "https://img.freepik.com/foto-gratis/adultos-jovenes-que-viajan-invierno_23-2149211198.jpg?w=1380&t=st=1700339084~exp=1700339684~hmac=0157db61f184cdb79d3e711d254be523811beda0299a61b44c8d9b728b39fe9b",
  "https://img.freepik.com/foto-gratis/parada-autobus-urbano-transporte-publico-ciudad-dubai_93675-131309.jpg?w=1380&t=st=1700339245~exp=1700339845~hmac=3eeb9f0b45dddfe953ebf59c3823a926840c0299955ba57c55e9d34bc4ca1bf3",
];

const Carousel: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handlePrevClick = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? imageUrls.length - 1 : prevSlide - 1
    );
  };

  const handleNextClick = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === imageUrls.length - 1 ? 0 : prevSlide + 1
    );
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      handleNextClick();
    }, 5000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <section className="dark:bg-secondary-900 text-white">
      <div className="max-w-screen-xl mx-auto py-16 px-4 lg:py-24 lg:px-6">
        <div
          id="default-carousel"
          className="relative w-full"
          data-carousel="slide"
        >
          {/* Carousel wrapper */}
          <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
            {imageUrls.map((url, index) => (
              <div
                key={index}
                className={`${
                  index === currentSlide ? "block" : "hidden"
                } duration-700 ease-in-out`}
                data-carousel-item
              >
                <img
                  src={url}
                  className="absolute w-full h-full object-cover -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                  alt={`Slide ${index + 1}`}
                />
              </div>
            ))}
          </div>
          {/* Slider indicators */}
          <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
            {imageUrls.map((_, index) => (
              <button
                key={index}
                type="button"
                className={`w-3 h-3 rounded-full ${
                  index === currentSlide ? "bg-blue-500" : "bg-gray-300"
                }`}
                aria-current={index === currentSlide ? "true" : "false"}
                aria-label={`Slide ${index + 1}`}
                data-carousel-slide-to={index}
              ></button>
            ))}
          </div>
          {/* Slider controls */}
          <button
            type="button"
            className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
            data-carousel-prev
            onClick={handlePrevClick}
          >
            {/* ... (código del botón Previous) */}
          </button>
          <button
            type="button"
            className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
            data-carousel-next
            onClick={handleNextClick}
          >
            {/* ... (código del botón Next) */}
          </button>
        </div>
      </div>
    </section>
  );
};

export default Carousel;
