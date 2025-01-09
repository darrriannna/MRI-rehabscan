import React, {  useState } from 'react';
import '../styles/index.css'; // Import your custom CSS file
import { Link } from 'react-router-dom';

  // Import loader context


const FindUs = () => {
  

  return (
        <div className='container-home'>
          <div className='left-column'> 
          <h3>Hitta oss över hela Sverige!</h3>

            </div>

          <div className='right-column'>
            <img className='image-homepage' src="./assets/Map.png" alt="MR utan remiss, billigast i Sverige" />
          </div>
        </div>
        
  );
};

export default FindUs;
