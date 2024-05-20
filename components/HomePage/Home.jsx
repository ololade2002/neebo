
import React from 'react'
import HeroSection from './HeroSection'
import TopContent from './TopContent'
import FeatureSection from './FeatureSection'

const Home = () => {
  return (
    <div className='bg-black'>
        <HeroSection/>
        <TopContent/>
        <FeatureSection/>
    </div>
  )
}

export default Home