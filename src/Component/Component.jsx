import React from 'react'
import Navbar from './Navbar/Navbar'
import Hero from './Hero/Hero'
import Service from './services/Service'
import Heading from './heading/Heading'
import Testimonial from './testimonial/Testimonial'
import Portfolio from './portfolio/portfolio'
import Partaners from './partaners/Partaners'
import Footer from './Footer/Footer'
const Component = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Heading title={'My Service'} heading={'Services I offer'} />
      <Service />
      <Heading title={'Testimonial'} heading={'Client Feedback'} />
      <Testimonial />
      <Heading title={'My Portfolio'} heading={'VISIT MY PORTFOLIO'} />
      <Portfolio />
      <Heading title={'Partners'} heading={'REPUTED PARTNER'} />
      <Partaners />
       <Footer />
    </div>
  )
}

export default Component
