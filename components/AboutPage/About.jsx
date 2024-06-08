"use client"
import React, {useEffect} from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import Navbar from '../NavbarSection/Navbar'
import HeroSection from './HeroSection'
import ImpactSection from './ImpactSection'
import VisionSection from './VisionSection'
import Specification from './Specification'
import DesignSection from './DesignSection'
import Footer from '../Footer/Footer'

const About = () => {
  useEffect(() => {
    AOS.init()
    },[])  
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