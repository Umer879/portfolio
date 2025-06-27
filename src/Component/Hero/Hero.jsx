import React, { useEffect, useRef } from "react";
import Typed from "typed.js";
import dotImg from "../../assets/particle/orangeDot.webp";
import bannerImg from "../../assets/heroImg/bannerImg.avif";
import aboutImg from "../../assets/heroImg/about.avif";
import icon1 from "../../assets/aboutIcon/aboutIconOne.webp";
import icon2 from "../../assets/aboutIcon/aboutIconTwo.webp";
import "./Hero.css";

const Hero = () => {
  const typedRef = useRef(null);

  useEffect(() => {
    const typed = new Typed(typedRef.current, {
      strings: ["Design", "Solutions"],
      typeSpeed: 70,
      backSpeed: 50,
      backDelay: 1000,
      loop: true,
    });
    return () => typed.destroy();
  }, []);

  return (
    <section className="container-fluid hero">
      <section
        className="row d-flex align-items-center"
        style={{ backgroundColor: "#fff3ea" }}
      >
        <div className="col-lg-5 col-12 order-1 order-lg-2 heroImgCol">
          <div className="heroImg">
            <img
              src={bannerImg}
              alt="Hero Image"
              className="w-100 h-100 object-cover"
              loading="lazy"
              width="600"
              height="400"
            />
          </div>
        </div>

        <div className="col-lg-7 col-12 order-2 order-lg-1 heroTextCol">
          <div className="icon-design d-flex gap-3">
            <div className="iconImg">
              <img src={dotImg} alt="orangeDot" width={20} />
            </div>
            <p>I AM DESIGNER</p>
          </div>

          <div className="details">
            <h1 className="fw-bold" style={{ fontSize: "3.5rem" }}>
              <div>Creative Design</div>
              <div>
                and Web <span ref={typedRef} style={{ color: "#ff6b00" }}></span>
              </div>
            </h1>
            <p className="mt-4 mb-5 lh-base fs-6" style={{ color: "#606060" }}>
              Nam libero tempore, cum soluta nobis est eligendi optio cumque
              nihil impedit quo minus id quod maxime placeat facere possimus,
              omnis voluptas assumenda est, omnis dolor repellendus. Temporibus
              autem quibusdam et.
            </p>
          </div>

          <button
            type="button"
            className="btn custom-btn fw-bold fs-5 py-2 px-4"
            style={{ background: "#ff6b00", color: "white" }}
          >
            Download My CV
          </button>
        </div>
      </section>

      <section className="row d-flex align-items-center justify-content-end hero2" style={{ background: "white" }}>
        <div className="col-lg-6 col-12 order-2 order-lg-1 heroTextCol">
          <div className="icon-design d-flex gap-3">
            <div className="iconImg">
              <img src={dotImg} alt="orangeDot" width={20} />
            </div>
            <p>About Me</p>
          </div>

          <div className="details">
            <h1 className="fw-bold" style={{ fontSize: "3rem" }}>
              <div>I Can Design Anything You Want</div>
            </h1>
            <p className="mt-4 mb-5 lh-base fs-6" style={{ color: "#606060" }}>
              Nam libero tempore, cum soluta nobis est eligendi optio cumque
              nihil impedit quo minus id quod maxime placeat facere possimus,
              omnis voluptas assumenda est, omnis dolor repellendus. Temporibus
              autem quibusdam et aut officiis. Nam libero tempore, cum soluta
              nobis est eligendi optio cumque nihil impedit.
            </p>
            <div className="details-complete">
              <div className="row d-flex row-gap-3">
                <div className="col-sm-6 col-12 d-flex">
                  <div className="iconImg">
                    <img src={icon1} alt="Project Icon" width={40} />
                  </div>
                  <h5 className="ms-3">
                    <span style={{ color: "#ff6b00" }}>24+</span> <br />
                    Complete Project
                  </h5>
                </div>
                <div className="col-sm-6 col-12 d-flex">
                  <div className="iconImg">
                    <img src={icon2} alt="Experience Icon" width={40} />
                  </div>
                  <h5 className="ms-3">
                    <span style={{ color: "#ff6b00" }}>1+</span> <br />
                    Year of Experience
                  </h5>
                </div>
                <div className="col-sm-6 col-12 d-flex">
                  <i className="fa-regular fa-square-check mt-1"></i>
                  <span className="ms-2">Work simple and clean design</span>
                </div>
                <div className="col-sm-6 col-12 d-flex">
                  <i className="fa-regular fa-square-check mt-1"></i>
                  <span className="ms-2">Web Design Full stack</span>
                </div>
                <div className="col-sm-6 col-12 d-flex">
                  <i className="fa-regular fa-square-check mt-1"></i>
                  <span className="ms-2">New idea and user friendly design</span>
                </div>
                <div className="col-sm-6 col-12 d-flex">
                  <i className="fa-regular fa-square-check mt-1"></i>
                  <span className="ms-2">Unlimited Revisions</span>
                </div>
              </div>
              <button
                type="button"
                className="btn custom-btn fw-bold fs-5 py-2 px-4 mt-5"
                style={{ background: "#ff6b00", color: "white" }}
              >
                Download My CV
              </button>
            </div>
          </div>
        </div>

        <div className="col-lg-5 col-12 heroImgCol">
          <div className="heroImg">
            <img
              src={aboutImg}
              alt="About Image"
              className="w-100 h-100 object-cover"
              loading="lazy"
              width="600"
              height="400"
            />
          </div>
        </div>
      </section>
    </section>
  );
};

export default Hero;