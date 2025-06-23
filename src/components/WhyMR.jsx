import React, { useState } from "react";
import "../styles/ad-info.css"; // Ensure styles are properly defined
import { motion, AnimatePresence } from "framer-motion"; // For animations
import StepsIcons from "./StepsIcons";

const tjData = [
  {
    id: "Magnetröntgen (MR)",
    packageType: "Magnetröntgen (MR)",
    title: "Magnetkamera",    
    description: 
   "En magnetkamera skapar detaljerade bilder av organ i kroppen och används för att upptäcka sjukdomar, kartlägga skador och följa upp behandlingar. Vid undersökningen ligger du på en brits inne i en tunnel, och du kan kommunicera med en sjuksköterska under hela processen. Den tar mellan 20 och 45 minuter, och det är viktigt att du ligger stilla för att bilderna ska bli skarpa. Om du känner obehag kan du ta med en vän, och lugnande läkemedel kan erbjudas vid behov. Till skillnad från röntgen använder magnetkameran magnetfält och radiovågor för att skapa bilder. Personer med pacemaker eller annan elektronisk utrustning i kroppen bör inte genomgå undersökningen.",
   subtitle: "När används MR? ",
    features: ["Kartlägga nervsystemet", "Undersöka leder, muskler och skelett ", "Bedöma hjärta och blodkärl", "Granska bukorgan och bäcken", "Upptäcka och följa tumörer"],
  },

  {
    id: "Magnetröntgen med kontrast",
    packageType: "Magnetröntgen (MR) med kontrast",
    title: "Magnetröntgen med kontrast",
    description:
    "Magnetröntgen, eller magnetkamera (MR), är en undersökningsmetod som skapar detaljerade bilder av kroppens organ och vävnader med hjälp av magnetfält och radiovågor. I vissa fall används kontrastmedel för att förbättra bildkvaliteten och göra det lättare att upptäcka sjukdomar eller skador. Vid en MR-undersökning med kontrast får du först en vanlig magnetkameraundersökning. Därefter injiceras kontrastmedlet, oftast gadolinium, i en ven i armen. Efter injektionen tas fler bilder för att se hur kontrastmedlet fördelas i kroppen. Undersökningen tar vanligtvis 30–60 minuter. Det är viktigt att ligga stilla under bildtagningen för att få skarpa bilder. Under hela undersökningen kan du kommunicera med sjukvårdspersonalen.",
    subtitle: "Varför används kontrastmedel? ",
    features: ["Förbättra synligheten av blodkärl, inflammationer och tumörer.", "Skilja mellan olika typer av vävnader och sjukdomsförändringar.", "Bedöma blodflödet i kärl och eventuella förträngningar."],
  }

];

const WhyMR = () => {
  const [selectedPackage, setSelectedPackage] = useState(tjData[0].id);
  const selectedData = tjData.find((pkg) => pkg.id === selectedPackage);

  // Check if the selected package is contrast-related
  const isContrastPackage =
    selectedPackage === "Magnetröntgen med kontrast" || selectedPackage === "Datortomografi (DT) med kontrast";

  return (
    <div className="container-about-services">
      <div className="custom-row-all">
        {/* Sidebar - Buttons in Column */}
        <div className="package-nav">
          {tjData.map((pkg) => (
            <button
              key={pkg.id}
              className={`package-nav-btn ${selectedPackage === pkg.id ? "active" : ""}`}
              onClick={() => setSelectedPackage(pkg.id)}
            >
              {pkg.packageType}
            </button>
          ))}
        </div>

        {/* Description - Appears on Right (Big Screens) / Below (Small Screens) */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedData.id}
            className="package-info"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            <h2>{selectedData.title}</h2>
            <p>{selectedData.description}</p>

            {/* Show subtitle AFTER description */}
            {selectedData.subtitle && <h3 className="package-subtitle">{selectedData.subtitle}</h3>}

            {/* Features List */}
            {selectedData.features && selectedData.features.length > 0 && (
              <ul className="package-features">
                {selectedData.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            )}

            {/* Contrast Message */}
            <AnimatePresence>
              {isContrastPackage && (
                <motion.div
                  className="contrast-message"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.4 }}
                >
                  <p>
                    ⚠️ <strong>Viktig information om kontrastmedel:</strong> 
                    Vissa personer kan uppleva en mild reaktion på kontrastmedel, såsom värmekänsla eller en metallisk smak i munnen. 
                    Om du har allergier eller njurproblem, rådgör med din läkare innan undersökningen.
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </AnimatePresence>
      </div>
    
    </div>
  );
};

export default WhyMR;



