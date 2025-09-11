import React from 'react';
import '../styles/index.css'; // Create a CSS file for styling
import DynamicForm from './DynamicForm';



const MainInfo = () => {
  return (
    <div className="unique-mri-container">
    <div className="unique-mri-content">
      <h2 className="unique-mri-title">
      Undvik köer och väntetider med  <span className="unique-highlight">privat magnetröntgen</span>
      </h2>
      
         <ul className="unique-mri-list">
                  <li >Få tid för magnetkameraundersökning inom 1-7 arbetsdagar.</li>
                  <li>Dina röntgenbilder kontrolleras av röntgenspecialister.</li>
                  <li>Vi skickar din remiss, därefter får du kallelse till undersökning</li>
                  <li>Möjlighet att diskutera dina röntgen svar med legitimerad personal.</li>
                  <li>Billigast i Sverige.</li>
                </ul>
              
      <DynamicForm/>
    </div>
    <div className="unique-mri-image-container">
      <img src="./assets/BodyMRI.png" alt="MRI Scan" className="unique-mri-image" />
    
    </div>
  </div>
  );
};

export default MainInfo;