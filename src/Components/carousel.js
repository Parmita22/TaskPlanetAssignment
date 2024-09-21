import React, { useState, useEffect } from 'react';
import './carousel.css';

// Import images
import image1 from '../assets/images/image1.png';
import image2 from '../assets/images/image2.png';
import image3 from '../assets/images/image3.png';

const Carousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const items = [
    { image: image1 },
    { image: image2 },
    { image: image3 },
  ];

  const nextSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % items.length);
  };

  const prevSlide = () => {
    setActiveIndex(
      (prevIndex) => (prevIndex - 1 + items.length) % items.length
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000); 

    return () => clearInterval(interval);
  }, [activeIndex]);

  return (
    <div className="carousel">
      <div className="carousel-content">
        <button onClick={prevSlide} className="carousel-control prev">
          &#10094;
        </button>

        <div className="carousel-item">
          <img
            src={items[activeIndex].image}
            alt={`Slide ${activeIndex + 1}`}
            className="carousel-image"
          />
        </div>

        <button onClick={nextSlide} className="carousel-control next">
          &#10095;
        </button>
      </div>
    </div>
  );
};

export default Carousel;
