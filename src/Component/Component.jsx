import React, { Suspense, lazy } from 'react';
const Hero = lazy(() => import('./Hero/Hero'));
const Service = lazy(() => import('./services/Service'));
const Heading = lazy(() => import('./heading/Heading'));
const Testimonial = lazy(() => import('./testimonial/Testimonial'));
const Portfolio = lazy(() => import('./portfolio/portfolio'));
const Partaners = lazy(() => import('./partaners/Partaners'));
const Skills = lazy(() => import('./Skills/Skill'));
const Blog = lazy(() => import('./Blog/Blog'));
const Contact = lazy(() => import('./Contact/Contact'));
const Footer = lazy(() => import('./Footer/Footer'));

const Component = () => {
  return (
    <Suspense fallback={null}>
      <Hero />
      <Heading title={'My Service'} heading={'Services I offer'} />
      <Service />
      <Heading title={'Testimonial'} heading={'Client Feedback'} />
      <Testimonial />
      <Heading title={'My Portfolio'} heading={'VISIT MY PORTFOLIO'} />
      <Portfolio />
      <Heading title={'Partners'} heading={'REPUTED PARTNER'} />
      <Partaners />
      <Heading title={'My Skills'} heading={'Skills Section'} />
      <Skills />
      <Heading title={'My Blog'} heading={'LATEST BLOG'} />
      <Blog />
      <Heading title={'My Contact'} heading={'I WANT TO HEAR FROM YOU'} />
      <Contact />
      <Footer />
    </Suspense>
  );
};

export default Component;