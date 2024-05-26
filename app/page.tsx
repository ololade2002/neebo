
import React from 'react'
import Navbar from '@/components/HomePage/Navbar/Navbar'
import HomeSection from '@/components/HomePage/Home'
import MobileNavbar from '@/components/HomePage/Navbar/MobileNavbar'


const Home = () => {

  return (
    <div className='' >
    <Navbar/>
    <MobileNavbar/>
    <HomeSection/>
  
    </div>
  )
}

export default Home