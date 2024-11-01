import React from 'react'
import { Link } from 'react-router-dom';
import { Footer, Navbar, Steps } from "../components";
import "../styles/index.css";

const AboutPage = () => {
  return (
    <>
    <div className='body '>
      <Navbar />
      <div className="container-about-us">
        <h2 className="text-center py-4">Om Rehabscan</h2>

        <div className="row">

        <div class="container-home">
    <div class="left-column">
      <img src="./assets/About-pic.png" alt="MRI 3d" />
    </div>
    <div class="right-column">
    <p className='text-about p-4'>RehabScan är en digital hälsoklinik som erbjuder radiologiska undersökningar för att ge dig en bättre inblick i din hälsa.</p>
    <p className='p-4'>Med RehabScan kan du känna dig trygg i att få den vård och uppmärksamhet du behöver – allt från bekvämligheten av ditt eget hem. Vi sätter alltid din hälsa i första rummet och strävar efter att ge dig den bästa möjliga upplevelsen, oavsett ditt behov.
    Välkommen till RehabScan, en hälsoklinik i framkant som sätter dig och din hälsa i fokus!</p>
    </div>
  </div>
        </div>
       <Steps/>
       <div className='btn-center'>
            <Link to="/bookappointment" className="btn-navbar m-3 text-decoration-none">Boka undersökning</Link>
          </div>
      </div>
      <Footer /></div>
    </>
  )
}

export default AboutPage