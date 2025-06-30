import React from 'react'
import PageHeading from '../heading/PageHeading'
import Service from '../services/Service'
import CtaBg from '../contactCtaBg/contactCta'
import Footer from '../Footer/Footer'
const ServicePage = () => {
  return (
    <div>
      <PageHeading title={'My Service'} heading={'Services I offer'} />
      <Service />
      <CtaBg />
      <Footer />
    </div>
  )
}

export default ServicePage
