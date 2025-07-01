import React from "react";
import dotImg from "../../../assets/particle/orangeDot.webp";
import react from "../../../assets/skills/react.avif";
import js from "../../../assets/skills/js.avif";
import tailwind from "../../../assets/skills/tailwind.avif";
import sketch from "../../../assets/skills/sketch.avif";
import html from '../../../assets/skills/html.avif'
import css from '../../../assets/skills/css.avif'
import tablogoOne from  '../../../assets/logo/One.avif'
import tablogoTwo from '../../../assets/logo/Two.avif'
import tablogoThree from '../../../assets/logo/Three.avif'
const experiences = [
  {
    company: "Okuneva Ltd.",
    role: "Senior Product Designer",
    duration: "2 Years",
    from: "Jan 2021",
    to: "Running",
    logo: tablogoOne,
  },
  {
    company: "Braun PLC.",
    role: "Product Designer",
    duration: "7 Years",
    from: "Jan 2014",
    to: "Dec 2021",
    logo: tablogoTwo,
  },
  {
    company: "Bruen Ltd.",
    role: "User Interface Designer",
    duration: "4 Years",
    from: "Jan 2010",
    to: "Dec 2014",
    logo: tablogoThree,
  },
];
const educationData = [
      {
    img: html,
    title: "HTML 5",
    percentage: "100%",
  },
    {
    img: css,
    title: "CSS 3",
    percentage: "100%",
  },
  {
    img: sketch,
    title: "Sketch",
    percentage: "90%",
  },
  {
    img: react,
    title: "React",
    percentage: "85%",
  },
  {
    img: js,
    title: "JavaScript",
    percentage: "80%",
  },
  {
    img: tailwind,
    title: "Tailwind CSS",
    percentage: "95%",
  },
];
const Education = () => {
  return (
    <div className="container-fluid my-5">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-12">
            <div className="icon-design d-flex gap-3">
              <div className="iconImg">
                <img src={dotImg} alt="orangeDot" width={20} />
              </div>
              <p>Resume</p>
            </div>
            <h1 className="fw-bold edu-heading">Education & Experience</h1>
            <div className="box-container row my-5 row-gap-3">
              {educationData.map((data, index) => (
                <div className="box col-6 text-center" key={index}>
                  <img
                    className="my-3"
                    src={data.img}
                    alt={data.title}
                    style={{ width: "50px", height: "50px" }}
                  />
                  <div className="text">
                    <h5 className="p-2 rounded">
                      {data.title}
                      <span className="ps-3">{data.percentage} </span>
                    </h5>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="col-lg-6 col-12">
           <button className="py-2 px-3 rounded w-100 fw-bold fs-5" style={{background: '#ff6b00', color: 'white'}}>
                Professional Experience
            </button>

           {experiences.map((exp, index) => (
        <div key={index} className="d-flex align-items-start experience mb-5" style={{marginTop: '100px'}}>
          {/* Logo */}
          <div className="me-4">
            <div
              className="rounded-circle border border-warning d-flex align-items-center justify-content-center"
              style={{ width: "70px", height: "70px", fontSize: "24px" }}
            >
              <img src={exp.logo} alt={exp.company}/>
            </div>
          </div>

          {/* Info */}
          <div className="w-100">
            <div className="d-flex justify-content-between align-items-center">
              <h5 className="mb-1 fw-bold">{exp.company}</h5>
              <span className="text-warning fw-bold">{exp.duration}</span>
            </div>
            <p className="text-muted mb-1">{exp.role}</p>
            <p className="mb-0">
              {exp.from} - {exp.to}
            </p>
          </div>
        </div>
      ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
