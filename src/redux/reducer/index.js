import { combineReducers } from 'redux';
import productsReducer from './productReducer';
import servicesReducer from './serviceReducer';

const rootReducer = combineReducers({
  products: productsReducer,
  services: servicesReducer
});

export default rootReducer;

