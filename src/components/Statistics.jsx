import React from "react";
import Counter from "./Counter";
import "../styles/ad-info.css"; // Ensure styles are properly defined
import DynamicForm from "./DynamicForm";

const Statistics = () => {
  return (
    <div className="statistics-container">
      <div className="content-wrapper">
        {/* Left Section - Dynamic Form and Text */}
        <div className="left-section">
          <DynamicForm />
          <h3>Tidig upptäckt – bästa behandling</h3>
          <p>
            Bästa behandling vid allvarlig sjukdom som cancer och hjärt-kärlsjukdom är idag tidig upptäckt, vilket kan förhindra utveckling till något allvarligt.
            Genom att göra en MR-Helkropp undersökning så ökar dina chanser att upptäcka eventuella sjukdomar i god tid och där förhoppningsvis prognosen för en god behandling fortfarande är god.
          </p>
        </div>

        {/* Right Section - Statistics Cards */}
        <div className="right-section">
          <div className="statistics-section">
            <div className="stat-card">
              <img
                className="stat-image"
                src="./assets/Heart-atack.png"
                alt="Heart and Stroke"
              />
              <div className="stat-content">
                <Counter endNumber={35} duration={2000} />
                <p className="statistics-text">
                  Hjärtinfarkt och stroke står idag för <strong>35%</strong> av alla dödsfall i Sverige.
                </p>
              </div>
            </div>
          </div>

          <div className="statistics-section">
            <div className="stat-card">
              <img
                className="stat-image"
                src="./assets/Cancer.png"
                alt="Cancer Statistics"
              />
              <div className="stat-content">
                <Counter endNumber={26} duration={2000} />
                <p className="statistics-text">
                  Cancer står idag för <strong>26%</strong> av alla dödsfall i Sverige.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Statistics;



