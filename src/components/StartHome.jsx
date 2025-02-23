import React from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import "../styles/index.css"; // Import CSS

const MainInfo = ({ scanRef }) => {
  const navigate = useNavigate();

  const handleBook = () => {
    const service = {
      name: "Helkropp",
      price: "16 200kr",
    };
    navigate("/bokanu", { state: { serviceName: service.name, servicePrice: service.price } });
  };

  const handleLearnMore = () => {
    if (scanRef.current) {
      scanRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="mr-layout-container">
      {/* Left Container */}
      <div className="mr-layout-left">
        <img
          src="./assets/startHome.jpg"
          alt="MRI Scan"
          className="mr-layout-image"
        />
      </div>

      {/* Right Container */}
      <div className="mr-layout-right">
        <h2 className="mr-layout-heading">Privat MR (från 3 900 kr)</h2>
        <ul className="mr-layout-list">
          <li>
           MR Ländrygg, Bäcken/höftleder, Nacke/Halsrygg - 3 900kr
          </li>
          <li>MR Hjärna - 4 200kr </li>
          <li>MR Helrygg - 9 000kr </li>
        </ul>
        <p className="mr-layout-subheading">För andra undersökningar gå till prislista.</p>
        <Link to="/prislista" className="mr-layout-button-secondary text-center">
               Gå till Prislista
              </Link>
     
        <h1 className="mr-layout-heading">MR-Helkropp</h1>
        <p className="mr-layout-subheading">Avancerad hälsoundersökning</p>
        <ul className="mr-layout-list">
          <li>
            MR-Helkroppsröntgen som upptäcker tecken på cancer, stroke,
            inflammation och annan sjukdom.
          </li>
          <li>Få tid och svar inom 7 arbetsdagar.</li>
          <li>Innefattar MR scanning av 21 organ.</li>
        </ul>
        <p className="mr-layout-price">16 200 KR</p>

        {/* Buttons now trigger navigation just like in AnimationBody */}
        <button className="mr-layout-button-primary" onClick={handleBook}>
         Boka nu
        </button>
        <button className="mr-layout-button-secondary" onClick={handleLearnMore}>
          Vad kan man upptäcka?
        </button>

        <div className="mr-layout-discount">
          <p>Finns i flera städer som Stockholm, Göteborg, Malmö, Strömstad, Nynäshamn, Bäckefors, Umeå, Borås, Karlstad, Sundsvall, Jönköping</p>
          <p className="mr-layout-discount-time">INGEN REMISS KRÄVS</p>
        </div>
      </div>
    </div>
  );
};

export default MainInfo;

