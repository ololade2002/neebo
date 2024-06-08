
"use client"
import React from 'react'
import HeroSection from './HeroSection'
import SubSection from './SubSection'
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Home = () => {
  useEffect(() => {
    AOS.init()
    },[])  
  return (
    <div className='bg-black'>
        <HeroSection/>
        <SubSection/>
    </div>
  )
}

export default Home