import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import emailjs from 'emailjs-com';
import '../styles/bookform.css';

// Stripe initialization

const MRIForm = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const { serviceName, city, price, paymentLink } = location.state || {};

  const [formData, setFormData] = useState({
    name: '',
    lastname: '',
    email: '',
    personnummer: '',
    telefonnummer: '',
    message: '',
    adress: '',
    postcity: '',
    postnum: '',
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
    else if (!paymentLink) {
      // If paymentLink isn't passed, redirect the user to a fallback or error page
      navigate('/failed');
    }
  }, [paymentLink, navigate]);
  useEffect(() => {
    const handleBeforeUnload = () => {
      localStorage.removeItem("formData");
    };
  
    // Clear localStorage if the user navigates back
    const handlePopstate = () => {
      localStorage.removeItem("formData");
    };
  
    window.addEventListener("popstate", handlePopstate);
    window.addEventListener("beforeunload", handleBeforeUnload);
  
    return () => {
      window.removeEventListener("popstate", handlePopstate);
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, []);
  
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    
    let updatedFormData = { ...formData };
  
    if (name === "telefonnummer") {
      // Allow only digits, spaces, dashes, parentheses, and optional +
      let formattedValue = value.replace(/[^\d\s\-()+]/g, "");
      updatedFormData[name] = formattedValue;
    } else if (name === "personnummer") {
      let formattedValue = value.replace(/\D/g, "");
      if (formattedValue.length > 6) {
        formattedValue = formattedValue.slice(0, 6) + "-" + formattedValue.slice(6, 10);
      }
      updatedFormData[name] = formattedValue;
    } else {
      updatedFormData[name] = type === "checkbox" ? checked : value;
    }
  
    setFormData(updatedFormData);
    localStorage.setItem("formData", JSON.stringify(updatedFormData));
  };
  
  const validateTelefonnummer = (isFinalCheck = false) => {
    const { telefonnummer } = formData;
    console.log("Validating:", telefonnummer);
  
    // Accepts any digits, spaces, dashes, or parentheses
    const generalPhoneRegex = /^[\d\s\-()]+$/;
  
    const isValid = generalPhoneRegex.test(telefonnummer) && telefonnummer.replace(/\D/g, '').length >= 7;
  
    if (isFinalCheck && !isValid) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        telefonnummer: "Ange ett giltigt telefonnummer (minst 7 siffror).",
      }));
      return false;
    }
  
    // Clear error if it's valid or while typing
    setErrors((prevErrors) => ({
      ...prevErrors,
      telefonnummer: null,
    }));
  
    return true;
  };
  
  
  
  
  const validatePersonnummer = () => {
    const { personnummer } = formData;
    const swedishRegex = /^\d{2}(0[1-9]|1[0-2])(0[1-9]|[12][0-9]|3[01])-\d{4}$/; // ÅÅMMDD-XXXX
    const danishRegex = /^(0[1-9]|[12][0-9]|3[01])(0[1-9]|1[0-2])\d{2}-\d{4}$/; // DDMMYY-XXXX
  
    let isValidFormat = swedishRegex.test(personnummer) || danishRegex.test(personnummer);
    if (!isValidFormat) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        personnummer: "Personnummer måste följa formatet ÅÅMMDD-XXXX (SE) eller DDMMÅÅ-XXXX (DK).",
      }));
      return false;
    }
  
    // Extract components based on format
    let day, month, year;
    if (swedishRegex.test(personnummer)) {
      year = parseInt(personnummer.slice(0, 2), 10);
      month = parseInt(personnummer.slice(2, 4), 10);
      day = parseInt(personnummer.slice(4, 6), 10);
    } else if (danishRegex.test(personnummer)) {
      day = parseInt(personnummer.slice(0, 2), 10);
      month = parseInt(personnummer.slice(2, 4), 10);
      year = parseInt(personnummer.slice(4, 6), 10);
    }
  
    // Determine the full year (handling centuries)
    const currentYear = new Date().getFullYear() % 100;
    const fullYear = year <= currentYear ? 2000 + year : 1900 + year;
  
    // Validate Date
    const isValidDate = (y, m, d) => {
      const date = new Date(`${y}-${String(m).padStart(2, "0")}-${String(d).padStart(2, "0")}`);
      return date.getFullYear() === y && date.getMonth() + 1 === m && date.getDate() === d;
    };
  
    if (!isValidDate(fullYear, month, day)) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        personnummer: "Invalid date in Personnummer.",
      }));
      return false;
    }
  
    // Clear error if validation passes
    setErrors((prevErrors) => ({ ...prevErrors, personnummer: null }));
    return true;
  };
  
  const validateSwedishAddress = () => {
    const { adress, postcity, postnum } = formData;
  
    let isValid = true;
    const newErrors = {};
  
    // Validate Adress (allows letters, numbers, commas, periods, and hyphens)
    if (!adress || !/^[a-zA-ZæøåÆØÅäöÄÖ0-9 ,.-]+$/.test(adress)) {
      newErrors.adress = 'Adress får endast innehålla bokstäver, siffror, mellanslag och tillåtna tecken (, . -).';
      isValid = false;
    }
  
    // Validate Postort (City) (allows letters and spaces, including Swedish letters)
    if (!postcity || !/^[a-zA-ZæøåÆØÅäöÄÖ ]+$/.test(postcity)) {
      newErrors.postcity = 'Postort får endast innehålla bokstäver och mellanslag.';
      isValid = false;
    }
  
    // Validate Postnummer (Postal Code) (matches both "12345" or "123 45" format)
    if (!postnum || !/^(\d{4}|\d{5}|\d{3}\s?\d{2}|\d{6})$/.test(postnum)) {
      newErrors.postnum = 'Postnummer måste vara 4, 5 eller 6 siffror långt. Mellanslag är tillåtet mellan tredje och fjärde siffran.';
      isValid = false;
    }
  
    // Update errors if any
    setErrors((prevErrors) => ({ ...prevErrors, ...newErrors }));
  
    return isValid;
  };

  // Handle submit (trigger all validations here)
  const handleSubmit = async (e) => {
    e.preventDefault();
  
    let hasError = false;
  
    // Validate required fields before proceeding
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
  
    if (!validatePersonnummer()) {
      hasError = true;
    }
    if (!validateTelefonnummer()) {
      hasError = true;
    }
    if (!validateSwedishAddress()) {
      hasError = true;
    }
  
    if (hasError) return;
  
    // Store form data in localStorage
    localStorage.setItem('formData', JSON.stringify(formData));
  
    // Prepare data for EmailJS
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
        localStorage.removeItem('formData');
        // Redirect to payment link after email is sent
        window.location.href = paymentLink;
      })
      .catch((error) => {
        console.error('Error sending email:', error);
        alert('Något gick fel vid e-postskickning. Försök igen.');
      });
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
          <label>Personnummer: (SE/DK)</label>
          <input
            className="input-field"
            type="text"
            name="personnummer"
            value={formData.personnummer}
            onChange={handleChange}
            required
            maxLength="11"
          />
          {errors.personnummer && <p className="error-text">{errors.personnummer}</p>}
        </div>
        <div>
          <label>Telefonnummer:</label>
          <input className='input-field' type="text" name="telefonnummer" value={formData.telefonnummer} onChange={handleChange} required  maxLength="13" />
          {errors.telefonnummer && <p className="error-text">{errors.telefonnummer}</p>}
        </div>
        <div>
          <label>Adress:</label>
          <input className='input-field' type="text" name="adress" value={formData.adress} onChange={handleChange} required />
          {errors.adress && <p className="error-text">{errors.adress}</p>}
        </div>
        <div>
          <label>Postort:</label>
          <input className='input-field' type="text" name="postcity" value={formData.postcity} onChange={handleChange} required />
          {errors.postcity && <p className="error-text">{errors.postcity}</p>}
        </div>
        <div>
          <label>Postnummer:</label>
          <input className='input-field' type="text" name="postnum" value={formData.postnum} onChange={handleChange} required />
          {errors.postnum && <p className="error-text">{errors.postnum}</p>}
        </div>
        <div>
          <label>Meddelande:</label>
          <textarea className='input-field' name="message" value={formData.message} onChange={handleChange} required placeholder='Berätta om dina besvär här' />
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















