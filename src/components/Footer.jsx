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
              <li><Link to="/om-oss">Om oss</Link></li>
              <li><Link to="/integrity-policy">Integritetspolicy</Link></li>
              
            </ul>
            
        <div>
        
          </div></div>
          <div className="col-md-4">
           <h4 className="footer-header">Kontakta oss</h4>
           <p className="link-footer">010-210 2231</p>
             <p >
          <a className="link-footer" href="mailto:info@rehabscan.se">info@rehabscan.se</a>
        </p>
           <h4 className="footer-header">Öppettider</h4>
           <p className="link-footer">Mån-Fre  07:00 - 19:00</p>
      
          </div>
          <div className="col-md-4" >
            <img src="./assets/logo-wh.png" alt="Magnetröntgen uatn remiss Sverige - RehabScan" style={{ height: '65px' }} />
          </div>
        </div>
      </div>
      <p className="text-center white">© Copyright 2025 RehabScan</p>
    </footer>
    </div>
  );
};

export default Footer;

