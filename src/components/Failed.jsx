import React from 'react';
import { useNavigate } from 'react-router-dom';
import { loadStripe } from '@stripe/stripe-js';
import '../styles/index.css';

// Initialize Stripe
const stripePromise = loadStripe('pk_live_51QAvFDLGp7g0cFk2pdHbOh0iIz1ThLFf6qVHlIQq6ZTLgfN42QVnjkKkDxe3FQdy1Oxg9D4k6Qw0OqN4hqJBeESQ00U76MFWeK');

const Failed = () => {
  const navigate = useNavigate();

  const handleRetry = async () => {
    const bookingData = JSON.parse(localStorage.getItem('bookingData'));
  
    if (!bookingData || !bookingData.paymentLink) {
      console.error('No booking data or Stripe product ID found. Redirecting to form.');
      navigate('/mri-boka'); // Redirect to form if data is missing
      return;
    }
  
    const stripe = await stripePromise;
  
    try {
      const { error } = await stripe.redirectToCheckout({
        lineItems: [{ price: bookingData.paymentLink, quantity: 1 }],
        mode: 'payment',
        successUrl: `${window.location.origin}/success`,
        cancelUrl: `${window.location.origin}/failed`,
        customerEmail: bookingData.customerEmail // Replace with actual email
      });
  
      if (error) {
        console.error('Stripe checkout retry error:', error);
      }
    } catch (error) {
      console.error('Error retrying checkout:', error);
    }
  };
  

  const handleCancel = () => {
    localStorage.removeItem('bookingData'); // Clear booking data
    localStorage.removeItem('formData'); 
    navigate('/'); // Redirect to homepage
  };
  

  return (
    <div className="failed-payment-page">
      <img className="icon-success" src="./assets/Failed.png" alt="Failed Payment" />
      <h1 className="title-failed">Betalning misslyckades</h1>
      <p>
        Tyvärr kunde din betalning inte genomföras. Kontrollera dina betalningsuppgifter
        och försök igen.
      </p>
      <p>
        Om problemet kvarstår, vänligen kontakta oss för support så hjälper vi dig.
      </p>
      <button className="btn-navbar" onClick={handleRetry}>
        Försök igen
      </button>
      <button className="link-failed" onClick={handleCancel}>
        Tillbaka till Hemsida
      </button>
    </div>
  );
};

export default Failed;




