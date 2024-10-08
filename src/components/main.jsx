import React from 'react';
import '../styles/index.css'; // Import your custom CSS file

const Home = () => {
  return (
    <div className="main">
      <div className="container">
        <div className="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src="./assets/joyful-woman-dancing-blue-background.jpg" className="carousel-image" alt="..."/>
              <div className="carousel-caption">
                <h2 className="logo_pic">NO Kliniken</h2>
                <p className="carousel-text">Högsta kvalitet på sjukvård</p>
              </div>
            </div>
            <div className="carousel-item">
              <img src="./assets/front-view-osteopathic-therapist-checking-female-patient-s-shoulder-movement.jpg" className="carousel-image" alt="..."/>
              <div className="carousel-caption">
                <h2>Get help of highly professional doctors.</h2>
              </div>
            </div>
            <div className="carousel-item">
              <img src="./assets/closeup-medical-technician-starting-mri-scan-examination-patient-hospital.jpg" className="carousel-image" alt="..."/>
              <div className="carousel-caption">
                <h2>Get your MRI appointment without waiting for months</h2>
              </div>
            </div>
          </div>
          <button className="carousel-control-prev" type="button" aria-label="Previous">
           <span className="carousel-control-prev-icon"></span>
         </button>
        <button className="carousel-control-next" type="button" aria-label="Next">
        <span className="carousel-control-next-icon"></span>
       </button>
        </div>
      </div>

      <div className="container">
        <div className="row">
          <div className="col">
            <div className="card">
              <img src="./assets/senior-couple-talking-with-their-doctor-while-he-is-showing-them-something-computer.jpg" className="card-img" alt="..."/>
              <div className="card-body">
                <h5 className="card-title">Get the appointment with a doctor now</h5>
                <p className="card-text">
                  På NO Kliniken träffar du ett team med naprapater och ortoped. Vårt omhändertagande av dig återskapar kroppens goda rörelse och funktion. Vi har ett etablerat kontaktnät
                   av andra experter som anlitas när så behövs. Förutom behandlingar ger vi dig även individuella råd och rekommendationer. 
                  Dessa kan handla om hållning, ergonomi, motion eller mer specifika rehabövningar. Detta gör resultatet än bättre och minimerar risken för återfall.
                </p>
                <a href="pages/book-form.html" className="btn">Book</a>
              </div>
            </div>
          </div>
          <div className="col">
            <p className="title">NOVA - healthcare at its finest</p>
            <p className="description">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam blanditiis molestiae enim dolor in odio sint provident eius, culpa magnam fugit nemo minus, eaque consectetur? Accusantium quis excepturi qui aspernatur.
            </p>
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">MRI</h5>
                <h6 className="card-subtitle">Get your MR results within hours</h6>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="#" className="card-link">Read More</a>
                <a href="pages/book-form.html" className="card-link">Book Time</a>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <p className="about-title">Om <a className="link" href="#">NO Kliniken</a></p>
          <p className="about-text">
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-check-circle" viewBox="0 0 16 16">
              <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
              <path d="m10.97 4.97-.02.022-3.473 4.425-2.093-2.094a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05"/>
            </svg>
            Vår vision är att leverera rätt och snabb behandling med professionell, hög och bred kompetens under samma tak med patientens hela hälsa i fokus för att förbättra och bibehålla god livskvalitet.
          </p>
          <p className="about-text">
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-check-circle" viewBox="0 0 16 16">
              <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
              <path d="m10.97 4.97-.02.022-3.473 4.425-2.093-2.094a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05"/>
            </svg>
            Vi har ett helhetstänk genom vår bedömning, behandling och uppföljning och vi vill alltid tillsammans med patienten diskutera vad som kan göras i vardagen så att besvären inte återvänder.
          </p>   
          <p className="about-text">
            <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" className="bi bi-check-circle" viewBox="0 0 16 16">
              <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16"/>
              <path d="m10.97 4.97-.02.022-3.473 4.425-2.093-2.094a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-1.071-1.05"/>
            </svg>
            Genom att kombinera välfungerande och beprövade behandlingsmetoder med en helhetssyn kan vi optimera vår bedömning och behandling.
          </p> 
        </div>
      </div>
    </div>
  );
};

// Function to handle carousel sliding
const slide = (direction) => {
  const items = document.querySelectorAll('.carousel-item');
  const activeItem = document.querySelector('.carousel-item.active');
  let index = Array.from(items).indexOf(activeItem);
  items[index].classList.remove('active');
  index = (index + direction + items.length) % items.length;
  items[index].classList.add('active');
};

export default Home;



