import React from "react";
import { Link } from "react-router-dom";
import "../styles/index.css";

const Footer = () => {
  return (
    <footer className="footer mt-auto py-3 bg-light">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h5>Information</h5>
            <ul className="list-unstyled">
              <li><Link to="/om-oss">Om oss</Link></li>
              <li><Link to="/fragor-svar">Frågor & Svar</Link></li>
              <li><Link to="/kopvillkor">Köpvillkor</Link></li>
              <li><Link to="/integritetspolicy">Integritetspolicy</Link></li>
            </ul>
          </div>
          <div className="col-md-6">
            <h5>Kundservice</h5>
            <ul className="list-unstyled">
              <li><Link to="/byte-retur">Byte & Retur</Link></li>
              <li><Link to="/kontakta-oss">Kontakta oss</Link></li>
              <li><Link to="/varukorg">Varukorg</Link></li>
            </ul>
          </div>
        </div>
      </div>
      
    </footer>
  );
};

export default Footer;

