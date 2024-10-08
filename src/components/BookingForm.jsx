import React, { useState, useEffect } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import emailjs from 'emailjs-com';
import '../styles/bookform.css';

const BookingForm = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [selectedTime, setSelectedTime] = useState('');
  const [selectedDoctor, setSelectedDoctor] = useState('');
  const [selectedService, setSelectedService] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''  // Message is not required, but still part of the formData
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Define doctors and their available slots and services
  const doctors = {
    'Dr. Kodra': {
      availableTimes: {
        '2024-08-02': ["9:00", "9:30", "10:00", "10:30", "13:00"],
        '2024-08-04': ["11:00 AM", "2:00 PM", "4:00 PM"],
        '2024-08-05': ["9:00 AM", "12:00 PM", "2:00 PM", "5:00 PM"],
      },
      services: [
        { name: 'Naprapatbehandling', price: '500 SEK', duration: '30min' },
        { name: 'Fri förebyggande behandling och rehabilitering', price: '600 SEK', duration: '45min' }
      ]
    },
    'Dr. Johnson': {
      availableTimes: {
        '2024-08-02': ["8:00 AM", "11:00 AM", "1:00 PM", "4:00 PM"],
        '2024-08-03': ["10:00 AM", "1:00 PM", "3:00 PM", "5:00 PM"],
        '2024-08-05': ["9:30 AM", "11:30 AM", "2:30 PM", "4:30 PM"],
      },
      services: [
        { name: 'Therapy Session', price: '700 SEK', duration: '1t' },
        { name: 'Initial Consultation', price: '400 SEK', duration: '30min' }
      ]
    },
  };

  // Retrieve booked slots from local storage or initialize an empty object
  const getBookedSlotsFromLocalStorage = () => {
    const storedSlots = localStorage.getItem('bookedSlots');
    return storedSlots ? JSON.parse(storedSlots) : {};
  };

  const [bookedSlots, setBookedSlots] = useState(getBookedSlotsFromLocalStorage);
  const [availableTimes, setAvailableTimes] = useState([]);
  const [availableServices, setAvailableServices] = useState([]);

  useEffect(() => {
    if (selectedDoctor) {
      setAvailableServices(doctors[selectedDoctor].services);
      const selectedDate = startDate.toISOString().split('T')[0];
      const bookedTimesForDate = bookedSlots[selectedDate] || [];
      const timesForSelectedDate = doctors[selectedDoctor].availableTimes[selectedDate] || [];
      const filteredTimes = timesForSelectedDate.filter(time => !bookedTimesForDate.includes(time));
      setAvailableTimes(filteredTimes);
    } else {
      setAvailableServices([]);
      setAvailableTimes([]);
    }
  }, [startDate, bookedSlots, selectedDoctor]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleDoctorChange = (e) => {
    setSelectedDoctor(e.target.value);
    setSelectedService(''); // Reset selected service when doctor changes
    setSelectedTime(''); // Reset selected time when doctor changes
  };

  const handleServiceSelection = (service) => {
    setSelectedService(service);
  };

  const handleTimeSelection = (time) => {
    setSelectedTime(time);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const templateParams = {
      ...formData,
      date: startDate.toLocaleDateString(),
      time: selectedTime,
      doctor: selectedDoctor,
      service: selectedService
    };

    emailjs.send('service_t43b9l3', 'template_nhom3d2', templateParams, 'jpDNG96sg4J956g8G')
      .then((result) => {
        console.log("Email successfully sent! Response:", result.text);
        setIsSubmitted(true);

        // Update booked slots and persist to local storage
        const selectedDate = startDate.toISOString().split('T')[0];
        const updatedBookedSlots = {
          ...bookedSlots,
          [selectedDate]: [...(bookedSlots[selectedDate] || []), selectedTime]
        };
        setBookedSlots(updatedBookedSlots);
        localStorage.setItem('bookedSlots', JSON.stringify(updatedBookedSlots));
      }, (error) => {
        console.error("Failed to send email. Error:", error.text);
      });

    // Reset form
    setFormData({ name: '', email: '', phone: '', message: '' });
    setStartDate(new Date());
    setSelectedTime('');
    setSelectedDoctor('');
    setSelectedService('');
  };

  return (
    <div className='booking-form'>
      {isSubmitted ? (
        <div className="confirmation-message">
          Thank you! Your booking has been confirmed.
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <div>
            <label>Namn:</label>
            <input type="text" name="name" value={formData.name} onChange={handleChange} required />
          </div>
          <div>
            <label>Email:</label>
            <input type="email" name="email" value={formData.email} onChange={handleChange} required />
          </div>
          <div>
            <label>Telefonnummer:</label>
            <input type="tel" name="phone" value={formData.phone} onChange={handleChange} required />
          </div>
          <div>
            <label>Terapeuter:</label>
            <select name="doctor" value={selectedDoctor} onChange={handleDoctorChange} required>
              <option value="">Select a doctor</option>
              {Object.keys(doctors).map((doctor, index) => (
                <option key={index} value={doctor}>{doctor}</option>
              ))}
            </select>
          </div>
          <div>
            <label>Behandlingar:</label>
            <div className="service-buttons">
              {availableServices.map((service, index) => (
                <button
                  key={index}
                  type="button"
                  className={`service-button ${selectedService === service.name ? 'selected' : ''}`}
                  onClick={() => handleServiceSelection(service.name)}
                >
                  <div>{service.name}</div>
                  <div className="service-details">
                    <div>{service.price}</div>
                    <div>{service.duration}</div>
                  </div>
                </button>
              ))}
            </div>
          </div>
          <div>
            <label>Dag:</label>
            <DatePicker selected={startDate} onChange={date => setStartDate(date)} required />
          </div>
          <div>
            <label>Tid:</label>
            <div className="time-buttons">
              {availableTimes.map((timeSlot, index) => (
                <button
                  key={index}
                  type="button"
                  className={`time-button ${selectedTime === timeSlot ? 'selected' : ''}`}
                  onClick={() => handleTimeSelection(timeSlot)}
                  disabled={bookedSlots[startDate.toISOString().split('T')[0]]?.includes(timeSlot)}
                >
                  {timeSlot}
                </button>
              ))}
            </div>
          </div>
          <div>
            <label>Meddelande: </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="4"
              cols="50"
              placeholder="Describe your problem..."
            ></textarea>
          </div>
          <div>
            <button type="submit">Submit</button>
          </div>
        </form>
      )}
    </div>
  );
};

export default BookingForm;
