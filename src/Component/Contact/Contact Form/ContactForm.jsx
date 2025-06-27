import React from "react";
// import '../../../style.css';

import contactImg from "../../../assets/heroImg/contactImg.avif";
const ContactForm = () => {
  return (
    <div className="container-fluid">
      <div className="container">
        <h1 className="text-center" style={{ margin: "100px 0 310px 0" }}>
          Contact Us
        </h1>
        <div className="row my-5 d-flex justify-content-between">
          <div className="col-lg-5 partnerCol col-12  p-5 rounded-3 text-center">
            <img src={contactImg} alt="" />
            <div className="contact-details mt-3">
              <h1 className="fs-2">hello@credesign.com</h1>
              <h3 className="fs-4">Based in New York, USA</h3>
              <h3 className="fs-4">+123 456 7890</h3>
              <button
                type="button"
                className="btn custom-btn fw-medium fs-5 py-2 px-4 my-3"
                style={{ background: "#ff6b00", color: "white" }}
              >
                Hire Me
              </button>
            </div>
          </div>
          <div className="col-lg-6 col-12">
            <h1 className="my-5">Send A Message!</h1>
            <form className="row g-3">
              <div className="col-md-6">
                <input
                  type="email"
                  className="form-control"
                  id="inputEmail4"
                  placeholder="Email"
                />
              </div>
              <div className="col-md-6">
                <input
                  type="phone"
                  className="form-control"
                  id="inputPassword4"
                  placeholder="Phone"
                />
              </div>
              <div className="col-md-6">
                <input
                  type="text"
                  className="form-control"
                  id="inputPassword4"
                  placeholder="Package"
                />
              </div>
              <div className="col-md-6">
                <input
                  type="birth"
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
        </div>
      </div>
      {/* ADD a map  */}
      <div className="map-container">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13291.954085887335!2d72.83649498839908!3d33.605602294776546!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38df99024717b629%3A0xc467d08f636c7444!2sFazaia%20Housing%20Scheme%2C%20Islamabad%2C%20Pakistan!5e0!3m2!1sen!2s!4v1750935542526!5m2!1sen!2s"
          width="100%"
          height="450"
          style={{ border: 0, borderRadius: "12px" }}
          allowFullScreen
          referrerPolicy="no-referrer-when-downgrade"
          title="Fazaia Map"
        ></iframe>
      </div>
    </div>
  );
};

export default ContactForm;
