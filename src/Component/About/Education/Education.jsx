import React from "react";
import dotImg from "../../../assets/particle/orangeDot.webp";
import react from "../../../assets/skills/react.avif";
import js from "../../../assets/skills/js.avif";
import tailwind from "../../../assets/skills/tailwind.avif";
import sketch from "../../../assets/skills/sketch.avif";
import html from '../../../assets/skills/html.avif'
import css from '../../../assets/skills/css.avif'

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
          <div className="col-lg-5">
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
          <div className="col-lg-7">
           <div className="row">
            <div className="col-6">
                 <button className="py-2 px-3 rounded fw-bold fs-5" style={{background: '#ff6b00', color: 'white'}}>
                Professional Experience
            </button>
            </div>
            <div className="col-6">
                <button className="py-2 px-4 education rounded w-100 fw-bold fs-5" style={{background: 'transparent'}}>
             Education
            </button>
            </div>
           </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
