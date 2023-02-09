import React, { Fragment } from 'react'
import Footer from '../component/Sevices/Footer'
import Header from '../component/Sevices/Header'
import MyWork from '../component/Sevices/MyWork'
import WhatIDO from '../component/Sevices/WhatIDO'

const ServicePage = () => {
  return (
    <Fragment>
      <Header/>
      <WhatIDO/>
      <MyWork/>
      <Footer/>
    </Fragment>
  )
}

export default ServicePage
