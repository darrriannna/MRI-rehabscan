// ScrollToTop.js
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
    const { pathname } = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0); // Scroll to the top (x=0, y=0)
    }, [pathname]); // Trigger whenever the pathname changes

    return null;
};

export default ScrollToTop;
