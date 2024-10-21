import React from 'react';
import '../styles/index.css';  // Your styles
import { useLoader } from '../context/loaderContext';  // Import the loader context

const Loader = () => {
  const { loading } = useLoader();  // Get the loading state from context

  if (!loading) return null;  // If not loading, don't show the loader

  return (
    <div className='loder-container'>

      <img src="./assets/Loader-img.png" alt="loader" className="loader-img" />
      <div className="scanning-line"></div>  {/* Scanning Line */}
    </div>
    
  );
};

export default Loader;

