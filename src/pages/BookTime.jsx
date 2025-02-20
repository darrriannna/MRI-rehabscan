import React from 'react';
import { DynamicForm, Footer, Navbar, StepsIcons } from '../components';
import '../styles/bookform.css';

const BookTime = () => {
  return (
    <div className='main-book'>
      
      <Navbar />
      <div className='form-wrapper'>
      <DynamicForm/></div>
      <StepsIcons/>
      <Footer/>
    </div>
  );
};

export default BookTime;
