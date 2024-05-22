
import React from 'react'
import HeroSection from './HeroSection'
import TopContent from './TopContent'
import FeatureSection from './FeatureSection'
import DesignSection from './DesignSection'

const Home = () => {
  return (
    <div className='bg-black'>
        <HeroSection/>
        <TopContent/>
        <FeatureSection/>
        <DesignSection/>
    </div>
  )
}

export default Home