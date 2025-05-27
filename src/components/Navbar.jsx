import React, { useState, useEffect, useCallback, useRef } from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/index.css';

const Navbar = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const dropdownRef = useRef(null);

  const handleScroll = useCallback(() => {
    const currentScrollY = window.scrollY;
    setIsVisible(currentScrollY <= lastScrollY || currentScrollY <= 100);
    setLastScrollY(currentScrollY);
  }, [lastScrollY]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  // Close dropdown if clicking outside of dropdown area
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };

    if (isDropdownOpen) {
      document.addEventListener('click', handleClickOutside);
    }

    return () => document.removeEventListener('click', handleClickOutside);
  }, [isDropdownOpen]);

  const handleToggle = () => setIsNavbarOpen((prev) => !prev);



  const closeMenus = () => {
    setIsNavbarOpen(false);
    setIsDropdownOpen(false);
  };

  return (
    <header className={`main-header ${isVisible ? '' : 'navbar-hidden'}`}>
      <div className="top-strip"></div>

      <nav className="navbar-container">
        <div className="navbar-inner">
          <NavLink to="/" className="navbar-logo" onClick={closeMenus}>
            <img src={`${process.env.PUBLIC_URL}/assets/new-logo.svg`} alt="Logo" />
          </NavLink>

          {/* Hamburger Toggle */}
          <button
            className={`menu-toggle ${isNavbarOpen ? 'open' : ''}`}
            onClick={handleToggle}
            aria-label="Toggle menu"
            aria-expanded={isNavbarOpen}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>

          {/* Nav Items */}
          <ul className={`navbar-menu ${isNavbarOpen ? 'show' : ''}`}>
            <li>
              <NavLink className="nav-link" to="/" onClick={closeMenus}>
                Hem
              </NavLink>
            </li>

            <li className="dropdown" >
                    <NavLink className="nav-link" to="/prislistaMR" onClick={closeMenus}>
                     Prislista MR
                    </NavLink>
                  
            </li>

            <li>
              <NavLink className="nav-link" to="/om-oss" onClick={closeMenus}>
                Om oss
              </NavLink>
            </li>
            <li>
              <NavLink className="nav-link" to="/vara-tjanster" onClick={closeMenus}>
                Våra tjänster
              </NavLink>
            </li>

            {/* Mobile Button Placement */}
            <li className="mobile-book">
              <NavLink to="/bokanu" className="btn-book" onClick={closeMenus}>
                BOKA NU
              </NavLink>
            </li>
          </ul>

          {/* Desktop Button Placement */}
          <NavLink to="/bokanu" className="btn-book desktop-book" onClick={closeMenus}>
            BOKA NU
          </NavLink>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;






