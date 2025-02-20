import React, { forwardRef } from "react";
import "../styles/ad-info.css"; // Import the CSS file

const MRFullBodyScan = forwardRef((props, ref)  => {
  const scanData = [
    {
      title: "MR Hjärna, ögonhålor, bihålor",
      items: [
        "Infarkt eller blödning i hjärnan (stroke)",
        "Tumör",
        "Multipel skleros (MS)",
        "Tecken på atrofi-demenssjukdom",
        "MR Angiografi (kärl i hjärnan)",
        "Aneurysm (utbuktning) eller missbildning i hjärnans kärl",
        "Förändringar i ögonhålor och bihålor",
      ],
    },
    {
      title: "MR Hals",
      items: [
        "Tumör",
        "Förstorade lymfkörtlar",
        "Sköldkörteln",
        "Spottkörtlar",
        "Larynx-strupen",
        "Vid tydliga symtom rekommenderas MR-Hals",
      ],
    },
    {
      title: "MR Lungor",
      items: [
        "Översikt av lungor, lungsäck",
        "Förstorade lymfkörtlar",
        "Inflammation, tumör, förändringar",
        "Aortaneurysm – Aderbråck",
        "Om du haft stroke, cancer eller lungproblem rekommenderas datortomografi",
      ],
    },
    {
      title: "MR-Buk - lever, gallblåsa, njurar, lymfkörtlar",
      items: [
        "Tumör i bukens organ",
        "Inflammation i bukens organ (t.ex. hepatit, pankreatit)",
        "Leverförfettning och andra leverförändringar",
        "Hinder i gallgångar och njurar",
        "Aortaneurysm – Aderbråck",
        "Förstorade lymfkörtlar (inflammation, infektion, tumör)",
      ],
    },
    {
      title: "MR Lilla bäcken - prostata, äggstockar",
      items: [
        "Urinblåsa",
        "Prostata – förstoring, inflammation och tumör",
        "PSA-prov (enligt Socialstyrelsens riktlinjer)",
        "Livmoder och äggstockar",
        "Muskelknutor (myom), tumör, endometrios, cystor",
        "Lymfkörtlar",
        "Skelett – bäcken, höftleder, muskelfästen",
        "Tarmfickor i tjocktarmen (divertiklar)",
      ],
    },
    {
      title: "MR Skelett – hals, bröst- och ländrygg, höfter",
      items: [
        "Tumör",
        "Metastas",
        "Diskbråck",
        "Spinal stenos",
        "Inflammation",
        "Artros",
        "Kotkompression",
      ],
    },
  ];

  return (
    <div ref={ref} className="mr-scan-container">
      <h2 className="mr-scan-title">Vad ingår i MR-Helkropp?</h2>
      <p className="mr-scan-subtitle">
        Vi utför scanning av följande kroppsdelar och organ:
      </p>
      <div className="mr-scan-grid">
        {scanData.map((section, index) => (
          <div key={index} className="mr-scan-category">
            <h3 className="mr-scan-category-title">{section.title}</h3>
            <ul className="mr-scan-list">
              {section.items.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
     
    </div>
  );
});

export default MRFullBodyScan;
