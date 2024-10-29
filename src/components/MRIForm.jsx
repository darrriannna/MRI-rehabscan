import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { loadStripe } from '@stripe/stripe-js';
import { addService } from '../redux/action/serviceAction';
import '../styles/bookform.css';

const stripePromise = loadStripe('pk_test_51QAvFDLGp7g0cFk2T75zMYcOMdDqzfzb6tE0exPkzlA0bYoP7ZsKVuxUyc9jjttFLkLtZWYmJb6Ikf6bKp867CB7005UMRqkzR'); // Replace with your actual Stripe publishable key

const MRIForm = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  
  // Extract passed data from location state
  const { serviceName, city, price, stripeProductId } = location.state || {};

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    personnummer: '',
    message: '',
    policyConfirmed: false,
    noPacemakerConfirmed: false,
    serviceTitle: serviceName || 'Default Service',
    city: city || '',
    price: price || 'N/A',
  });

  const [error, setError] = useState('');
  const [pacemakerError, setPacemakerError] = useState('');

  useEffect(() => {
    setFormData(prevData => ({ ...prevData, serviceTitle: serviceName, city, price }));
  }, [serviceName, city, price]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let hasError = false;

    if (!formData.policyConfirmed) {
      setError('Du måste intyga att du har tagit del av integritetspolicyn för att gå vidare.');
      hasError = true;
    } else {
      setError('');
    }

    if (!formData.noPacemakerConfirmed) {
      setPacemakerError('Du måste intyga att du inte har pacemaker för att gå vidare.');
      hasError = true;
    } else {
      setPacemakerError('');
    }

    if (hasError) return;

    // Dispatch service to redux state if needed
    const mriService = {
      id: new Date().getTime(),
      title: formData.serviceTitle,
      price: formData.price,
      qty: 1,
      type: 'service',
      formData,
    };

    dispatch(addService(mriService));

    // Stripe checkout integration
    const stripe = await stripePromise;

    const { error } = await stripe.redirectToCheckout({
      lineItems: [{ price: stripeProductId, quantity: 1 }],
      mode: 'payment',
      successUrl: `${window.location.origin}/success`,
      cancelUrl: `${window.location.origin}/cancel`,
      customerEmail: formData.email,
    });

    if (error) {
      console.error('Stripe checkout error:', error);
    }
  };

  return (
    <div className='mri-kundinfo'>
      <form onSubmit={handleSubmit}>
        <div>
          <h2 className="header-mri">Kundinformation</h2>
          <label>Service:</label>
          <input type="text" name="serviceTitle" value={formData.serviceTitle} readOnly />
        </div>
        <div>
          <label>Stad:</label>
          <input type="text" name="city" value={formData.city} readOnly />
        </div>
        <div>
          <label>Pris:</label>
          <input type="text" name="price" value={formData.price} readOnly />
        </div>
        <div>
          <label>Namn:</label>
          <input type="text" name="name" value={formData.name} onChange={handleChange} required />
        </div>
        <div>
          <label>Email:</label>
          <input type="email" name="email" value={formData.email} onChange={handleChange} required />
        </div>
        <div>
          <label>Personnummer:</label>
          <input type="text" name="personnummer" value={formData.personnummer} onChange={handleChange} required />
        </div>
        <div>
          <label>Meddelande:</label>
          <textarea name="message" value={formData.message} onChange={handleChange} required />
        </div>
        <div>
          <label>
            <input
              type="checkbox"
              name="noPacemakerConfirmed"
              checked={formData.noPacemakerConfirmed}
              onChange={handleChange}
              required
            />
            Jag har ingen pacemaker.
          </label>
          {pacemakerError && <div className="error">{pacemakerError}</div>}
        </div>
        <div>
          <label>
            <input
              type="checkbox"
              name="policyConfirmed"
              checked={formData.policyConfirmed}
              onChange={handleChange}
              required
            />
            Jag har tagit del av integritetspolicyn.
          </label>
          {error && <div className="error">{error}</div>}
        </div>
        <div>
          <button className='submit-button' type="submit">Betala</button>
        </div>
      </form>
    </div>
  );
};

export default MRIForm;






