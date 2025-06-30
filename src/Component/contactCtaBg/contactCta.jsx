import React from "react";

const CtaBg = () => {
  return (
    <div className="container-fulid text-light " style={{ height: "65vh", margin: '100px 0' }}>
      <div className="container cta-bg text-center rounded">
        <p>Get Started</p>
        <h1>Let’s do something <br />new with me!</h1>
        <div className="button">
          <button
            type="button"
            className="btn custom-btn fw-medium fs-5 py-2 px-4 my-3"
            style={{
              background: "#ff6b00",
              color: "white",
              width: "fit-content",
            }}
          >
            Contact
          </button>
        </div>
      </div>
    </div>
  );
};

export default CtaBg;
