import React, { useEffect, useState } from 'react';


const Banner = () => {
    const messages = [
        "MR utan remiss",
        "7-12 dagar väntetid på MR",
        "Billigast i Sverige",
        "Leveranstid på produkter 1-3 dagar",
    ];

    const [currentMessageIndex, setCurrentMessageIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentMessageIndex((prevIndex) => (prevIndex + 1) % messages.length);
        }, 3000); // Change message every 3 seconds

        return () => clearInterval(interval);
    }, [messages.length]);

    return (
        <div className="banner ">
            <p className="banner-text">{messages[currentMessageIndex]}</p>
        </div>
    );
};

export default Banner;
