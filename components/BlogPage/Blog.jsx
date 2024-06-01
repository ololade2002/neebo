
import React from 'react'
import HeroSection from './HeroSection'
import NavbarSection from '../NavbarSection/Navbar'
import TopContent from './BlogList'
import JoinSection from './JoinSection'
import Footer from '../Footer/Footer'

const Collection = () => {
  return (
    <section className=''>
        <NavbarSection/>
        <HeroSection/>
        <TopContent/>
        <JoinSection/>
        <Footer/>
    </section>
  )
}

export default Collection