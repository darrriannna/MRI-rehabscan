import React from 'react';
import ReactDOM from 'react-dom/client';
import '../node_modules/font-awesome/css/font-awesome.min.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../src/styles/index.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import { Home, AboutPage, ContactPage, Checkout, PageNotFound, BookTime, MRIbookTime, CheckoutMRI } from "./pages"
import MRI from './pages/MRI';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Provider store={store}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/MRI" element={<MRI />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/bookappointment" element={<BookTime />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/mri-booking" element={<MRIbookTime />} />
        <Route path="/checkoutMRI" element={<CheckoutMRI />} />
        <Route path="*" element={<PageNotFound />} />
        <Route path="/product/*" element={<PageNotFound />} />
      </Routes>
    </Provider>
  </BrowserRouter>
);