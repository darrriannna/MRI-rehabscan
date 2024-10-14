import React from "react";
import { Link } from "react-router-dom";
import "../styles/index.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h5>Information</h5>
            <ul className="list-unstyled">
              <li><Link to="/about">Om oss</Link></li>
              <li><Link to="/policy">Integritetspolicy</Link></li>
              
            </ul>
            <h4>Hitta oss</h4>
      
        <p>070-873 2929</p>
        <p >
          <a className="link" href="mailto:info@nopainclinic.se">info@rehabscan.se</a>
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

