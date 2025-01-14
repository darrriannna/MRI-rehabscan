import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import emailjs from 'emailjs-com';

const PaymentSuccess = () => {
  useEffect(() => {
    // Retrieve form data from localStorage
    const formData = JSON.parse(localStorage.getItem('formData'));

    if (formData) {
      const emailJsData = {
        name: formData.name,
        lastname: formData.lastname,
        email: formData.email,
        telefonnummer: formData.telefonnummer,
        personnummer: formData.personnummer,
        city: formData.city,
        price: formData.price,
        adress: formData.adress,
        postcity: formData.postcity,
        postnum: formData.postnum,
        message: formData.message,
        serviceTitle: formData.serviceTitle,
      };

      // Send email via EmailJS
      emailjs
        .send('service_xpfsnsz', 'template_nhom3d2', emailJsData, 'NiSS0VC0DjOLtm-iN')
        .then((result) => {
          console.log('Email sent successfully:', result.text);
        })
        .catch((error) => {
          console.error('Error sending email:', error);
        });

      // Clear form data after sending email
      localStorage.removeItem('formData');
      localStorage.removeItem('bookingData');
    }
  }, []);

  return (
    <div className="payment-success">
      <img className='icon-success' src="./assets/Success.png" alt="" />
      <h1>Tack för att du valde oss! </h1>
      <p>Din betalning lyckades, och vi kommer att skicka ett bekräftelsemail med detaljer. </p>
      
      <div className="actions">
      <Link to="/" className="btn-navbar">Tillbaka till Hemsida</Link>
</div>
    </div>
  );
};

export default PaymentSuccess;

