import React from 'react';
import { DynamicForm, Footer, Navbar } from '../components';
import '../styles/bookform.css';

const BookTime = () => {
  return (
    <div className='main-book'>
      <Navbar />
      <DynamicForm/>
      <Footer/>
    </div>
  );
};

export default BookTime;
