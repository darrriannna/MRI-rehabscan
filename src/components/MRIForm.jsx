import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { loadStripe } from '@stripe/stripe-js';
import '../styles/bookform.css';

// Stripe initialization
const stripePromise = loadStripe('pk_test_51QAvFDLGp7g0cFk2T75zMYcOMdDqzfzb6tE0exPkzlA0bYoP7ZsKVuxUyc9jjttFLkLtZWYmJb6Ikf6bKp867CB7005UMRqkzR');

const MRIForm = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const { serviceName, city, price, stripeProductId } = location.state || {};

  const [formData, setFormData] = useState({
    name: '',
    lastname: '',
    email: '',
    personnummer: '',
    telefonnummer: '+46',
    message: '',
    policyConfirmed: false,
    noPacemakerConfirmed: false,
    serviceTitle: serviceName || 'Default Service',
    city: city || '',
    price: price || 'N/A',
  });

  const [errors, setErrors] = useState({}); // State to track errors

  // Load form data from localStorage if available
  useEffect(() => {
    const savedData = localStorage.getItem('formData');
    if (savedData) {
      setFormData(JSON.parse(savedData));
    }
  }, []);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
  
    let updatedFormData = { ...formData };
  
    if (name === 'personnummer') {
      let formattedValue = value.replace(/\D/g, ''); // Remove all non-numeric characters
      if (formattedValue.length > 6) {
        formattedValue = formattedValue.slice(0, 6) + '-' + formattedValue.slice(6, 10);
      }
      updatedFormData[name] = formattedValue;
    } else if (name === 'telefonnummer') {
      // Ensure `+46` is fixed and only digits can be appended after it
      const rest = value.replace(/^\+46/, ''); // Remove any existing `+46` from the input
      updatedFormData[name] = `+46${rest.replace(/\D/g, '')}`; // Keep only digits after `+46`
    } else {
      updatedFormData[name] = type === 'checkbox' ? checked : value;
    }
  
    setFormData(updatedFormData);
    localStorage.setItem('formData', JSON.stringify(updatedFormData)); // Update localStorage
  };
  
  
  const validateTelefonnummer = () => {
    const { telefonnummer } = formData;
    console.log('Validating:', telefonnummer);
  
    const regex = /^\+46(7\d{8})$/;
    const isValid = regex.test(telefonnummer);
  
    console.log('Is valid:', isValid);
  
    if (!isValid) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        telefonnummer: 'Telefonnumret måste börja med +46 och följa formatet +4670XXXXXXX.',
      }));
      return false;
    }
  
    setErrors((prevErrors) => ({
      ...prevErrors,
      telefonnummer: null,
    }));
    return true;
  };
  
  
  

  const validatePersonnummer = () => {
    const { personnummer } = formData;

    // Simple regex to check if it follows the ÅÅMMDD-XXXX pattern
    const regex = /^\d{2}(0[1-9]|1[0-2])(0[1-9]|[12][0-9]|3[01])-\d{4}$/;
    if (!regex.test(personnummer)) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        personnummer: 'Personnummer must follow the format ÅÅMMDD-XXXX with valid dates.',
      }));
      return false;
    }

    // Validate the date part of the personnummer
    const year = parseInt(personnummer.slice(0, 2), 10);
    const month = parseInt(personnummer.slice(2, 4), 10);
    const day = parseInt(personnummer.slice(4, 6), 10);

    const isValidDate = (y, m, d) => {
      const date = new Date(`20${y}-${String(m).padStart(2, '0')}-${String(d).padStart(2, '0')}`);
      return date.getFullYear() === 2000 + y && date.getMonth() + 1 === m && date.getDate() === d;
    };

    if (!isValidDate(year, month, day)) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        personnummer: 'Invalid date in Personnummer.',
      }));
      return false;
    }

    // Clear the error if validation passes
    setErrors((prevErrors) => ({ ...prevErrors, personnummer: null }));
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    let hasError = false;
  
    // Validate all fields here
    if (!formData.policyConfirmed) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        policy: 'Du måste intyga att du har tagit del av integritetspolicyn för att gå vidare.',
      }));
      hasError = true;
    } else {
      setErrors((prevErrors) => ({ ...prevErrors, policy: null }));
    }
  
    if (!formData.noPacemakerConfirmed) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        pacemaker: 'Du måste intyga att du inte har pacemaker för att gå vidare.',
      }));
      hasError = true;
    } else {
      setErrors((prevErrors) => ({ ...prevErrors, pacemaker: null }));
    }
  
    // Run personnummer validation
    if (!validatePersonnummer()) {
      hasError = true;
    }
    if (!validateTelefonnummer()) {
      hasError = true;
    }
  
    if (hasError) return;
  
    // Validate stripeProductId
    if (!stripeProductId || typeof stripeProductId !== 'string') {
      console.error('Stripe Product ID is missing or invalid:', stripeProductId);
      return;
    }
  
    // Store form data in localStorage
    localStorage.setItem('formData', JSON.stringify(formData));
  
    // Stripe payment process
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
        navigate('/failed');
      } else {
        // Clear localStorage upon success
        localStorage.removeItem('formData');
      }
    } catch (error) {
      console.error('Error initializing Stripe checkout:', error);
      navigate('/failed');
    }
  };
  

  return (
    <div className='mri-kundinfo'>
      <form onSubmit={handleSubmit}>
        <div>
          <h2 className="header-mri">Kundinformation</h2>
          <label>Tjänst:</label>
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
            className="input-field"
            type="text"
            name="personnummer"
            value={formData.personnummer}
            onChange={handleChange}
            required
            placeholder="ÅÅMMDD-XXXX"
            maxLength="11"
            onBlur={validatePersonnummer}
          />
          {errors.personnummer && <p className="error-text">{errors.personnummer}</p>}
        </div>
        <div>
          <label>Telefonnummer:</label>
          <input className='input-field' type="text" name="telefonnummer" value={formData.telefonnummer} onChange={handleChange} required placeholder="+46" maxLength="13" // +46 + 9 digits
 />
          {errors.telefonnummer && <p className="error-text">{errors.telefonnummer}</p>}
        </div>
        <div>
          <label>Meddelande:</label>
          <textarea className='input-field' name="message" value={formData.message} onChange={handleChange} required placeholder='Berätta om din problem' />
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
          {errors.pacemaker && <div className="error">{errors.pacemaker}</div>}
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
          {errors.policy && <div className="error">{errors.policy}</div>}
        </div>
        <div>
          <button className='submit-button' type="submit">Betala</button>
        </div>
      </form>
    </div>
  );
};

export default MRIForm;













