

"use client"
import { ParallaxBanner, ParallaxBannerLayer } from 'react-scroll-parallax';
import React from 'react'

const ConnectionSection = () => {
  return (
    <section className='bg-[#000]'>
    <main className='px-11 py-24'>
     <div className='w-9/12 flex flex-col mx-auto '>
      <p className='featureSubText'>Advanced Connectivity</p>
      <h1 className='featureMainText'>Cross-Device Compatibility</h1>
     
     </div>

     <div className='pt-6 pb-24  float-end w-6/12'>
      <h3 className='featureSubText2'>Neebo is designed to work seamlessly with a variety of 
       devices and accessories, ensuring a cohesive and unified tech ecosystem. Whether it&apos;s syncing with your smartphone, tablet, or smart TV, Neebo ensures that all your devices communicate effectively,
       enhancing the overall user experience and making your tech interactions more efficient and enjoyable.
      </h3>
      </div>
    </main>

    <div className='w-[100%] '>
    <ParallaxBanner style={{ aspectRatio: '2 / 1', height:'120vh'  }}>
         <ParallaxBannerLayer className='w-[100vw] object-cover '  image='./audio-1.jpg' speed={-15} />
   </ParallaxBanner>
    </div>
 </section>
  )
}

export default ConnectionSection