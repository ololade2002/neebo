
"use client"
import { ParallaxBanner, ParallaxBannerLayer } from 'react-scroll-parallax';
import React from 'react'

const AudioSection = () => {
  return (
    <section className='bg-[#000]'>
       <main className='px-11 py-24'>
        <div className='w-9/12 flex flex-col mx-auto '>
         <p className='featureSubText'>Unmatched Audio Quality</p>
         <h1 className='featureMainText'>Sounds like an epiphany.</h1>
        
        </div>

        <div className='pt-6 pb-24  float-end w-6/12'>
         <h3 className='featureSubText2'>Neebo elevates audio to an art form with its cutting-edge high-fidelity technology and superior Active Noise Cancellation. 
          Each component of Neebo's custom-designed driver is meticulously crafted to produce sound with ultra-low distortion across the entire audible spectrum. From deep, rich bass to precise mids and crystal-clear highs, Neebo ensures you hear every note with unparalleled clarity.
          Dive into an auditory experience where every sound is brought to life with exceptional detail and depth.
         </h3>
         </div>
       </main>

       <div className='w-[100%] '>
       <ParallaxBanner style={{ aspectRatio: '2 / 1', height:'120vh'  }}>
            <ParallaxBannerLayer className='w-[100vw] object-cover '  image='./audio-2.jpg' speed={-15} />
      </ParallaxBanner>
       </div>
    </section>
  )
}

export default AudioSection