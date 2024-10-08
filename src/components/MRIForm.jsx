import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addService } from '../redux/action/serviceAction';
import '../styles/bookform.css';

const MRIForm = ({ serviceTitle }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    personnummer: '',
    message: '',
    policyConfirmed: false,
    noPacemakerConfirmed: false,
    serviceTitle: serviceTitle || 'Default Service'
  });

  useEffect(() => {
    setFormData(prevData => ({ ...prevData, serviceTitle }));
  }, [serviceTitle]);

  const [error, setError] = useState('');
  const [pacemakerError, setPacemakerError] = useState('');

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  const handleSubmit = (e) => {
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

    if (hasError) {
      return;
    }

    const mriService = {
      id: new Date().getTime(), // Unique identifier
      title: formData.serviceTitle,
      price: 100, // Set price or get from service data
      qty: 1,
      type: 'service',
      formData
    };

    dispatch(addService(mriService));
    navigate('/checkoutMRI');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <h2 className='header-mri'>Kundinformation</h2>
        <p className='text-form-mri'>
          Vi använder ditt personnummer för hanteringen av undersökningsinformation och för att hitta din folkbokföringsadress dit vi skickar kallelse och undersökningsresultat.
          Väljer du fakturabetalning skickas din faktura efter ditt besök.
        </p>
        <label>Service:</label>
        <input type="text" name="serviceTitle" value={formData.serviceTitle} readOnly />
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
        <label>Personnummer <span>ÅÅÅÅMMDDXXXX</span></label>
        <input type="text" name="personnummer" value={formData.personnummer} onChange={handleChange} required />
      </div>
      <div>
        <label>Medellande:</label>
        <textarea name="message" value={formData.message} onChange={handleChange} required />
      </div>
      <div>
        <label>
          <input type="checkbox" name="noPacemakerConfirmed" checked={formData.noPacemakerConfirmed} onChange={handleChange} />
          <span className='text-form-mri'>Jag har ingen pacemaker.</span>
        </label>
        {pacemakerError && <div className="error">{pacemakerError}</div>}
      </div>
      <div>
        <label>
          <input type="checkbox" name="policyConfirmed" checked={formData.policyConfirmed} onChange={handleChange} required />
          <span className='text-form-mri'>Jag har tagit del av RehabScan integritetspolicy och godkänner villkoren för hur mina personuppgifter lagras samt försäkrar att jag läst köpvillkoren.</span>
        </label>
        {error && <div className="error">{error}</div>}
      </div>
      <div>
        <button type="submit">Skicka</button>
      </div>
    </form>
  );
};

export default MRIForm;




