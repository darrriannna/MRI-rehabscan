import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addService } from '../redux/action/serviceAction';
import { loadStripe } from '@stripe/stripe-js';
import emailjs from 'emailjs-com'; // Import EmailJS library
import '../styles/bookform.css';

// Stripe initialization
const stripePromise = loadStripe('pk_test_51QAvFDLGp7g0cFk2T75zMYcOMdDqzfzb6tE0exPkzlA0bYoP7ZsKVuxUyc9jjttFLkLtZWYmJb6Ikf6bKp867CB7005UMRqkzR');

const MRIForm = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();

  // Extract passed data from location state
  const { serviceName, city, price, stripeProductId } = location.state || {};

  const [formData, setFormData] = useState({
    name: '',
    lastname: '', // Added lastname field
    email: '',
    personnummer: '',
    telefonnummer: '',
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
    setFormData((prevData) => ({ ...prevData, serviceTitle: serviceName, city, price }));
  }, [serviceName, city, price]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handlePersonnummerChange = (event) => {
    let { value } = event.target;
    value = value.replace(/\D/g, '');
    if (value.length > 6) {
      value = `${value.slice(0, 6)}-${value.slice(6)}`;
    }
    setFormData({
      ...formData,
      personnummer: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('handleSubmit triggered'); // Debug log

    let hasError = false;

    // Validation checks
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

    // Prepare data for EmailJS
    const emailJsData = {
      name: formData.name,
      lastname: formData.lastname,
      email: formData.email,
      telefonnummer: formData.telefonnummer,
      personnummer: formData.personnummer,
      city: formData.city,
      price: formData.price,
      message: formData.message,
      serviceTitle: formData.serviceTitle, // Include the service name
    };

    try {
      const stripe = await stripePromise;
      const { error } = await stripe.redirectToCheckout({
        lineItems: [{ price: stripeProductId, quantity: 1 }],
        mode: 'payment',
        successUrl: `${window.location.origin}/success`,
        cancelUrl: `${window.location.origin}/failed`,
        customerEmail: formData.email,
      });

      if (!error) {
        // Send email with EmailJS
        emailjs
          .send('service_xpfsnsz', 'template_3x5x92l', emailJsData, 'NiSS0VC0DjOLtm-iN')
          .then((result) => {
            console.log('Email sent successfully:', result.text);
          })
          .catch((error) => {
            console.error('EmailJS Error:', error);
          });
      } else {
        console.error('Stripe checkout error:', error);
        navigate('/failed', { state: { stripeProductId, customerEmail: formData.email } });
      }
    } catch (error) {
      console.error('Error initializing Stripe checkout:', error);
      navigate('/failed', { state: { stripeProductId, customerEmail: formData.email } });
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
          <label>Förnamn:</label>
          <input className='input-field' type="text" name="name" value={formData.name} onChange={handleChange} required />
        </div>
        <div>
          <label>Efternamn:</label>
          <input className='input-field' type="text" name="lastname" value={formData.lastname} onChange={handleChange} required />
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
            onChange={handlePersonnummerChange}
            required
            placeholder="ÅÅMMDD-XXXX"
            pattern="\d{6}-\d{4}"
            maxLength="11"
          />
        </div>
        <div>
          <label>Telefonnummer:</label>
          <input className='input-field' type="text" name="telefonnummer" value={formData.telefonnummer} onChange={handleChange} required />
        </div>
        <div>
          <label>Meddelande:</label>
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








