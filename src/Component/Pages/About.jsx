import React from "react";
import PageHeading from "../heading/PageHeading";
import About2 from "../About/about2";
import Heading from "../heading/Heading";
import Skill from '../Skills/Skill'
import Testimonials from "../testimonial/Testimonial";
import Service from "../services/Service";
import Partaners from "../partaners/Partaners";
import CtaBg from "../contactCtaBg/contactCta";
import Footer from "../Footer/Footer";
const About = () => {
  return (
    <div>
      <PageHeading title={"About Me"} heading={"About Me"} />
      <About2 />
      <Heading title={'My Skills'} heading={'Skill Section'} />
      <Skill />
      <Heading title={"My Service"} heading={"Services I offer"} />
      <Service />
      <Heading title={'Testimonial'} heading={'Client Feedback'} />
      <Testimonials />
      <Heading title={'Partners'} heading={'REPUTED PARTNER'} />
      <Partaners />
      <CtaBg />
      <Footer />
    </div>
  );
};

export default About;
