
import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { loadStripe } from '@stripe/stripe-js';
import '../styles/index.css'; // Ensure you have the relevant CSS

const stripePromise = loadStripe('pk_test_51QAvFDLGp7g0cFk2T75zMYcOMdDqzfzb6tE0exPkzlA0bYoP7ZsKVuxUyc9jjttFLkLtZWYmJb6Ikf6bKp867CB7005UMRqkzR'); // Replace with your actual key

const Failed = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { stripeProductId, customerEmail } = location.state || {}; // Assuming these were passed from the checkout process

  const handleRetryCheckout = async () => {
    if (!stripeProductId || !customerEmail) {
      console.error("Missing necessary data for retrying checkout.");
      return;
    }

    try {
      const stripe = await stripePromise;

      const { error } = await stripe.redirectToCheckout({
        lineItems: [{ price: stripeProductId, quantity: 1 }],
        mode: 'payment',
        successUrl: `${window.location.origin}/success`,
        cancelUrl: `${window.location.origin}/failed`,
        customerEmail,
      });

      if (error) {
        console.error('Stripe checkout error:', error);
      }
    } catch (error) {
      console.error('Error initiating Stripe checkout:', error);
    }
  };

  return (
    <div className="failed-payment-page">
      <img className='icon-success' src="./assets/Failed.png" alt="Failed Payment" />
      <h1 className='title-failed'>Betalning misslyckades</h1>
      <p>
        Tyvärr kunde din betalning inte genomföras. Kontrollera dina betalningsuppgifter
        och försök igen.
      </p>
      <p>
        Om problemet kvarstår, vänligen kontakta oss för support så hjälper vi dig.
      </p>
      <button className="btn-navbar" onClick={handleRetryCheckout}>
        Försök igen
      </button>
      <button className="link-failed" onClick={() => navigate('/')}>
        Tillbaka till Hemsida
      </button>
    </div>
  );
};

export default Failed;

