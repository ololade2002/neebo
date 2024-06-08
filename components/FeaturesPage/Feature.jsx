
"use client"
import React, {useEffect} from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import HeroSection from '@/components/FeaturesPage/HeroSection'
import Subsection from '@/components/FeaturesPage/SubSection'


const Feature = () => {
  useEffect(() => {
    AOS.init()
    },[]) 
  return (
    <div className='bg-black'>
        <HeroSection/>
        <Subsection/>
    </div>
  )
}

export default Feature