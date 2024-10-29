import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/index.css';

const PaymentSuccess = () => {
  return (
    <div className="payment-success">
         <i class="fa fa-check-circle" aria-hidden="true"></i>
      <h1>Tack för att du valde oss! </h1>
      <p>Din betalning lyckades, och vi kommer att skicka ett bekräftelsemail med detaljer. </p>
      
      <div className="actions">
        <Link to="/" className="btn-home">Go Back to Home</Link>
      </div>
    </div>
  );
};

export default PaymentSuccess;
