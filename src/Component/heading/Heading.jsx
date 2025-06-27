import React from 'react'
import dotImg from "../../assets/particle/orangeDot.webp";
const Heading = ({title, heading}) => {
  return (
    <div className="margin" style={{margin: '70px 0 30px 0'}}>
            <div className="icon-design gap-3 d-flex justify-content-center">
              <div className="iconImg">
                <img src={dotImg} alt="orangeDot" style={{ width: "20px" }} />
              </div>
              <p>{title} </p>
            </div>
            <h1 className="text-center fw-bold text-uppercase">{heading} </h1>
            </div>
  )
}

export default Heading
