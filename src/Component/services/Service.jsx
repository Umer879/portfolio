import React from "react";
import serviceOne from "../../assets/service/serviceOne.webp";
import serviceTwo from "../../assets/service/serviceTwo.webp";
import serviceThree from "../../assets/service/serviceThree.webp";
import serviceFour from "../../assets/service/serviceFour.webp";
import serviceFive from "../../assets/service/serviceFive.webp";
import serviceSix from "../../assets/service/serviceSix.webp";
import serviceSeven from "../../assets/service/serviceSeven.webp";
import serviceEight from "../../assets/service/serviceEight.webp";
const serviceData = [
  {
    img: serviceOne,
    title: "UI/UX Design",
    des: "Designing clean interfaces and smooth experiences that engage users and meet business goals.",
  },
  {
    img: serviceTwo,
    title: "Mobile App",
    des: "We build mobile apps that are fast, secure, and deliver smooth user experiences.",
  },
  {
    img: serviceThree,
    title: "Graphic Design",
    des: "Designing modern graphics that clearly express your brand and attract target customers.",
  },
  {
    img: serviceFour,
    title: "Web Developer",
    des: "Creating responsive websites with clean layouts and smooth user-friendly functionality.",
  },
  {
    img: serviceFive,
    title: "SEO Optimisation",
    des: "Boosting your site’s ranking to increase visitors and enhance digital brand visibility.",
  },
  {
    img: serviceSix,
    title: "WordPress Developer",
    des: "Developing custom WordPress sites with full control and flexible content options.",
  },
  {
    img: serviceSeven,
    title: "App Development",
    des: "We develop cross-platform apps with sleek design and excellent performance speed.",
  },
  {
    img: serviceEight,
    title: "Business Strategy",
    des: "Helping your business grow with smart plans and focused strategic development tools.",
  },
];
const Service = () => {
  return (
    <div className="container-fluid">
      <div className="container">
        <div className="row g-4 justify-content-center my-4">
  {serviceData.map((service, index) => (
    <div className="col-lg-3 col-md-6 col-12 " key={index}>
      <div className="card h-100  text-center pt-4 px-3 serviceCard">
        <img
          src={service.img}
          alt={service.title}
          className="card-img-top mx-auto"
          style={{ width: "50px", height: "50px", objectFit: "cover" }}
        />
        <div className="card-body">
          <h5 className="card-title fw-bold">{service.title}</h5>
          <p className="card-text text-muted lh-lg">{service.des}</p>
        </div>
      </div>
    </div>
  ))}
</div>

      </div>
    </div>
  );
};

export default Service;
