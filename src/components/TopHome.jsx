import React from 'react';
import '../styles/index.css';
import ProductCarousel from './CarouselDiscount';
import { Link } from "react-router-dom";

const TopHome = () => {
  return (
    <div>
    <section className="booking-hero slide-in-left delay-0">
      <div className="booking-content">
        <h1 className="booking-title">
          Boka privat<br />
          magnetröntgen<br />
          med egen remiss.
        </h1>
        <p className="booking-subtitle">
          MR undersökning med<br />
          kort väntetid.
        </p>
        <Link to="/villkor" className="booking-link">Villkor och Begränsningar</Link>
        <div>
        <button className="btn-book-now  "><Link to="/bokanu" className='booking-main-link'>Boka undersökning</Link></button>
      </div></div>
      <div className="booking-image-container  ">
        <img src='./assets/Top-home.png' alt="MR-maskin" className="booking-image" />
      </div>
    </section>
   
    <ProductCarousel/>

     </div>
  );
};

export default TopHome;
