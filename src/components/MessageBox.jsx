import React, { useState, useEffect } from "react";
import "../styles/ad-info.css"; // Add styling here

const Message = () => {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
      // Check if the message has been dismissed
      const isDismissed = localStorage.getItem("klarnaNoticeDismissed");
      if (!isDismissed) {
        setVisible(true);
      }
    }, []);
  
    const handleClose = () => {
      setVisible(false);
      localStorage.setItem("klarnaNoticeDismissed", "true"); // Remember user's choice
    };
  
    if (!visible) return null; // Hide if dismissed
  
    return (
      <div className="klarna-notice">
        {/* Klarna logo */}
        <img 
          src="./assets/klarna.png" 
          alt="Klarna Logo" 
          className="klarna-logo" 
        />
        {/* Message */}
        <p className="klarna-message">Om du inte kan betala med Klarna via mobilen, vänligen boka via en dator.</p>
        {/* Exit Button */}
        <button onClick={handleClose} className="close-btn">×</button> {/* New exit sign */}
      </div>
    );
  };



export default Message;
