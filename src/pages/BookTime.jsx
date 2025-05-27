import React from 'react';
import { DynamicForm, Footer, Navbar, StepsIcons } from '../components';
import '../styles/bookform.css';

const BookTime = () => {
  return (
    <div className='main-book'>
      
      <Navbar />
      <div className='form-wrapper'>
      <DynamicForm/></div>
      <div className='message-after'>
      <div className='grid-deceases'>
          <div className='containers-deceases-info' >
          <h4 className='text-center-info'>Efter att du har bokat skickar vi din remiss till den närmaste kliniken eller den klinik du har valt. Kliniken kontaktar dig inom ett par dagar för att hitta en tid som passar dig bäst.</h4>
         
          <h4 className='text-center-info fs-italic'> Uteblivet besök eller avbokning senare än 24 timmar innan inbokad tid debiteras fullt och återbetalas ej.  </h4>
        </div></div></div>
        
      <StepsIcons/>
      <Footer/>
    </div>
  );
};

export default BookTime;
