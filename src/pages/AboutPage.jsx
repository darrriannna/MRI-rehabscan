import React from 'react'
import { Footer, Navbar } from "../components";
import "../styles/index.css";

const AboutPage = () => {
  return (
    <>
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
        <div className='rules-container'>
      <h3 className='center-text'>Hur funkar det?</h3>
     <div class="container-card">
        <div class="box box1"><h4>Steg 1</h4>
        <p>Fyll i en bokningsförfrågan. En läkare ringer upp och bekräftar din bokning. Ingen remiss krävs.</p></div>
        <div class="box box2">
          <h4>Steg 2</h4>
          <p>En läkare ringer upp och bekräftar din bokning och diskuterar dina önskemål.</p>
        </div>
        <div class="box box3">
          <h4>Steg 3</h4>
          <p>Du erbjuds undersökning inom 5 arbetsdagar. Kallelse skickas via Kivra eller per post.</p>
        </div>
        <div class="box box4">
          <h4>Steg 4</h4>
          <p>Personlig återkoppling med läkare inom 5 arbetsdagar efter utförd undersökning.</p>
        </div>
        <div/>
    </div>
      </div>
      </div>
      <Footer />
    </>
  )
}

export default AboutPage