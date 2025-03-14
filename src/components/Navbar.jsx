import React, { useState, useEffect, useCallback } from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/index.css';

const Navbar = () => {
    const [isVisible, setIsVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);
    const [isNavbarOpen, setIsNavbarOpen] = useState(false);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false); // Track dropdown state

    const handleScroll = useCallback(() => {
        const currentScrollY = window.scrollY;
        setIsVisible(currentScrollY <= lastScrollY || currentScrollY <= 100);
        setLastScrollY(currentScrollY);
    }, [lastScrollY]);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [handleScroll]);

    const handleToggle = () => setIsNavbarOpen(!isNavbarOpen);
    const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);

    return (
        <nav className={`navbar navbar-expand-lg p-2 sticky-top ${isVisible ? 'navbar-visible' : 'navbar-hidden'}`}>
            <div className="container">
                <NavLink className="navbar-brand fw-bold fs-4 px-2" to="/"> 
                    <img className="logo-navbar" src={`${process.env.PUBLIC_URL}/assets/logo.png`} alt="Logo RehabScan" />
                </NavLink>
                <img className="flag-navbar" src={`${process.env.PUBLIC_URL}/assets/swedish.png`} alt="Sverige magnetröntgen utan remiss" />
                
                <button className="navbar-toggler mx-2" type="button" onClick={handleToggle}
                    aria-controls="navbarSupportedContent" aria-expanded={isNavbarOpen ? "true" : "false"} 
                    aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className={`collapse navbar-collapse ${isNavbarOpen ? 'show' : ''}`} id="navbarSupportedContent">
                    <ul className="navbar-nav m-auto my-2 text-center">
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/">Hem</NavLink>
                        </li>

                        {/* Dropdown Menu for Pricelist */}
                        <li className="nav-item dropdown">
                            <NavLink className="nav-link dropdown-toggle-nav" to="#" id="pricelistDropdown" role="button"
                                onClick={toggleDropdown} aria-expanded={isDropdownOpen ? "true" : "false"}>
                             Prislista <span style={{ marginLeft: "5px" }}>▾</span>
                            </NavLink>
                            <ul className={`dropdown-menu ${isDropdownOpen ? 'show' : ''}`} aria-labelledby="pricelistDropdown">
                                <li><NavLink className="dropdown-item" to="/prislistaMR">MR (MRI)</NavLink></li>
                                <li><NavLink className="dropdown-item" to="/prislista-kontrast">MR med kontrast</NavLink></li>
                                <li><NavLink className="dropdown-item" to="/prislistaCT">CT/DT</NavLink></li>
                                <li><NavLink className="dropdown-item" to="/prislistaCT-kontrast">CT/DT med kontrast</NavLink></li>
</ul>
                        </li>

                        <li className="nav-item">
                            <NavLink className="nav-link" to="/om-oss">Om oss</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/vara-tjanster">Våra tjänster</NavLink>
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




