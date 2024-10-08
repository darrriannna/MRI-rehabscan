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
              <li><Link to="/about">Om oss</Link></li>
              <li><Link to="/policy">Integritetspolicy</Link></li>
              
            </ul>
            <h4>Hitta oss</h4>
            <p >Karl Johansgatan 100, 414 55 Göteborg</p>
        <p>070-582 21 42</p>
        <p >
          <a className="link" href="mailto:info@nopainclinic.se">info@nopainclinic.se</a>
        </p>
        <div>
        
          </div></div>
          <div className="col-md-6">
            <h5>Kundservice</h5>
            <ul className="list-unstyled">
              <li><Link to="/contact">Kontakta oss</Link></li>
              
            </ul>
          </div>
        </div>
      </div>
      
    </footer>
  );
};

export default Footer;

