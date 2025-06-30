import React from "react";
import dotImg from "../../assets/particle/orangeDot.webp";
import aboutImg from "../../assets/heroImg/aboutTwo.avif";

const skills = [
  { name: "Transparency Services", value: 90 },
  { name: "Backend Development", value: 80 },
  { name: "Frontend Development", value: 90 },
  { name: "Relationship Advice", value: 75 },
];

const About2 = () => {
  return (
    <section className="container-fluid">
      <section className="container">
        <section className="row">
          <div className="col-lg-6 col-md-6 col-12 order-2 order-lg-1">
            <div className="icon-design d-flex gap-3">
              <div className="iconImg">
                <img src={dotImg} alt="orangeDot" width={20} />
              </div>
              <p>About Me</p>
            </div>
            <h1 className="fw-bold mb-4">
              I’m developing mobile and web applications.
            </h1>
            <p style={{ color: "rgb(96, 96, 96)" }}>
              Contrary to popular belief, Lorem Ipsum is not simply random text.
              It has roots in a piece of classical Latin literature from 45 BC,
              making it over 2000 years old. Contrary to popular belief, Lorem
              Ipsum is not simply random text.
            </p>
            <div
              className="progressBar my-4"
              style={{ color: "rgb(96, 96, 96)" }}
            >
              {skills.map((skill, index) => (
                <div key={index} className="mb-4">
                  <div className="d-flex justify-content-between mb-2">
                    <span>{skill.name}</span>
                    <span>{skill.value}%</span>
                  </div>
                  <div
                    className="progress"
                    style={{ height: "10px", backgroundColor: "#fceae4" }}
                  >
                    <div
                      className="progress-bar"
                      role="progressbar"
                      style={{
                        width: `${skill.value}%`,
                        backgroundColor: "#ff6b00",
                        transition: "width 1s ease",
                      }}
                      aria-valuenow={skill.value}
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-12 order-1 order-lg-2">
            <div className="about-img">
              <img
                src={aboutImg}
                className="img-fluid"
                alt="My Image"
                style={{ objectFit: "contain", height: "100%", width: "100%" }}
              />
            </div>
          </div>
        </section>
      </section>
    </section>
  );
};

export default About2;
