
import React from 'react'
import Navbar from '../navbar/Navbar'
import HeroSection from './HeroSection'
import ImpactSection from './ImpactSection'
import VisionSection from './VisionSection'
import Specification from './Specification'
import DesignSection from './DesignSection'
import Footer from '../Footer/Footer'

const About = () => {
  return (
    <div className='bg-black'>
        <Navbar/>
        <HeroSection/>
        <ImpactSection/>
        <VisionSection/>
        <Specification/>
        <DesignSection/>
        <Footer/>
    </div>
  )
}

export default About