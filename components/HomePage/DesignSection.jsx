
"use client"
import Image from 'next/image'
import neebo1 from '@/public/neebo-device-6.webp'
import neebo2 from '@/public/neebo-device-5.webp'
import neebo3 from '@/public/neebo-device-7.webp'
import neebo4 from '@/public/neebo-device-8.webp'
import neebo6 from '@/public/neebo-device-9.webp'
import { designData } from '@/utils/utilsData'
import React, {useEffect} from 'react';
import useTextAnimation from '@/hooks/useTextAnimation'


const DesignSection = () => {
  useTextAnimation('.subText1');

  return (
    <section className='bg-[#dadada] pt-10 lg:pt-24'>
      <main className='relative text-black flex flex-col lg:flex-row items-start gap-4 lg:gap-32 px-4 lg:px-11 pb-16 lg:pb-20'>
       <div className='w-full lg:w-5/12 pt-6 '>
        <h3 className='subText1 font-mono text-[#111111] text-[12px]'>THE BLEND OF EFFORTLESS INGENUITY AND SMART SIMPLICITY</h3>
       </div>  
       <div className='w-full lg:w-7/12  flex flex-col gap-6'>
        <h1 data-aos="fade-up" data-aos-duration="1500" data-aos-offset="100" className='text-[32px] xs:text-[45px] sm:text-[50px] lg:text-[85px] text-[#000] font-[600] capitalize font-lato leading-[1.2] '>Designed to make your daily life simpler.</h1>
        <h4 data-aos="fade-up" data-aos-duration="1500" data-aos-offset="150" className='py-0 lg:py-5 font-rale text-[#111111] opacity-90 text-[22px] xs:text-[25px] font-[400]'>Experience the convenience of modern technology integrated seamlessly into your life. Let us handle the complexities so you can focus 
            on what truly matters. AI solution tailored to your needs.
        </h4>
        <button data-aos="fade-up" data-aos-duration="1500" data-aos-offset="150" className='relative flex px-12 py-5 w-fit uppercase font-[500] font-rale text-[15px] items-center rounded-full justify-center overflow-hidden bg-[#ebebeb] text-[#050505] shadow-xl transition-all before:absolute before:h-0 before:w-0 before:rounded-full before:bg-orange-600 before:duration-500 before:ease-out  hover:before:h-56 hover:before:w-56'>
        <span className='relative z-10 '>Pre order</span>
        </button>
       </div>
      </main>

      <main className='px-4 lg:px-6 flex flex-col gap-3 lg:gap-4'> 
        <div className='flex flex-row items-center justify-center gap-3 lg:gap-4'>
          <div className='w-6/12'>
            <Image className='h-[60vw] lg:h-[70vh] rounded-md object-cover' src={neebo1} alt='neebo device'/>
          </div>
          <div className='w-6/12'>
            <Image className='h-[60vw] lg:h-[70vh] rounded-md object-cover' src={neebo2} alt='neebo device'/>
          </div>
        </div>
        <div className=' mx-auto   '>
            <Image className='h-[70vw] lg:h-[100vh] w-[100vw] rounded-md object-cover object-center' src={neebo3} alt='neebo device'/>
        </div>
      </main>

      <main className='px-4 lg:px-11 py-16 lg:py-20'>
        <div className='flex flex-col lg:flex-row gap-6'>
          {designData.map((feature) => (
            <div data-aos="fade-up" data-aos-duration="1500" data-aos-offset="100" className="feature-preview w-full  text-black" key={feature.id}>
             
              <div className='bg-[#ecebe9] h-16 w-16 flex justify-center items-center rounded-full'>
               <Image className='w-8 h-8 invert-0 brightness-0 object-contain mx-auto my-auto ' src={feature.img} alt={feature.alt}/>
              </div>
               <h2 className='font-rale pt-6 pb-2 text-[25px] text-[#000] font-[500]'>{feature.text}</h2>
              <p className='font-rale text-[18px] text-[#111] opacity-80 text- font-[400]'>{feature.desc}</p>
            </div>
          ))}
        </div>
      </main>

      <main className='px-4 lg:px-11 pt-10 lg:pt-24 pb-20 lg:pb-32 flex flex-col gap-4 lg:gap-8'>
        <div className='flex flex-col lg:flex-row gap-4 lg:gap-6'>
          <div className='w-full lg:w-6/12 bg-[#ecebe9] rounded-md flex flex-col justify-between h-[50vh] lg:h-[72vh] p-4 lg:p-10'>
            <h2 className='subText1 text-[32px] xs:text-[45px] sm:text-[60px] lg:text-[76px] text-[#000] font-rale font-[600] leading-[1.1] '>Smart Connectivity</h2>
            <div className='flex flex-col '>
              <h4 className='text-[26px]  font-rale text-[#111]'>Effortless Ingenuity</h4>
              <p className='text-[#111] pt-1 text-[19px] opacity-70 font-rale'>Stay connected with your smart home devices, enabling you to control your environment with simple voice commands.</p>
            </div>
          </div>
          <div className='w-full lg:w-6/12'>
            <Image className='h-[55vh] lg:h-[72vh] rounded-md object-cover' src={neebo1} alt='Neebo device'/>
          </div>
        </div>

        <div className='flex flex-col lg:flex-row gap-4 lg:gap-6'>
          <div className='w-full lg:w-6/12 bg-[#ecebe9] rounded-md flex flex-col justify-between h-[50vh] lg:h-[72vh] p-4 lg:p-10'>
            <h2 className='subText1 text-[32px] xs:text-[45px] sm:text-[60px] lg:text-[76px] text-[#000] font-rale font-[600] leading-[1.1] '>Portable Perfection</h2>
            <div className='flex flex-col '>
              <h4 className='text-[26px]  font-rale text-[#111]'>Effortless Ingenuity</h4>
              <p className=' text-[#111] pt-1 text-[19px] opacity-70 font-rale'>Neebo is designed for on-the-go assistance, fitting seamlessly into your lifestyle.</p>
            </div>
          </div>
          <div className='w-full lg:w-6/12'>
            <Image className='h-[55vh] lg:h-[72vh] rounded-md object-cover' src={neebo4} alt='Neebo device'/>
          </div>
        </div>
      </main>

      <main className=' pt-0 relative'>
        <Image className='object-cover object-left-bottom h-[100vh] lg:h-[150vh] w-[100%]' src={neebo6} alt='Neebo device'/>

        <div className='absolute top-12 z-30 left-5 lg:left-11 flex flex-col gap-4 '>
         <div className='flex flex-row items-center py-1 px-3 w-fit gap-2 bg-[#7c7c7c1f]'>
            <div className='h-1 w-1 rounded-full bg-[rgba(255,255,255,0.6)]'></div>
            <p className='font-mono uppercase text-[13px] text-[rgba(255,255,255,0.6)]'>Get Neebo Now</p>
          </div>
          <h2 className='subText1 font-rale text-[30px] xs:text-[36px] sm:text-[45px] w-full lg:w-7/12 text-white'>Neebo — Where AI Meets Your Daily Life. </h2>
          <button className='relative flex px-12 py-5 w-fit uppercase font-[500] font-rale text-[15px] items-center rounded-full justify-center overflow-hidden bg-[#ebebeb] text-[#050505] shadow-xl transition-all before:absolute before:h-0 before:w-0 before:rounded-full before:bg-orange-600 before:duration-500 before:ease-out  hover:before:h-56 hover:before:w-56'>
            <span className='relative z-10 '>Pre order</span>
          </button>
        </div>
      </main>

    </section>
  )
}

export default DesignSection
