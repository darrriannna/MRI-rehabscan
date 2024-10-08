// serviceAction.js

export const addService = (service) => ({
    type: 'ADD_SERVICE',
    payload: service
  });
  
  export const removeService = (serviceId) => ({
    type: 'REMOVE_SERVICE',
    payload: serviceId
  });
  
  // Save and load functions for local storage
  export const saveCartToLocalStorage = (cart) => {
    localStorage.setItem('cart', JSON.stringify(cart));
  };
  
  export const loadCartFromLocalStorage = () => {
    const savedCart = localStorage.getItem('cart');
    return savedCart ? JSON.parse(savedCart) : [];
  };
  
  