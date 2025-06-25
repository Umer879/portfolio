import React, { useEffect, useRef } from "react";
import Typed from "typed.js";
import dotImg from "../../assets/particle/orangeDot.png";
import bannerImg from "../../assets/heroImg/bannerImg.png";
import aboutImg from "../../assets/heroImg/about.png";
import icon1 from "../../assets/aboutIcon/aboutIconOne.png";
import icon2 from "../../assets/aboutIcon/aboutIconTwo.png";
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
    <div className="container-fluid hero">
      <div
        className="row d-flex align-items-center"
        style={{ backgroundColor: " #fff3ea" }}
      >
        {/* ✅ IMAGE: comes first on mobile */}
        <div className="col-lg-5 col-12 order-1 order-lg-2 heroImgCol">
          <div className="heroImg">
            <img
              src={bannerImg}
              alt="Hero"
              className="w-100 h-100 object-cover"
            />
          </div>
        </div>

        {/* ✅ TEXT: comes second on mobile, with responsive padding */}
        <div className="col-lg-7 col-12 order-2 order-lg-1 heroTextCol">
          <div className="icon-design d-flex gap-3">
            <div className="iconImg">
              <img src={dotImg} alt="orangeDot" style={{ width: "20px" }} />
            </div>
            <p>I AM DESIGNER</p>
          </div>

          <div className="details">
            <h1 className="fw-bold" style={{ fontSize: "3.5rem" }}>
              <div>Creative Design</div>
              <div>
                and Web{" "}
                <span ref={typedRef} style={{ color: "#ff6b00" }}></span>
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
      </div>
      {/* Next Hero  */}
      <div
        className="row d-flex align-items-center justify-content-end hero2"
        style={{ background: "white" }}
      >
        {/* ✅ TEXT: comes second on mobile, with responsive padding */}
        <div className="col-lg-6 col-12 order-2 order-lg-1 heroTextCol">
          <div className="icon-design d-flex gap-3">
            <div className="iconImg">
              <img src={dotImg} alt="orangeDot" style={{ width: "20px" }} />
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
                    <img src={icon1} alt="" />
                  </div>
                  <h5 className="ms-3">
                    <span style={{ color: "#ff6b00" }}>24+</span> <br />
                    Complete Project
                  </h5>
                </div>
                <div className="col-sm-6 col-12 d-flex">
                  <div className="iconImg">
                    <img src={icon2} alt="" />
                  </div>
                  <h5 className="ms-3">
                    <span style={{ color: "#ff6b00" }}>1+</span> <br />
                    Year of Experience
                  </h5>
                </div>
                <div className="mt-4"></div>
                <div className="col-sm-6 col-12 row-gap-3 d-flex">
                  <div>
                    <i class="fa-regular fa-square-check"></i>{" "}
                    <span>Work simple and cline design</span>
                  </div>
                </div>
                <div className="col-sm-6 col-12 row-gap-3 d-flex">
                  <div>
                    <i class="fa-regular fa-square-check"></i>{" "}
                    <span>Web Design Full stack</span>
                  </div>
                </div>
                <div className="col-sm-6 col-12 row-gap-3 d-flex">
                  <div>
                    <i class="fa-regular fa-square-check"></i>{" "}
                    <span>New idea and user friendly design</span>
                  </div>
                </div>
                <div className="col-sm-6 col-12 row-gap-3 d-flex">
                  <div>
                    <i class="fa-regular fa-square-check"></i>{" "}
                    <span>Unlimited Revisions</span>
                  </div>
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
        {/* ✅ IMAGE: comes first on mobile */}
        <div className="col-lg-5 col-12 heroImgCol">
          <div className="heroImg">
            <img
              src={aboutImg}
              alt="Hero"
              className="w-100 h-100 object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
