import React, { useRef } from "react";
import logo from "../../assets/logo/logo.webp";
import { NavLink } from "react-router-dom";
import './Navbar.css'
const Navbar = () => {
  const collapseRef = useRef(null);

  // Smooth collapse on link click
  const closeNavbar = () => {
    const collapseElement = collapseRef.current;
    if (collapseElement.classList.contains("show")) {
      collapseElement.classList.remove("show");
      collapseElement.style.height = 0;
    }
  };

  return (
    <nav className="navbar navbar-expand-lg py-3" style={{ background: "white" }}>
      <div className="container-fluid px-lg-5">
        {/* Logo */}
        <NavLink to="/" className="navbar-brand d-flex align-items-center gap-2">
          <div className="logo-circle">
            <img src={logo} alt="Logo" />
          </div>
        </NavLink>

        {/* Toggle Button */}
        <button
          className="navbar-toggler border-0"
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
          className="collapse navbar-collapse transition-collapse"
          id="navbarContent"
          ref={collapseRef}
        >
          {/* Center links */}
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0 d-flex gap-lg-4 text-center">
            {[
              { to: "/", label: "Home" },
              { to: "/about", label: "About" },
              { to: "/service", label: "Services" },
              { to: "/resume", label: "Resume" },
              { to: "/portfolio", label: "Portfolio" },
              { to: "/blog", label: "Blog" },
            ].map(({ to, label }) => (
              <li className="nav-item" key={to}>
                <NavLink
                  to={to}
                  className="nav-link"
                  onClick={closeNavbar}
                >
                  {label}
                </NavLink>
              </li>
            ))}
          </ul>

          {/* Contact Us button */}
          <div className="d-flex justify-content-lg-end justify-content-center mt-2 mt-lg-0">
            <NavLink to="/contact" onClick={closeNavbar}>
              <button
                type="button"
                className="btn custom-btn fw-bold fs-5 py-2 px-4"
                style={{ background: "#ff6b00", color: "white" }}
              >
                Contact Us
              </button>
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
