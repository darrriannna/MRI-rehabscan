import { Helmet } from "react-helmet";
import { useEffect } from "react";
import "../styles/ad-info.css"; // import the css file

export default function SuccessPage() {
  // Fire Google Ads conversion once when this page mounts
  useEffect(() => {
    if (window.gtag) {
        window.gtag("event", "conversion", {
            send_to: "AW-16866588289/9n_UCK6k1ucaEIHtzuo-", // your conversion ID + label
          });
    }
  }, []);

  return (
    <>
      <Helmet>
        <title>Tack för ditt köp</title>
        <meta name="description" content="Betalning genomförd - Tack för ditt köp!" />
      </Helmet>

      <div className="success-container">
        <div className="success-card">
          <div className="success-icon">✔</div>
          <h1 className="success-title">Tack för att du valde oss!</h1>
          <p className="success-message">
          Din betalning lyckades, och vi kommer att skicka ett bekräftelsemail med detaljer.
          </p>
          <a href="/" className="success-button">Tillbaka till startsidan</a>
        </div>
      </div>
    </>
  );
}

