import React from "react";
import "../styles/index.css";
import { Footer, Navbar } from "../components";

const Restrictions = () => {
  return (
    <div className="body">
    <Navbar/>
    <div className="integrity-policy">
      <div className="container-policy">
        <h3 className="title">Förberedelser</h3>
        <p className="intro">
        Du kan inte undersökas i magnetkamera om du har metallsplitter i någon del av kroppen, pacemaker, insulinpump eller annan elektronisk utrustning inopererad. Däremot går det att genomföra undersökningen om du har icke magnetisk metall, som till exempel höft- eller knäledsprotes eller tandfyllning.
        </p>
        <section>
          <h5>Uppföljning</h5>
          <p>
          Efter att du har genomgått din undersökning granskas dina röntgenbilder av en röntgenspecialist, därefter får du ditt röntgen svar via post.
          Uteblivet besök eller avbokning senare än 24 timmar innan inbokad tid debiteras fullt och återbetalas ej. 
          </p>
          <h5>Ångerrätt och transktionavgift</h5>
          <p>Vid utnyttjande av ångerrätt återbetalas hela beloppet med avdrag för bankens transaktionsavgift. En avgift på 3,5 % av det totala beloppet dras för att täcka kostnader för hantering av betalningen.</p>
        </section>
        <section>
          <h5>Innebär det någon risk att undersökas med magnetkamera(MR)?</h5>
          <p>
          Nej, magnetkamera-undersökning är helt ofarlig och ger ingen strålning till skillnad mot datortomografi (DT) och traditionell röntgen. MR-teknik innebär att man tar bilder med hjälp av magnetfält och radiovågor utan någon röntgenstrålning, vilket gör att den är helt ofarlig. Därför kan man undersöka sig med MR flera gånger utan någon som helst risk för strålskador.
          </p>
         
        </section>
        <section>
          <h5>Hur bokas min undersökning in efter beställning?</h5>
          <p>
          Efter att du har gjort din beställning kommer vi att kontakta kliniken och dom bokar sedan in dig vid första tillgängliga undersökning. Om du har frågor vänligen kontakta oss på info@rehabscan.se, Även att ringa oss går bra på 010-201 22 31. Uteblivet besök eller avbokning senare än 24 timmar innan inbokad tid debiteras fullt och återbetalas ej.
          </p>
         
        </section>
        <section>
          <h5>Vem har tillgång till mina resultat?</h5>
          <p>
          Vi följer samma lagar och regler gällande sekretess som vårdcentraler och sjukhus. Vi lyder under patientdatalagen, hälso- och sjukvårdslagen och står under tillsyn av Inspektionen för vård och omsorg (IVO). Det innebär att all data och alla undersökningsresultat hanteras i enlighet med dessa lagar och förordningar.
          </p>
         
        </section>
      </div>
    </div>
    <Footer/>
    </div>
  );
};

export default Restrictions;