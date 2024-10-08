// reducers/serviceReducer.js

import { loadState, saveState } from '../../utils/localStorage';

const initialState = loadState() || { services: [] };

const servicesReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_SERVICE":
      const item = action.payload;
      const serviceIndex = state.services.findIndex(serv => serv.id === item.id);
      if (serviceIndex !== -1) {
        state.services[serviceIndex].qty += 1;
      } else {
        state.services.push({ ...item, qty: 1 });
      }
      saveState({ ...state });
      return { ...state };

    case "REMOVE_SERVICE":
      const delItem = action.payload;
      const delServiceIndex = state.services.findIndex(serv => serv.id === delItem.id);
      if (delServiceIndex !== -1) {
        state.services[delServiceIndex].qty -= 1;
        if (state.services[delServiceIndex].qty === 0) {
          state.services.splice(delServiceIndex, 1);
        }
      }
      saveState({ ...state });
      return { ...state };

    default:
      return state;
  }
};

export default servicesReducer;

  