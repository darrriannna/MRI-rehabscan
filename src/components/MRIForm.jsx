import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom'; // Import useNavigate
import { useDispatch } from 'react-redux';
import { loadStripe } from '@stripe/stripe-js';
import { addService } from '../redux/action/serviceAction';
import '../styles/bookform.css';

const stripePromise = loadStripe('pk_test_51QAvFDLGp7g0cFk2T75zMYcOMdDqzfzb6tE0exPkzlA0bYoP7ZsKVuxUyc9jjttFLkLtZWYmJb6Ikf6bKp867CB7005UMRqkzR'); // Replace with your actual Stripe publishable key

const MRIForm = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate(); // Initialize navigate
  const handlePersonnummerChange = (event) => {
    let { value } = event.target;
    
    // Remove all non-digits and apply formatting
    value = value.replace(/\D/g, ''); // Remove non-digits
    if (value.length > 6) {
      value = `${value.slice(0, 6)}-${value.slice(6)}`; // Insert dash after 6 digits
    }
    
    // Set the value in formData
    setFormData({
      ...formData,
      personnummer: value
    });
  };
  
  // Extract passed data from location state
  const { serviceName, city, price, stripeProductId } = location.state || {};

  const [formData, setFormData] = useState({
    name: '',
    lastname: '',
    email: '',
    personnummer: '',
    message: '',
    telefonnummer: '',
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
    try {
      const stripe = await stripePromise;

      const { error } = await stripe.redirectToCheckout({
        lineItems: [{ price: stripeProductId, quantity: 1 }],
        mode: 'payment',
        successUrl: `${window.location.origin}/success`,
        cancelUrl: `${window.location.origin}/failed`,
        customerEmail: formData.email,
      });

      if (error) {
        console.error('Stripe checkout error:', error);
        navigate('/failed', {
          state: {
            stripeProductId, // Pass the actual product ID used in the checkout
            customerEmail: formData.email, // Pass the customer's email for retry
          },
        });
      }
    } catch (error) {
      console.error('Error initializing Stripe checkout:', error);
      navigate('/failed', {
        state: {
          stripeProductId,
          customerEmail: formData.email,
        },
      });
    }
  };

  return (
    <div className='mri-kundinfo'>
      <form onSubmit={handleSubmit}>
        <div>
          <h2 className="header-mri">Kundinformation</h2>
          <label>Service:</label>
          <input className='input-field' type="text" name="serviceTitle" value={formData.serviceTitle} readOnly />
        </div>
        <div>
          <label>Stad:</label>
          <input className='input-field' type="text" name="city" value={formData.city} readOnly />
        </div>
        <div>
          <label>Pris:</label>
          <input className='input-field' type="text" name="price" value={formData.price} readOnly />
        </div>
        <div>
          <label>Namn:</label>
          <input className='input-field' type="text" name="name" value={formData.name} onChange={handleChange} required />
        </div>
        <div>
  <label>Efternamn:</label>
  <input
    className='input-field'
    type="text"
    name="lastname"
    value={formData.lastname}
    onChange={handleChange}
    required
  />
</div>
        <div>
          <label>Email:</label>
          <input className='input-field' type="email" name="email" value={formData.email} onChange={handleChange} required />
        </div>
        <div>
  <label>Personnummer:</label>
  <input
    className='input-field'
    type="text"
    name="personnummer"
    value={formData.personnummer}
    onChange={handlePersonnummerChange} // Use a custom handler for formatting
    required
    placeholder="ÅÅÅÅMMDD-XXXX"
    pattern="\d{8}-\d{4}" // Ensures format 6 digits, dash, then 4 digits
    maxLength="11" // Limits input to 11 characters (10 digits + 1 dash)
  />
</div>

<div>
  <label>Telefonnummer:</label>
  <input
    className='input-field'
    type="text"
    name="telefonnummer" // Ensure the name is 'telefonnummer'
    value={formData.telefonnummer} // Use formData.telefonnummer here
    onChange={handleChange} // Use the general handleChange function
    required
  />
</div>
        <div>
          <label>Beskriv dina besvär:</label>
          <textarea className='input-field' name="message" value={formData.message} onChange={handleChange} required />
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







