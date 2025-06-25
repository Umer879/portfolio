import React from "react";
import one from "../../assets/portfolio/portfolioOne.png";
import Two from "../../assets/portfolio/portfolioTwo.png";
import Three from "../../assets/portfolio/portfolioThree.png";
import Four from "../../assets/portfolio/portfolioFour.png";
import Five from "../../assets/portfolio/portfolioFive.png";
import Six from "../../assets/portfolio/portfolioSix.png";
import Seven from "../../assets/portfolio/portfolioSeven.png";
import Eight from "../../assets/portfolio/portfolioEight.png";
import "./Portfolio.css"; // 👈 Make sure to create and import this

const portfolioData = [
  { img: one,
    title: 'Graphic Design',
    des: 'The best way to impress your web',
   },
  { img: Two,
    title: 'Graphic Design',
    des: 'The best way to impress your web',
   },
  { img: Three,
    title: 'Graphic Design',
    des: 'The best way to impress your web',
   },
  { img: Four,
    title: 'Graphic Design',
    des: 'The best way to impress your web',
   },
  { img: Five,
    title: 'Graphic Design',
    des: 'The best way to impress your web',
   },
  { img: Six,
    title: 'Graphic Design',
    des: 'The best way to impress your web',
   },
  { img: Seven,
    title: 'Graphic Design',
    des: 'The best way to impress your web',
   },
];

const Portfolio = () => {
  return (
    <div className="container-fluid mb-5">
      <div className="container">
        <div className="row g-4">
          {portfolioData.map((item, index) => (
            <div className="col-lg-4 col-md-6 col-12" key={index}>
              <div className="portfolio-card">
                <img
                  src={item.img}
                  alt={`portfolio-${index}`}
                  className=" portfolio-image"
                />
                {/* Top overlay */}
                <div className="overlay"></div>
                {/* Bottom detail */}
                <div className="card-details">
                  <p>{item.title} </p>
                  <h5 className="fw-bold">{item.des} </h5>
                </div>
              </div>
            </div>
          ))}
          <div className="col-lg-8 col-md-6 col-12">
            <div className="portfolio-card">
              <img src={Eight} alt="" className=" portfolio-image" />
              {/* Top overlay */}
              <div className="overlay"></div>
              {/* Bottom detail */}

              <div className="card-details">
                <p>Graphic Design</p>
                <h5>The Best way to impress your web.</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
