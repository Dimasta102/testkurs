import React, { useState } from 'react';

const CarSlider = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  return (
    <div className="slider">
      <img src={`/assets/images/${images[currentIndex]}`} alt="Car" />
      <button onClick={prevSlide}>Назад</button>
      <button onClick={nextSlide}>Вперед</button>
    </div>
  );
};

export default CarSlider;
