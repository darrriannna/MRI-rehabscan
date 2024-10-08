import React from "react";
import { Footer, Navbar } from "../components";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import emailjs from 'emailjs-com';

const CheckoutMRI = () => {
  const navigate = useNavigate();
  const services = useSelector((state) => state.services.services); // Access services state slice

  const EmptyCart = () => {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-12 py-5 bg-light text-center">
            <h4 className="p-3 display-5">No item in Cart</h4>
            <Link to="/" className="btn btn-outline-dark mx-4">
              <i className="fa fa-arrow-left"></i> Continue Shopping
            </Link>
          </div>
        </div>
      </div>
    );
  };

  const handlePayment = (e) => {
    e.preventDefault();
    // Simulate payment process
    // Replace with actual payment logic

    // After successful payment, send email
    const templateParams = services.map(item => ({
      ...item.formData,
      service: item.formData.serviceTitle, // Ensure the correct service title is included
      policyConfirmed: item.formData.policyConfirmed ? 'Yes' : 'No',
      noPacemakerConfirmed: item.formData.noPacemakerConfirmed ? 'Yes' : 'No'
    }));

    emailjs.send('service_t43b9l3', 'new_template_id', templateParams[0], 'jpDNG96sg4J956g8G')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });

    // Redirect or show a success message
    alert('Payment successful and email sent!');
    navigate('/success'); // Redirect to a success page or another appropriate page
  };

  const ShowCheckout = () => {
    let subtotal = 0;
    let totalItems = 0;

    services.forEach((item) => {
      subtotal += item.price * item.qty;
      totalItems += item.qty;
    });

    return (
      <>
        <div className="container py-5">
          <h1>Din bokning</h1>
          <div className="row my-4">
            <div className="col-md-5 col-lg-4 order-md-last">
              <div className="card mb-4">
                <div className="card-header py-3 bg-light">
                  <h5 className="mb-0">Order Summary</h5>
                </div>
                <div className="card-body">
                  <ul className="list-group list-group-flush">
                    {services.map((service) => (
                      <li key={service.id} className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0">
                        <div>
                          <h6 className="my-0">{service.formData.serviceTitle}</h6>
                          <small className="text-muted">Quantity: {service.qty}</small>
                        </div>
                        <span className="text-muted">{service.price} kr</span> {/* Updated to display price in SEK */}
                      </li>
                    ))}
                    <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 mb-3">
                      <div>
                        <strong>Total amount</strong>
                      </div>
                      <span>
                        <strong>{subtotal} kr</strong> {/* Updated to display total in SEK */}
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-md-7 col-lg-8">
              <div className="card mb-4">
                <div className="card-header py-3">
                  <h4 className="mb-0">Dina uppgifter</h4>
                </div>
                <div className="card-body">
                  <form className="needs-validation" noValidate onSubmit={handlePayment}>
                    <div className="row g-3">
                      <div className="col-sm-6 my-1">
                        <label htmlFor="firstName" className="form-label">Förnamn</label>
                        <input type="text" className="form-control" id="firstName" placeholder="" required />
                        <div className="invalid-feedback">
                          Valid first name is required.
                        </div>
                      </div>
                      <div className="col-sm-6 my-1">
                        <label htmlFor="lastName" className="form-label">Efternamn</label>
                        <input type="text" className="form-control" id="lastName" placeholder="" required />
                        <div className="invalid-feedback">
                          Valid last name is required.
                        </div>
                      </div>
                      <div className="col-12 my-1">
                        <label htmlFor="email" className="form-label">Email <span className="text-muted">(Optional)</span></label>
                        <input type="email" className="form-control" id="email" placeholder="you@example.com" />
                        <div className="invalid-feedback">
                          Please enter a valid email address for shipping updates.
                        </div>
                      </div>
                      <div className="col-12 my-1">
                        <label htmlFor="address" className="form-label">Address</label>
                        <input type="text" className="form-control" id="address" placeholder="1234 Main St" required />
                        <div className="invalid-feedback">
                          Please enter your shipping address.
                        </div>
                      </div>
                    </div>
                    <hr className="my-4" />
                    <button className="w-100 btn btn-primary btn-lg" type="submit">Continue to checkout</button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  };

  return (
    <>
      <Navbar />
      <div className="container my-3 py-3">
        <h1 className="text-center">Checkout</h1>
        <hr />
        {services.length > 0 ? <ShowCheckout /> : <EmptyCart />}
      </div>
      <Footer />
    </>
  );
};

export default CheckoutMRI;
