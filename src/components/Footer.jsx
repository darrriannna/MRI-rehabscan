import React from "react";
import { Link } from "react-router-dom";
import "../styles/index.css";

const Footer = () => {
  return (
      <div className="footer">
    <footer >
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <h4 className="footer-header">Information</h4>
            <ul className="list-unstyled">
              <li><Link to="/about">Om oss</Link></li>
              <li><Link to="/policy">Integritetspolicy</Link></li>
              
            </ul>
            <h4 className="footer-header">Hitta oss</h4>
      
        <p className="link-footer">070-783 2929</p>
        <p >
          <a className="link-footer" href="mailto:info@rehabscan.se">info@rehabscan.se</a>
        </p>
        <div>
        
          </div></div>
          <div className="col-md-4">
            <h4 className="footer-header">Kundservice</h4>
            <ul className="list-unstyled">
              <li><Link to="/contact">Kontakta oss</Link></li>
              
            </ul>
          </div>
          <div className="col-md-4" >
            <img src="./assets/logo-wh.png" alt="" style={{ height: '65px' }} />
          </div>
        </div>
      </div>
      
    </footer>
    </div>
  );
};

export default Footer;

