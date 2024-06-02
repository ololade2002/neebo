
"use client"
import React from 'react'
import { ParallaxBanner, ParallaxBannerLayer } from 'react-scroll-parallax';

const HeroSection = () => {
  return (
    <section className=''>
     
       <div className='relative'>
       <div className='text-white h-[60vh] lg:px-14'>
           <div className='absolute right-4 bottom-6 lg:top-16'>
            <p className='font-mono text-[14px] text-neutral-400 uppercase'>Neebo industry</p>
            <p className='font-mono text-[14px] text-neutral-400 uppercase'>(2024)</p>
           </div>

           <div className='absolute px-4 lg:px-0 top-20 lg:bottom-20 right-0 w-full lg:w-4/12'>
            <h2 className='font-rale font-[400] text-[20px]  pb-2'>YOUR NEEBO ADVENTURE STARTS NOW .</h2>
            <p className='font-rale text-[17px] text-neutral-400 font-[300] '>Neebo anticipates your needs and streamlines your day.
               From scheduling appointments to managing to-do lists, Neebo is your one-stop shop for effortless assistance.</p>
           </div>
        </div>
       </div>

        <div>
        <ParallaxBanner style={{ aspectRatio: '2 / 1', height:'100vh' }}>
        <ParallaxBannerLayer className='w-[100vw]'  image='./img-neebo-1.webp' speed={-20} />
        </ParallaxBanner>
         
        </div>
    </section>
  )
}

export default HeroSection