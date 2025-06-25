import React from "react";
import logo from "../../assets/logo/logo.png";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav
      className="navbar navbar-expand-lg py-3"
      style={{ background: "white"}}
    >
      <div className="container-fluid px-lg-5">
        {/* Logo */}
        <a className="navbar-brand d-flex align-items-center gap-2" href="#">
          <div className="logo-circle">
            <img src={logo} alt="" />
          </div>
        </a>

        {/* Toggle button for mobile */}
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

        {/* Collapsible content */}
        <div
          className="collapse navbar-collapse justify-content-between"
          id="navbarContent"
        >
          {/* Center links */}
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0 d-flex gap-lg-4 text-center">
            <li className="nav-item">
              <a className="nav-link" href="#">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                About
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Services
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Resume
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Portfolio
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Blog
              </a>
            </li>
          </ul>

          {/* Contact Us button */}
          <div className="d-flex justify-content-lg-end justify-content-center mt-2 mt-lg-0">
            <button
              type="button"
              className="btn custom-btn fw-bold fs-5 py-2 px-4"
              style={{ background: "#ff6b00", color: "white" }}
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
