import React from 'react'
import About2 from '../About/about2.jsx'
import Footer from '../Footer/Footer'
import PageHeading from '../heading/PageHeading.jsx'
import ContactCta from '../contactCtaBg/contactCta.jsx'
import Education from '../About/Education/Education.jsx'
const Resume = () => {
  return (
    <div>
      <PageHeading title={'My Resume'} heading={'Resume'} />
      <About2 />
      <Education />
      <ContactCta />
      <Footer />
    </div>
  )
}

export default Resume
