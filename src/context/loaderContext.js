import React, { createContext, useState, useContext } from 'react';

// Create LoaderContext
const LoaderContext = createContext();

// Custom hook to use LoaderContext
export const useLoader = () => useContext(LoaderContext);

// Create a provider component
export const LoaderProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);  // State to control the loader

  // Function to show loader
  const showLoader = () => setLoading(true);

  // Function to hide loader
  const hideLoader = () => setLoading(false);

  return (
    <LoaderContext.Provider value={{ loading, showLoader, hideLoader }}>
      {children}
    </LoaderContext.Provider>
  );
};
