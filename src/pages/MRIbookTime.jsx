import React from 'react';
import { useLocation } from 'react-router-dom';
import MRIForm from '../components/MRIForm';
import { Footer, Navbar } from '../components';
import '../styles/bookform.css';
import services from '../pages/ServicesData'; // Adjust path if needed
import { Helmet } from "react-helmet";
const MRIbookTime = () => {
  const location = useLocation();
  const serviceId = location.state?.serviceId;

  console.log('Received serviceId:', serviceId); // Debugging line

  // Find the service title based on the serviceId
  const service = services.find(service => service.id === serviceId);
  const serviceTitle = service ? service.title : 'Default Service'; // Provide a fallback title

  console.log('Resolved serviceTitle:', serviceTitle); // Debugging line

  return (
    <>
    <Helmet>
    <script async src="https://www.googletagmanager.com/gtag/js?id=AW-16866588289"></script>
        <script>
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-16866588289');
          `}
        </script>
    </Helmet>
    <div className='body-form'>
      <Navbar />
      <MRIForm serviceTitle={serviceTitle} />
      <Footer />
    </div></>
  );
};

export default MRIbookTime;





