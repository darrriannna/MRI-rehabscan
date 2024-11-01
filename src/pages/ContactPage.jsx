import React from "react";
import { Footer, Navbar } from "../components";
const ContactPage = () => {
  return (
    <>
    <div className="body">
      <Navbar />
      <div className="container my-3 py-3">
        <h1 className="text-center">Kontakta oss</h1>
        <hr />
        
        <div class="row my-4 h-100">
          
          <div className="col-md-4 col-lg-4 col-sm-8 mx-auto">
            <form>
              <div class="form my-3">
                <label for="Name">Namn</label>
                <input
                  type="email"
                  class="form-control"
                  id="Name"
                  placeholder="Enter your name"
                />
              </div>
              <div class="form my-3">
                <label for="Email">Email</label>
                <input
                  type="email"
                  class="form-control"
                  id="Email"
                  placeholder="name@example.com"
                />
              </div>
              <div class="form  my-3">
                <label for="Password">Meddelande</label>
                <textarea
                  rows={5}
                  class="form-control"
                  id="Password"
                  placeholder="Enter your message"
                />
              </div>
              <div className="small-text">Genom att trycka på skicka godkänner du vår integritetspolicy. Vi svarar enbart på frågor som vi har kunskap om och som är relaterade till de undersökningar vi erbjuder.</div>
              <div className="text-center">
                
                <button
                  class="btn-navbar"
                  type="submit"
                  disabled
                >
                  Skicka
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <Footer /></div>
    </>
  );
};

export default ContactPage;
