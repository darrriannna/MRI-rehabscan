// reducers/productReducer.js

import { loadState, saveState } from '../../utils/localStorage';

const initialState = loadState() || { products: [] };

const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_PRODUCT":
      const item = action.payload;
      const productIndex = state.products.findIndex(prod => prod.id === item.id);
      if (productIndex !== -1) {
        state.products[productIndex].qty += 1;
      } else {
        state.products.push({ ...item, qty: 1 });
      }
      saveState({ ...state });
      return { ...state };

    case "REMOVE_PRODUCT":
      const delItem = action.payload;
      const delProductIndex = state.products.findIndex(prod => prod.id === delItem.id);
      if (delProductIndex !== -1) {
        state.products[delProductIndex].qty -= 1;
        if (state.products[delProductIndex].qty === 0) {
          state.products.splice(delProductIndex, 1);
        }
      }
      saveState({ ...state });
      return { ...state };

    default:
      return state;
  }
};

export default productsReducer;




