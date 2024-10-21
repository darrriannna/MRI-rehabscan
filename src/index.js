import React from 'react';
import ReactDOM from 'react-dom/client';
import '../node_modules/font-awesome/css/font-awesome.min.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../src/styles/index.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import { Home, AboutPage, ContactPage, Checkout, PageNotFound, BookTime, MRIbookTime, CheckoutMRI } from "./pages";
import MRI from './pages/MRI';
import { DynamicForm } from './components';
import Loader from './components/Loader';
import { LoaderProvider } from './context/loaderContext';  // Import the LoaderProvider

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Provider store={store}>
      <LoaderProvider>  {/* Wrap the app with LoaderProvider */}
      <Loader/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/MRI" element={<MRI />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/bookappointment" element={<BookTime />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/dynamic-form" element={<DynamicForm />} />
          <Route path="/mri-booking" element={<MRIbookTime />} />
          <Route path="/checkoutMRI" element={<CheckoutMRI />} />
          <Route path="*" element={<PageNotFound />} />
          <Route path="/product/*" element={<PageNotFound />} />
        </Routes>
      </LoaderProvider>
    </Provider>
  </BrowserRouter>
);
