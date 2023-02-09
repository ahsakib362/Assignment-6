import React, { Fragment } from 'react'
import AboutMe from '../component/About/AboutMe'
import Footer from '../component/About/Footer'
import Header from '../component/About/Header'
import MySkill from '../component/About/MySkill'

const AboutPage = () => {
  return (
    <Fragment>
        <Header/>
        <AboutMe/>
        <MySkill/>
        <Footer/>
    </Fragment>
  )
}

export default AboutPage
