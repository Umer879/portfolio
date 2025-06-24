import React from "react";
import logo from "../../assets/logo/logo.png";
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container-fluid myNavbar px-4" style={{ background: 'white', height: '20vh' }}>
        
        {/* Logo */}
        <a className="navbar-brand" href="#">
          <img src={logo} alt="Logo" />
        </a>

        {/* Toggler Button */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarContent"
          aria-controls="navbarContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Collapsible Content */}
        <div className="collapse navbar-collapse justify-content-between" id="navbarContent">
          
          {/* Centered Nav Links */}
          <ul className="navbar-nav custom-nav mx-auto mb-2 mb-lg-0 d-flex gap-lg-4 text-center">
            <li className="nav-item">
              <a className="nav-link" href="#">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">About</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Services</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Resume</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Portfolio</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Blog</a>
            </li>
          </ul>

          {/* Contact Us Button (Right) */}
          <div className="d-flex justify-content-lg-end justify-content-center">
            <button
              type="button"
              className="btn custom-btn fw-bold"
              style={{ background: "#ff6b00", color: 'white' }}
            >
              Contact Us
            </button>
          </div>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;
