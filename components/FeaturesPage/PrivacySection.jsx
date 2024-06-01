
"use client"
import { ParallaxBanner, ParallaxBannerLayer } from 'react-scroll-parallax';
import React from 'react'

const PrivacySection = () => {
  return (
    <section className='bg-[#000]'>
    <main className='px-11 py-24'>
     <div className='w-9/12 flex flex-col mx-auto '>
      <p className='featureSubText'>Data Encryption And Privacy Controls</p>
      <h1 className='featureMainText'>Robust Security and Privacy</h1>
     
     </div>

     <div className='pt-6 pb-24  float-end w-6/12'>
      <h3 className='featureSubText2'>Security is a top priority with Neebo.
      The device employs state-of-the-art encryption protocols to protect your data, ensuring your personal information remains confidential and secure. With Neebo, 
      you can trust that your digital interactions are safeguarded against potential threats, giving you peace of mind.
      </h3>
      </div>
    </main>

    <div className='w-[100%] '>
    <ParallaxBanner style={{ aspectRatio: '2 / 1', height:'120vh'  }}>
         <ParallaxBannerLayer className='w-[100vw] object-cover '  image='./neebo-device-13.webp' speed={-15} />
   </ParallaxBanner>
    </div>
 </section>
  )
}

export default PrivacySection