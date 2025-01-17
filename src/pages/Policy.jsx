import React from "react";
import "../styles/index.css";
import { Footer, Navbar } from "../components";

const IntegrityPolicy = () => {
  return (
    <div className="body">
    <Navbar/>
    <div className="integrity-policy">
      <div className="container-policy">
        <h3 className="title">Integritetspolicy</h3>
        <p className="intro">
          RehabScan, (”RehabScan”, ”vi”, ”vår”, eller
          ”oss”) är ett företag etablerat i Sverige, och som sådant, följer vi
          tillämplig dataskyddslagstiftning i Sverige. Genom att använda
          RehabScans tjänster, accepterar du denna dataskyddspolicy och vår
          behandling av dina personuppgifter.
        </p>
        <section>
          <h5>1. Personuppgiftsansvar</h5>
          <p>
            I vår integritetspolicy förklarar vi vilka typer av personuppgifter
            vi kan komma att behandla och i vilket syfte. Vi redogör även för
            vår behandling av personuppgifter och vilka val du har i relation
            till den.
          </p>
        </section>
        <section>
          <h5>2. Personuppgifter som behandlas</h5>
          <p>
            Vi behandlar följande personuppgifter som du registrerar via ditt
            användarkonto:
          </p>
          <ul>
            <li>Namn, personnummer, telefonnummer, adress och e-postadress.</li>
            <li>
              Tekniska data (IP-adress, enhetstyp, operativsystem, cookies).
            </li>
            <li>
              Hälsodata (resultat av undersökningar, läkares kommentarer,
              journaldata).
            </li>
          </ul>
        </section>
        <section>
          <h5>3. Syfte med behandlingen</h5>
          <p>RehabScan behandlar personuppgifter för att:</p>
          <ul>
            <li>Hantera köp av tjänster och skapa remisser.</li>
            <li>Erbjuda kundservice och tillgängliggöra journalhandlingar.</li>
            <li>
              Utveckla prediktionsmodeller för riskbedömning av framtida
              åkommor.
            </li>
            <li>Fullgöra rättsliga skyldigheter och säkerställa IT-säkerhet.</li>
          </ul>
        </section>
        <section>
          <h5>4. Mottagare av personuppgifter</h5>
          <p>
            RehabScan delar personuppgifter med följande kategorier av
            mottagare:
          </p>
          <ul>
            <li>
              Kliniker, vårdcentraler och laboratorier för undersökningar och
              analyser.
            </li>
            <li>
              Myndigheter när det krävs enligt lag (t.ex. journaldata enligt
              Patientdatalagen).
            </li>
          </ul>
        </section>
        <section>
          <h5>5. Bevarande av personuppgifter</h5>
          <p>
            Uppgifter sparas under avtalets giltighetstid och en tid därefter
            enligt lagkrav. Hälsodata journalförs enligt Patientdatalagen i minst
            10 år.
          </p>
        </section>
        <section>
          <h5>6. Gallring av personuppgifter</h5>
          <p>
            När uppgifterna inte längre behövs för sitt ändamål raderas eller
            anonymiseras de. Efter gallring kan ingen längre associeras med
            uppgifterna.
          </p>
        </section>
        <section>
          <h5>7. IT-säkerhet</h5>
          <p>
            Vi vidtar tekniska och organisatoriska åtgärder för att skydda
            personuppgifter mot obehörig åtkomst, förlust eller missbruk.
          </p>
        </section>
        <section>
          <h5>8. Dina rättigheter</h5>
          <p>Du har rätt att:</p>
          <ul>
            <li>Återkalla ditt samtycke till behandling av personuppgifter.</li>
            <li>Begära rättelse eller radering av felaktiga eller onödiga data.</li>
            <li>
              Få tillgång till dina personuppgifter och information om hur de
              behandlas.
            </li>
            <li>Invända mot behandling för berättigade intressen.</li>
            <li>Lämna klagomål till Datainspektionen.</li>
          </ul>
        </section>
        <p className="conclusion">
          Vi är förpliktade att skydda dina personuppgifter och följa
          gällande dataskyddslagstiftning. Kontakta oss om du har frågor eller
          vill utöva dina rättigheter.
        </p>
      </div>
    </div>
    <Footer/>
    </div>
  );
};

export default IntegrityPolicy;
