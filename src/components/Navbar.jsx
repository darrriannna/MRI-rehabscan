import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/index.css';

const Navbar = () => {
    
    return (
        <>
            <nav className="navbar navbar-expand-lg p-2 sticky-top ">
                <div className="container">
                    <NavLink className="navbar-brand fw-bold fs-4 px-2" to="/"> 
                        <img className='logo-navbar' src={`${process.env.PUBLIC_URL}/assets/logo.png`} alt="Logo RehabScan"  />
                    </NavLink>
                    <img className='flag-navbar' src="../assets/swedish.png" alt="Sverige magnetröntgen utan remiss"  />
                    <button className="navbar-toggler mx-2" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav m-auto my-2 text-center">
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/">Hem</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/MRI">MR Prislista</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/about">Om oss</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink className="nav-link" to="/varfor-mr">Varför MR</NavLink>
                            </li>
                        </ul>
                        <div className="buttons text-center">
                            <NavLink to="/bookappointment" className="btn-navbar text-decoration-none"> Boka nu </NavLink>
                            
                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default Navbar;

