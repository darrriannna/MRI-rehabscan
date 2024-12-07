import React from 'react';
import { DynamicForm, Footer, Navbar } from '../components';
import '../styles/bookform.css';

const BookTime = () => {
  return (
    <div className='main-book'>
      <div className='image-back'>
      <Navbar />
      <div className='form-wrapper'>
      <DynamicForm/></div>
      </div>
      <Footer/>
    </div>
  );
};

export default BookTime;
