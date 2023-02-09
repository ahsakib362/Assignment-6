import React, { Fragment } from 'react';
import AboutMe from '../component/Homepage/AboutMe';
import Contact from '../component/Homepage/Contact';
import Footer from '../component/Homepage/Footer';
import FreelanceWork from '../component/Homepage/FreelanceWork';
import Header from '../component/Homepage/Header';
import HeroSection from '../component/Homepage/HeroSection';
import MySkill from '../component/Homepage/MySkill';
import MyWork from '../component/Homepage/MyWork';
import WhatIDO from '../component/Homepage/WhatIDO';


const Homepage = () => {
  return (
    <Fragment>
        <Header/>
        <HeroSection/>
        <WhatIDO/>
        <AboutMe/>
        <MySkill/>
        <FreelanceWork/>
        <MyWork/>
        <Contact/>
        <Footer/>
    </Fragment>
    
  )
}

export default Homepage
