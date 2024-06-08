
"use client"
import { ParallaxBanner, ParallaxBannerLayer } from 'react-scroll-parallax';
import React from 'react'
import useTextAnimation from '@/hooks/useTextAnimation'

const PrivacySection = () => {
  useTextAnimation('.subTextt')
  return (
    <section className='bg-[#000]'>
    <main className='px-4 lg:px-11 pt-16 pb-20 md:py-24'>
     <div className='w-full lg:w-9/12 flex flex-col mx-auto '>
      <p className='subTextt featureSubText'>Data Encryption And Privacy Controls</p>
      <h1 className='featureMainText'>Robust Security and Privacy</h1>
     
     </div>

     <div className='pt-2 md:pt-6 pb-0 lg:pb-24  lg:float-end w-full lg:w-6/12'>
      <h3 className='featureSubText2 subTextt'>Security is a top priority with Neebo.
      The device employs state-of-the-art encryption protocols to protect your data, ensuring your personal information remains confidential and secure. With Neebo, 
      you can trust that your digital interactions are safeguarded against potential threats, giving you peace of mind.
      </h3>
      </div>
    </main>

    <div className='w-[100%] '>
    <ParallaxBanner style={{ aspectRatio: '2 / 1', height:'110vh'  }}>
         <ParallaxBannerLayer className='w-[100vw] object-cover '  image='./neebo-device-13.webp' speed={-15} />
   </ParallaxBanner>
    </div>
 </section>
  )
}

export default PrivacySection