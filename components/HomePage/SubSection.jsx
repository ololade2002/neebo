
import React from 'react'
import TopContent from './TopContent'
import FeatureSection from './FeatureSection'
import DesignSection from './DesignSection'
import Footer from '@/components/Footer/Footer'

const SubSection = () => {
  return (
    <section className='relative lg:top-[40vh]'>
        <TopContent/>
        <FeatureSection/>
        <DesignSection/>
        <Footer/>
    </section>
  )
}

export default SubSection