import React from 'react'
import Navbar from './Navbar/Navbar'
import Hero from './Hero/Hero'
import Service from './services/Service'
import Heading from './heading/Heading'
import Testimonial from './testimonial/Testimonial'
import Portfolio from './portfolio/portfolio'
import Partaners from './partaners/Partaners'
import Blog from './Blog/Blog'
import Contact from './Contact/Contact'
import Footer from './Footer/Footer'
const Component = () => {
  return (
    <div>
      <Hero />
      <Heading title={'My Service'} heading={'Services I offer'} />
      <Service />
      <Heading title={'Testimonial'} heading={'Client Feedback'} />
      <Testimonial />
      <Heading title={'My Portfolio'} heading={'VISIT MY PORTFOLIO'} />
      <Portfolio />
      <Heading title={'Partners'} heading={'REPUTED PARTNER'} />
      <Partaners />
      <Heading title={"My Blog"} heading={'LATEST BLOG'} />
      <Blog />
      <Heading title={'My Contact'} heading={'I WANT TO HEAR FROM YOU'} />
      <Contact />
       <Footer />
    </div>
  )
}

export default Component
