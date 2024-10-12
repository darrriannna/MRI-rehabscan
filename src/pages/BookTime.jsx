import React from 'react';
import { Footer, Navbar } from '../components';
import '../styles/bookform.css';

const BookTime = () => {
  return (
    <div>
      <Navbar />
      <div className="book-time-container">
        <h2 className="book-time-text">Boka tid</h2>
        </div>
      <Footer/>
    </div>
  );
};

export default BookTime;
