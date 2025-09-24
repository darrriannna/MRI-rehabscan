import React, { useEffect, useState } from "react";
import "../styles/ad-info.css";

const slides = [
  {
    image: "./assets/image1.jpg",
    text: "Träna rätt – med stöd från legitimerade experter",
  },
  {
    image: "./assets/image2.jpg",
    text: "Enkla steg mot en smärtfri vardag",
  },
  {
    image: "./assets/image3.jpg",
    text: "Din kropp. Din plan. Din återhämtning.",
  },
];

const AutoSlideshow = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div id="banner" className="slideshow-container">
      {slides.map((slide, index) => (
        <div
          className={`slide ${index === current ? "active" : ""}`}
          key={index}
        >
          <img src={slide.image} alt={`Slide ${index}`} />
          <div className="caption">{slide.text}</div>
        </div>
      ))}
    </div>
  );
};

export default AutoSlideshow;