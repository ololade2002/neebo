
import React from 'react'
import HeroSection from './HeroSection'
import TopContent from './TopContent'
import FeatureSection from './FeatureSection'
import DesignSection from './DesignSection'
import Footer from '@/components/Footer/Footer'

const Home = () => {
  return (
    <div className='bg-black'>
        <HeroSection/>
        <TopContent/>
        <FeatureSection/>
        <DesignSection/>
        <Footer/>
    </div>
  )
}

export default Home