import React, { useState } from 'react';
import '../styles/index.css';
const Steps = () => {
    const [hoveredStep, setHoveredStep] = useState(null);

    return (
        <div className='text-center big-steps'>
            <h2>Hur funkar det?</h2>
            <p>Få dina MR-resultat i 3 steg</p>
            <div className="main-container-steps">
                <div 
                    className='card-steps step-1'
                    onMouseEnter={() => setHoveredStep(1)}
                    onMouseLeave={() => setHoveredStep(null)}
                >
                    <h3><span className='step-number'>1</span></h3>
                    {hoveredStep === 1 && (
                        <p className='step-text'>
                        Fyll i en bokningsförfrågan. 
                        </p>
                    )}
                </div>
                <div 
                    className='card-steps step-2'
                    onMouseEnter={() => setHoveredStep(2)}
                    onMouseLeave={() => setHoveredStep(null)}
                >
                    <h3><span className='step-number'>2</span></h3>
                    {hoveredStep === 2 && (
                        <p className='step-text'>
                           Garanterad undersökning inom 14 arbetsdagar.
                        </p>
                    )}
                </div>
                <div 
                    className='card-steps step-3'
                    onMouseEnter={() => setHoveredStep(3)}
                    onMouseLeave={() => setHoveredStep(null)}
                >
                    <h3><span className='step-number'>3</span></h3>
                    {hoveredStep === 3 && (
                        <p className='step-text'>
                           Fa dina resultat
                        </p>
                    )}
                </div>
               
            </div>
        </div>
    );
};

export default Steps;


