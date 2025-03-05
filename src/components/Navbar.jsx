import React, { useState, useEffect, useCallback } from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/index.css';


const Navbar = () => {
    const [isVisible, setIsVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);
    const [isNavbarOpen, setIsNavbarOpen] = useState(false); // Track navbar collapse state

    // Memoized scroll handler to avoid unnecessary re-renders
    const handleScroll = useCallback(() => {
        const currentScrollY = window.scrollY;

        if (currentScrollY > lastScrollY && currentScrollY > 100) {
            // Scrolling down: hide the navbar
            setIsVisible(false);
        } else {
            // Scrolling up: show the navbar
            setIsVisible(true);
        }

        setLastScrollY(currentScrollY);
    }, [lastScrollY]);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [handleScroll]);

    const handleToggle = () => {
        setIsNavbarOpen(!isNavbarOpen); // Toggle the navbar state
    };

    return (
        <nav
            className={`navbar navbar-expand-lg p-2 sticky-top ${
                isVisible ? 'navbar-visible' : 'navbar-hidden'
            }`}
        >
            <div className="container">
                <NavLink className="navbar-brand fw-bold fs-4 px-2" to="/"> 
                    <img
                        className="logo-navbar"
                        src={`${process.env.PUBLIC_URL}/assets/logo.png`}
                        alt="Logo RehabScan"
                    />
                </NavLink>
                <img
                    className="flag-navbar"
                    src={`${process.env.PUBLIC_URL}/assets/swedish.png`}
                    alt="Sverige magnetröntgen utan remiss"
                />
                <button
                    className="navbar-toggler mx-2"
                    type="button"
                    onClick={handleToggle} // Handle the toggle state change
                    aria-controls="navbarSupportedContent"
                    aria-expanded={isNavbarOpen ? "true" : "false"} // Reflect the current state
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className={`collapse navbar-collapse ${isNavbarOpen ? 'show' : ''}`} id="navbarSupportedContent">
                    <ul className="navbar-nav m-auto my-2 text-center">
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/">Hem</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/prislista">MR Prislista</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/om-oss">Om oss</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/varfor-mr">Varför MR</NavLink>
                        </li>
                    </ul>
                    <div className="buttons text-center navbar-extra">
                       
                        <NavLink to="/bokanu" className="btn-navbar text-decoration-none">
                            Boka nu
                        </NavLink>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;



