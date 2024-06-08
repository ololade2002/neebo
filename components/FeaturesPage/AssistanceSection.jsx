"use client"
import React from 'react'
import { ParallaxBanner, ParallaxBannerLayer } from 'react-scroll-parallax';
import useTextAnimation from '@/hooks/useTextAnimation'

const AssistanceSection = () => {
  useTextAnimation('.subTextt')
  
  return (
    <section className='bg-[#000]'>
    <main className='px-4 lg:px-11 pt-16 pb-20 md:py-24'>
     <div className='w-full lg:w-9/12 flex flex-col mx-auto '>
      <p className='featureSubText subTextt '>Intelligent Learning</p>
      <h1 className='featureMainText '>AI-Powered Personal Assistance</h1>
     </div>

     <div className='pt-2 md:pt-6 pb-0 lg:pb-24  lg:float-end w-full lg:w-6/12'>
      <h3 className='featureSubText2 subTextt '>Neebo&apos;s AI takes personal assistance to the next level by continuously learning from your interactions. This intelligent system adapts to your habits and preferences, delivering a personalized experience that enhances your daily productivity and convenience. Neebo’s AI evolves with you, ensuring that it always understands your needs and anticipates your 
        requirements, making every interaction smoother and more intuitive.
      </h3>
      </div>
    </main>

    <div className='w-[100%] '>
       <ParallaxBanner style={{ aspectRatio: '2 / 1', height:'120vh'  }}>
            <ParallaxBannerLayer className='w-[100vw] object-cover '  image='./device-31.png' speed={-15} />
      </ParallaxBanner>
    </div>
  
 </section>
  )
}

export default AssistanceSection