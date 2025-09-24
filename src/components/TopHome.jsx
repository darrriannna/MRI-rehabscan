import React, { useState } from 'react';
import '../styles/index.css';
import ProductCarousel from './CarouselDiscount';
import { Link } from "react-router-dom";

const TopHome = () => {
  const [showModal, setShowModal] = useState(false);

  const handleOpenModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  return (
    <div>
      <section id="banner" className="banner-section">
        <img 
          src="/assets/Banner-image.png"
          alt="banner"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover"
          }}
        />

        {/* Gradient overlay + content */}
        <div className="banner-overlay slide-in-left delay-0">
          <div className="banner-content">
            <h2 className="banner-main-slogan">
              Undvik köer och väntetider <br /> med privat magnetröntgen.
            </h2>
            <p className="banner-subtext">
              Få tid för magnetkameraundersökning inom 1-7 arbetsdagar.<br />
              Vi skickar din remiss, därefter får du kallelse till undersökning.
              Dina röntgenbilder kontrolleras <em> av röntgenspecialister.</em>.
            </p>
            <div className="banner-buttons">
              <button className="btn-book-now-ban">
                <Link to="/bokanu" className='booking-main-link'>Boka undersökning</Link>
              </button>
              <button className="btn-secondary" onClick={handleOpenModal}>
                Kontakta oss
              </button>
            </div>
          </div>
        </div>
      </section>

      <ProductCarousel/>

      {/* Modal */}
      {showModal && (
        <div className="modal-overlay" onClick={handleCloseModal}>
          <div className="modal-content" onClick={e => e.stopPropagation()}>
            <h3>Kontakta oss</h3>
            <p>
              Om du behöver hjälp att välja vilken undersökning som passar dig bäst,
              kontakta oss gärna via telefon <strong>010-210-22 31 </strong>  
eller på <strong>info@rehabscan.se</strong>.
            </p>
            <button className="modal-close-btn" onClick={handleCloseModal}>Stäng</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default TopHome;

