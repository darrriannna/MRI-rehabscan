import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/ad-info.css";

const ProductCarousel = () => {
  const navigate = useNavigate();
  const trackRef = useRef(null);
  const handleBook = (service) => {
    navigate("/bokanu", { state: { serviceName: service.name, servicePrice: service.newPrice } });
  };

  const services = [
   
    {
      name: "MR Vänster Axel",
      description: "Upptäck skador i axelledens muskler och senor.",
      oldPrice: "4 900kr",
      newPrice: "4 100kr",
      image: "/assets/axel.jpg",
    }, {
      name: "MR Vänster Knä",
      description: "Upptäck skador på korsband, menisk och ledband.",
      oldPrice: "4 900kr",
      newPrice: "4 100kr",
      image: "/assets/kna-hoger.jpg",
    },
    {
      name: "MR Ländrygg",
      description: "Identifiera diskbråck eller ryggmärgsproblem.",
      oldPrice: "4 900kr",
      newPrice: "4 200kr",
      image: "/assets/landrygg.jpg",
    },
    {
        name: "MR Nacke/Halsrygg",
        description: "Upptäck skador, diskbråck eller påverkad nervfunktion.",
        oldPrice: "5 200kr",
        newPrice: "4 100kr",
        image: "/assets/nacke.jpg",
      },
    {
      name: "MR Bäcken/höftleder",
      description: "Påvisa inflammation eller artros i höftleder.",
      oldPrice: "4 900kr",
      newPrice: "4 100kr",
      image: "/assets/backen.jpg",
    },
    {
      name: "MR Höger Axel",
      description: "Upptäck inflammation eller artros i axeln.",
      oldPrice: "4 900kr",
      newPrice: "4 100kr",
      image: "/assets/axel.jpg", // replace with your image path
    },
    {
      name: "MR Höger Knä",
      description: "Identifiera vanliga knäskador och inflammationer.",
      oldPrice: "4 900kr",
      newPrice: "4 100kr",
      image: "/assets/kna-vanster.jpg",
    },
    {
      name: "MR Helrygg",
      description: "Upptäck diskbråck och andra ryggproblem.",

      oldPrice: "12 400kr",
      newPrice: "11 500kr",
      image: "/assets/helrygg.jpg",
    },
  ];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [cardsPerView, setCardsPerView] = useState(4);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 480) setCardsPerView(1);
      else if (window.innerWidth < 768) setCardsPerView(2);
      else setCardsPerView(4);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1 >= services.length ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 < 0 ? services.length - 1 : prev - 1));
  };

  return (
    <div className="carousel-container">
      <h2 className="carousel-header">Specialerbjudanden</h2>
      <div className="carousel">
        <button className="arrow left" onClick={prevSlide}>
          &#10094;
        </button>
        <div className="carousel-track-wrapper">
          <div
            className="carousel-track"
            ref={trackRef}
            style={{
              transform: `translateX(-${currentIndex * (100 / cardsPerView)}%)`,
            }}
          >
            {services.map((service, index) => (
              <div className="carousel-card" key={index}>
                <img src={service.image} alt={service.name} className="carousel-image" />
                <h3>{service.name}</h3>
                <p className="service-description">{service.description}</p>
                <p>
                  <span className="old-price">{service.oldPrice}</span>{" "}
                  <span className="new-price">{service.newPrice}</span>
                </p>
                <button className="btn-book-now" onClick={() => handleBook(service)}>
                  Boka nu
                </button>
              </div>
            ))}
          </div>
        </div>
        <button className="arrow right" onClick={nextSlide}>
          &#10095;
        </button>
      </div>
    </div>
  );
};

export default ProductCarousel;


