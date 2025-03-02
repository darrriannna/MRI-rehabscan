import React, { useState, useEffect, useCallback } from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/index.css';
import TranslateWidget from './TranslateWidget';

const Navbar = () => {
    const [isVisible, setIsVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);

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
                    data-toggle="collapse"
                    data-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
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
                        {/* Google Translate Widget */}
                        <TranslateWidget />
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

