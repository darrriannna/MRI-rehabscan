import React from 'react';
import ReactDOM from 'react-dom/client';
import '../node_modules/font-awesome/css/font-awesome.min.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../src/styles/index.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import { Home, AboutPage,  PageNotFound, BookTime, MRIbookTime, ServicesPage, VarforMR, Restrictions } from "./pages";
import MRI from './pages/MRI';
import { DynamicForm, Success, Failed } from './components';
import ScrollToTop from './components/ScrollToTop';
import Loader from './components/Loader';
import IntegrityPolicy from "./pages/Policy";
import { LoaderProvider } from './context/loaderContext';  // Import the LoaderProvider

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter> 
  <ScrollToTop />
    <Provider store={store}>
      <LoaderProvider>  {/* Wrap the app with LoaderProvider */}
      <Loader/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/MRI" element={<MRI />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/bookappointment" element={<BookTime />} />
          <Route path="/dynamic-form" element={<DynamicForm />} />
          <Route path="/mri-booking" element={<MRIbookTime />} />
          <Route path="/service-page" element={<ServicesPage />} />
          <Route path="*" element={<PageNotFound />} />
          <Route path="/success" element={<Success />} />
          <Route path="/varfor-mr" element={<VarforMR />} />
          <Route path="/failed" element={<Failed />} />
          <Route path="/integrity-policy" element={<IntegrityPolicy />} />
          <Route path="/" element={<Failed />} />
          <Route path="/restrictions" element={<Restrictions />} />
          <Route path="/product/*" element={<PageNotFound />} />
        </Routes>
      </LoaderProvider>
    </Provider>
  </BrowserRouter>
);
