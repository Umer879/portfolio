import React from "react";
import PageHeading from "../heading/PageHeading";
import Portfolio from "../portfolio/portfolio";
import Footer from "../Footer/Footer";
const PortfolioPage = () => {
  return (
    <div>
      <PageHeading title={"My Portfolio"} heading={"VISIT MY PORTFOLIO"} />
      <Portfolio />
      <Footer />
    </div>
  );
};

export default PortfolioPage;
