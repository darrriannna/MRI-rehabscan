import React from 'react'
import { Footer, Navbar } from "../components";
const AboutPage = () => {
  return (
    <>
      <Navbar />
      <div className="container my-3 py-3">
        <h1 className="text-center">Om oss</h1>
        <hr />
        <p className="lead text-center">
       NO naprapat&ortopedklinik är en liten klinik med stor drivkraft.

     Vi värnar om att just du ska känna dig sedd och omhändertagen med ditt besvär. Vi tar oss tid för att lyssna, ställa frågor och undersöka dig för att hitta rätt behandlingsplan. Behandlingen kan innebära att vi hjälper dig med manuell behandling, råd och information samt rehabträning.
     Det kan även innebära att vi hänvisar dig till rätt vårdinstans.
        </p>
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
      <Footer />
    </>
  )
}

export default AboutPage