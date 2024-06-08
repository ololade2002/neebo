"use client"
import Image from 'next/image'
import React, {useEffect} from 'react'
import neeboHome from '@/public/neebo-device-4.webp'
import neeboPlus from '@/public/neebo-device-2.webp'
import neeboPro from '@/public/neebo-device-3.webp'
import {featuresData} from '@/utils/utilsData.js'
import Link from 'next/link'
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {useGSAP} from '@gsap/react'

gsap.registerPlugin(useGSAP)
gsap.registerPlugin(ScrollTrigger);

const FeatureSection = () => {
  return (
    <section className='pt-8 lg:pt-28 text-white'>
       <main className='flex flex-row overflow-hidden items-center gap-2 lg:gap-4'>
         <div className=' w-full lg:w-3/12'>
           <Image className='left-image rounded-md h-[40vw] lg:h-[48vh] object-cover'  src={neeboHome} alt='Neebo Home'/>
         </div>
         <div className=' w-full lg:w-7/12'>
           <Image className='center-image rounded-md h-[40vw] lg:h-[70vh] object-cover' src={neeboPlus} alt='Neebo Plus'/>
         </div>
         <div className=' w-full lg:w-3/12'>
           <Image className='right-image rounded-md h-[40vw] lg:h-[48vh] object-cover' src={neeboPro} alt='Neebo Pro'/>
         </div>
       </main>

       <main className='px-4 lg:px-11 py-14 lg:pt-28'>
        <h2 data-aos="fade-up" data-aos-duration="1000" className='text-[32px] xs:text-[45px] sm:text-[90px] lg:text-[170px] text-center leading-[1.3] md:leading-[1] font-[400] text-[#ecebe9]'>YOUR FRIENDLY AI SIDEKICK</h2>
       </main>

      <main className='px-4 lg:px-11 pb-12 lg:pb-24 '>
        <div className='flex flex-col lg:flex-row gap-4 lg:gap-8'>
          {featuresData.map((feature) => (
            <div data-aos="fade-up" data-aos-duration="1000" className="feature-preview w-full text-white" key={feature.id}>
              <div className='flex flex-row items-baseline py-3 lg:py-5 gap-3 '>
              <div className='w-5 h-5  '>
               <Image className='w-5 h-5  mx-auto' src={feature.img} alt={feature.alt}/>
              </div>
               <h2 className='font-rale text-[25px] font-[400]'>{feature.text}</h2>
              </div>
              <p className='font-rale text-justify text-[18px] text-neutral-400 text- font-[300]'>{feature.desc}</p>
            </div>
          ))}
        </div>
      </main>

      <main className='px-4 lg:pl-11 lg:pr-0 pt-12 lg:pt-16 pb-16 lg:pb-32 flex flex-col lg:flex-row items-center justify-center gap-14 lg:gap-28'>
        <div className='flex flex-col w-full lg:w-[50%]' >
          <div data-aos="fade-up" data-aos-duration="1500" data-aos-offset="100" className='flex flex-row items-center py-1 px-3 w-fit gap-2 bg-[#7c7c7c1f]'>
            <div className='h-1 w-1 rounded-full bg-[rgba(255,255,255,0.6)]'></div>
            <p className='font-mono uppercase text-[13px] text-[rgba(255,255,255,0.6)]'>Design Features</p>
          </div>
          <h1 data-aos="fade-up" data-aos-duration="1500" data-aos-offset="150" className='text-[32px] xs:text-[45px] pt-4 lg:pt-0 sm:text-[60px] lg:text-[80px] font-[600] capitalize font-lato leading-[1.2] '>Your pocket-sized personal assistant.</h1>
          <h4 data-aos="fade-up" data-aos-duration="1500" data-aos-offset="200" className='py-5 font-rale text-[rgba(255,255,255,0.6)] text-[20px] font-[300]'>Experience the convenience of modern technology integrated seamlessly into your life. Let us handle the complexities so you can focus 
            on what truly matters. AI solution tailored to your needs.
          </h4>
          <Link data-aos="fade-up" data-aos-duration="1500" data-aos-offset="200" href='/features' className='relative flex px-10 py-4 w-fit uppercase font-[500] font-rale text-[15px] items-center rounded-full justify-center overflow-hidden bg-[#ebebeb] text-[#050505] shadow-xl transition-all before:absolute before:h-0 before:w-0 before:rounded-full before:bg-orange-600 before:duration-500 before:ease-out  hover:before:h-56 hover:before:w-56'>
            <span className='relative z-10 '>EXPLORE</span>
          </Link>
         
        </div>

        <div className='w-full lg:w-[50%] lg:h-[100vh] '>
           <Image  className=' h-[60vh] md:h-[75vh] lg:h-[100vh] object-cover rounded-md' src={neeboPlus} alt='Neebo Device'/>
        </div>
      </main>
    </section>
  )
}

export default FeatureSection


