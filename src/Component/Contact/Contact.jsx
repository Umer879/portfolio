import React from "react";
const Contact = () => {
  return (
    <div className="container-fluid">
      <div
        className="container"
        style={{ marginTop: "50px", marginBottom: "50px" }}
      >
        <div className="row d-flex row-gap-4">
          <div className="col-lg-8 col-12">
            <form className="row g-3">
              <div className="col-md-6">
                <input
                  type="text"
                  className="form-control"
                  id="inputEmail4"
                  placeholder="Your Name"
                />
              </div>
              <div className="col-md-6">
                <input
                  type="email"
                  className="form-control"
                  id="inputPassword4"
                  placeholder="Your Email"
                />
              </div>
              <div className="col-md-6">
                <input
                  type="email"
                  className="form-control"
                  id="inputPassword4"
                  placeholder="Your Phone"
                />
              </div>
              <div className="col-md-6">
                <input
                  type="email"
                  className="form-control"
                  id="inputPassword4"
                  placeholder="Subject"
                />
              </div>
              <div className="col-12">
                <div className="mb-3">
                  <textarea
                    className="form-control"
                    id="exampleFormControlTextarea1"
                    rows="5"
                    placeholder="Message"
                  ></textarea>
                </div>
              </div>
              <div className="col-12">
                <button
                  type="button"
                  className="btn custom-btn fw-medium fs-5 py-2 px-4 my-3"
                  style={{ background: "#ff6b00", color: "white" }}
                >
                  Send Me Message
                </button>
              </div>
            </form>
          </div>
          <div className="col-lg-4  col-12">
            <div className="d-flex align-items-start gap-3">
              <div className="icon-wrapper d-flex justify-content-center align-items-center rounded">
                <i className="fa-solid fa-location-dot text-orange fs-4"></i>
              </div>

              <div>
                <h6 className="fw-bold mb-1">Address</h6>
                <p className="mb-0">202 Dog Hill Lane Beloit, KS 67420</p>
              </div>
            </div>
            <div className="d-flex align-items-start gap-3 my-5">
              <div className="icon-wrapper d-flex justify-content-center align-items-center rounded">
                <i class="fa-solid fa-phone-volume text-orange fs-4"></i>
              </div>

              <div>
                <h6 className="fw-bold mb-1">Phone</h6>
                <p className="mb-0">+01985634755</p>
                
              </div>
            </div>
            <div className="d-flex align-items-start gap-3">
              <div className="icon-wrapper d-flex justify-content-center align-items-center rounded">
                <i class="fa-solid fa-envelope text-orange fs-4"></i>
              </div>

              <div>
                <h6 className="fw-bold mb-1">Email</h6>
                <p className="mb-0">credesign@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
