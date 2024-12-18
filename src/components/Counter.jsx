import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const Counter = ({ endNumber, duration = 2000 }) => {
  const [currentNumber, setCurrentNumber] = useState(0);

  // Function to increment the counter
  useEffect(() => {
    const increment = endNumber / (duration / 100);
    const interval = setInterval(() => {
      setCurrentNumber((prevNumber) => {
        if (prevNumber < endNumber) {
          return Math.min(prevNumber + increment, endNumber); // Avoid overshooting
        } else {
          clearInterval(interval);
          return endNumber;
        }
      });
    }, 100);

    return () => clearInterval(interval); // Clean up the interval on unmount or when counting stops
  }, [endNumber, duration]);

  return (
    <motion.div
    className="counter-container"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    whileInView={{ opacity: 1, transition: { duration: 0.5 } }}
    viewport={{ once: true }} // Trigger once when the element is in view
  >
    <h1 className="counter-number">
      {Math.floor(currentNumber)}<span className="percentage-sign">%</span>
    </h1>
    </motion.div>
  );
};

export default Counter;

