import React, { useEffect, useRef } from "react";
import Typed from "typed.js";
import dotImg from "../../assets/particle/orangeDot.png";
import bannerImg from "../../assets/heroImg/bannerImg.png";
import './Hero.css'; // 🔥 Make sure this file is created

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
      <div className="row d-flex align-items-center">
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
      </div>
    </div>
  );
};

export default Hero;
