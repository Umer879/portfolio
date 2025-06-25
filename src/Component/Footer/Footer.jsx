import React from "react";
import logo from "../../assets/logo/logoWhite.png";
const Footer = () => {
  return (
    <div
      className="container-fluid footer"
      style={{backgroundColor: "#101010", color: "white", minHeight: '100vh'}}>
      <div className="row d-flex justify-content-between rowPadding row-gap-5"
        style={{ padding: "100px 80px" }}>
        <div className="col-lg-3 col-12 col-sm-6">
          <div className="logo mb-4">
            <img src={logo} alt="" />
          </div>
          <p className="mb-4" style={{ lineHeight: "1.8" }}>
            At vero eos et accusamus et iusto odio dign ducimus qui blanditiis
            praesentium volup deleniti atque corrupti quos dolores et molestias
            excepturi sint occaecati
          </p>
          <h4>credesign@gmail.com</h4>
        </div>
        <div className="col-lg-2 col-6">
          <h4>Explore Link</h4>
          <ul className="navbar-nav custom-nav mx-auto mb-2 mb-lg-0 d-flex gap-2">
            <li className="nav-item">
              <a className="nav-link" href="#">
                About
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
        </div>
        <div className="col-lg-2 col-6">
          <h4>My Services</h4>
          <ul className="navbar-nav custom-nav mx-auto mb-2 mb-lg-0 d-flex gap-2">
            <li className="nav-item">
              <a className="nav-link" href="#">
                UI/UX Design
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Mobile App
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Graphic Design
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Web Developer
              </a>
            </li>
          </ul>
        </div>
        <div className="col-lg-3 col-12 col-sm-6">
          <h4>Follow me</h4>
          <div className="accounts d-flex gap-4 mt-5">
            <div className="box facebook">
              <i class="fa-brands fa-facebook-f"></i>
            </div>
            <div className="box twitter">
              <i class="fa-brands fa-twitter"></i>
            </div>
            <div className="box dribble">
              <i class="fa-solid fa-basketball"></i>
            </div>
            <div className="box enhance">
              <i class="fa-brands fa-behance"></i>
            </div>
          </div>
          <div className="location">
            <div className="mt-5 mb-3" style={{ fontSize: "14px" }}>
              <i class="fa-solid fa-location-dot"></i>{" "}
              <span className="ms-1">202 Dog Hill Lane Beloit,KS 67420</span>{" "}
            </div>
            <div className="phone" style={{ fontSize: "14px" }}>
              <i class="fa-solid fa-phone-volume"></i>
              <a
                href="1-800-915-6270"
                className="text-decoration-none text-light ms-2"
              >
                1-800-915-6270
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="line">
        <hr />
      </div>
      <div className="policy">
        <div className="row d-flex row-gap-4 text-center">
          <div className="col-sm-6 col-12">All rights reserved © 2023 Credesign</div>
          <div className="col-sm-3 col-6">
            <div className="terms">Terms & Condition</div>
          </div>
          <div className="col-sm-3 col-6">
            <div className="terms">Privacy Policy</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
