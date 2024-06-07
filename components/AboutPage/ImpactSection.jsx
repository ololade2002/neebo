
"use client"
import React from 'react'
import { ParallaxBanner, ParallaxBannerLayer } from 'react-scroll-parallax';

const ImpactSection = () => {
  return (
    <section className='text-white py-24'>
      <main className='flex flex-col lg:flex-row pb-24 px-4 lg:px-12 gap-4 lg:gap-28'>
        <div className='w-full lg:w-5/12 lg:h-screen relative lg:sticky lg:top-20 '>
          <p className='uppercase font-mono text-[14px] text-neutral-300'>
            About Neebo: Your AI Companion for a Brighter Tomorrow
          </p>
        </div>

        <div className='w-full lg:w-7/12 ml-auto '>
          <h1 className=' text-[32px] xs:text-[40px] sm:text-[60px] lg:text-[85px] text-[#fff] font-[600] capitalize font-rale leading-[1.2] lg:leading-[1.1] pb-5'>Your AI Partner in Uncluttering Life.</h1>  
          <h2 className='font-rale text-[23px] text-neutral-400 font-[300] pb-5'>
            In today&apos;s fast-paced world, staying organized and finding moments of joy can feel like a constant struggle.
            That&apos;s where Neebo comes in. We&apos;re more than just an AI assistant;
            we&apos;re your friendly companion, designed to simplify your day and add a spark of fun to your journey.
          </h2>
          <h2 className='font-rale  text-[23px] text-neutral-400 font-[300] pb-5'>
            Neebo was born in 2020 out of a shared vision: to create an AI companion that feels as helpful as a personal 
            assistant and as supportive as a friend. We believe technology should empower you, not overwhelm you. That&apos;s why Neebo is built on core values of:
          </h2>
          <ul className='flex flex-col  gap-3 font-rale text-[20px] xs:text-[23px] text-neutral-400 font-[300] list-disc list-inside'>
            <li className='text-neutral-400'><span className='font-[400]'>Trustworthiness:</span> Your privacy is our top priority. We handle your data with the utmost care and transparency.</li>
            <li className='text-neutral-400'><span className='font-[400]'>Friendliness:</span> We believe in building positive and supportive interactions. Neebo is here to listen, learn, and offer encouragement.</li>
            <li className='text-neutral-400'><span className='font-[400]'>Innovation: </span>Our team is constantly pushing boundaries, integrating cutting-edge AI to make Neebo even smarter and more helpful.</li>
            <li className='text-neutral-400'><span className='font-[400]'>Usefulness: </span>We focus on providing practical assistance that truly enhances your daily life.</li>
          </ul>
        </div>
      </main>
      
      <ParallaxBanner style={{ aspectRatio: '2 / 1', height:'120vh' }}>
        <ParallaxBannerLayer className='w-[100vw] object-left parallaxImage  '  image='./img-neebo-9.webp' speed={-20} />
      </ParallaxBanner>
    </section>
  )
}

export default ImpactSection;
