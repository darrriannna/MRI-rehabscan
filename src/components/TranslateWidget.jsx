import React, { useEffect } from "react";
import "../styles/index.css"; // Make sure to add your styles here!

const TranslateWidget = () => {
  useEffect(() => {
    // Check if script already exists
    if (!document.querySelector("script[src*='translate.google.com']")) {
      const script = document.createElement("script");
      script.src = "https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
      script.async = true;
      script.onload = () => {
        console.log("Google Translate script loaded successfully");
      };
      script.onerror = (error) => {
        console.error("Google Translate script failed to load:", error);
      };
      document.body.appendChild(script);
    }

    // Define the init function globally
    window.googleTranslateElementInit = () => {
      try {
        new window.google.translate.TranslateElement(
          { pageLanguage: "sv", includedLanguages: "en,da,sv", autoDisplay: false },
          "google_translate_element"
        );
      } catch (error) {
        console.error("Error initializing Google Translate:", error);
      }
    };

    // Ensure Translate is initialized
    const checkTranslate = setInterval(() => {
      if (window.google && window.google.translate) {
        clearInterval(checkTranslate); // Stop checking
        window.googleTranslateElementInit(); // Initialize Translate
      }
    }, 500);

    return () => clearInterval(checkTranslate); // Cleanup on unmount
  }, []);

  return (
    <div className="translate-container">
      <div id="google_translate_element" style={{ display: "block" }}></div>
    </div>
  );
};

export default TranslateWidget;




