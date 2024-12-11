import React from "react";
import "../styles/ad-info.css"; // Import the CSS file

const WhyMR = () => {
  return (
    <div className="container-varfor">
      <div className="content-varfor">
        <h1 className="title-varfor">Varför Magnetröntgen</h1>
        <p className="description-varfor">
          Magnetröntgen, mer korrekt kallad magnetresonanstomografi (MRT eller
          MRI på engelska), används för att skapa detaljerade bilder av
          kroppens inre strukturer. Det är en viktig undersökning för att
          diagnostisera, bedöma och följa upp olika sjukdomar och skador. Här är
          några anledningar till varför magnetröntgen kan behövas:
        </p>
        <h2 className="subheader-varfor">Diagnostik av sjukdomar och skador</h2>
        <div className='grid-deceaces'>
          <div className='list-item-varfor'>
            <h4>Hjärna och ryggmärg</h4>
            <p>Upptäcka tumörer, stroke, inflammation, multipel skleros eller skador efter trauma.</p>
          </div>
          <div className='list-item-varfor'>
            <h4>Rygg</h4>
            <p>Tumör, diskbråck, förträngningar av nerver i ryggraden / spinalstenos, traumatiska skador, MS.</p>
          </div>
          <div className='list-item-varfor'>
            <h4>Buk</h4>
            <p>Tumörer i bl.a. njurar, gallblåsa, lever, bukspottkörtel, binjurar.</p>
          </div>
          <div className='list-item-varfor'>
            <h4>Gynorgan</h4>
            <p>Tumörer i bl.a livmoder, äggstockar. Tecken till endometrios.</p>
          </div>
          <div className='list-item-varfor'>
            <h4>Leder och muskler</h4>
            <p>Identifiera skador på ligament, brosk, muskler och senor, samt artrit.</p>
          </div>
          <div className='list-item-varfor'>
            <h4>Hjärta och blodkärl</h4>
            <p>Bedöma hjärtsjukdomar, blodflöde och aneurysmer.</p>
          </div>
          <div className='list-item-varfor'>
            <h4>Cancer</h4>
            <p>Identifiera tumörer eller metastaser och bedöma deras utbredning.</p>
          </div>
        </div>
      </div>
      <img
        className="image-varfor"
        src="./assets/Mri-why.png" // Replace with your image link
        alt="MRI Illustration"
      />
      
    </div>
  );
};

export default WhyMR;
