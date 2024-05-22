
import Image from 'next/image'
import React from 'react'
import neeboHome from '@/public/neebo-device-4.webp'
import neeboPlus from '@/public/neebo-device-2.webp'
import neeboPro from '@/public/neebo-device-3.webp'
import {featuresData} from '@/utils/utilsData.js'
import ImageCarouselSection from './ImageCarouselSection'

const FeatureSection = () => {
  return (
    <section className='py-28 text-white'>
       <main className='flex flex-row items-center gap-4'>
         <div className='w-3/12'>
           <Image className='rounded-md h-[48vh] object-cover' src={neeboHome} alt='Neebo Home'/>
         </div>
         <div className='w-7/12'>
           <Image className='rounded-md h-[70vh] object-cover' src={neeboPlus} alt='Neebo Plus'/>
         </div>
         <div className='w-3/12'>
           <Image className='rounded-md h-[48vh] object-cover' src={neeboPro} alt='Neebo Pro'/>
         </div>
       </main>

       <main className='px-11 py-24'>
        <h2 className=' text-[170px] text-center leading-[1] font-[400] text-[#ecebe9]'>YOUR FRIENDLY AI SIDEKICK</h2>
       </main>

      <main className='px-11'>
        <div className='flex flex-row gap-8'>
          {featuresData.map((feature) => (
            <div className="feature-preview w-full text-white" key={feature.id}>
              <div className='flex flex-row items-baseline py-5 gap-3 '>
              <div className='w-5 h-5  '>
               <Image className='w-5 h-5  mx-auto' src={feature.img} alt={feature.alt}/>
              </div>
               <h2 className='font-rale text-[25px] font-[400]'>{feature.text}</h2>
              </div>
              <p className='font-rale text-[18px] text-neutral-400 text- font-[300]'>{feature.desc}</p>
            </div>
          ))}
        </div>
      </main>

      <main className='pl-11 pr-5 pt-24 flex flex-row  justify-center gap-12'>
        <div className='flex flex-col w-[50%]' >
          <div className='flex flex-row items-center py-1 px-3 w-fit gap-2 bg-[#7c7c7c1f]'>
            <div className='h-1 w-1 rounded-full bg-[rgba(255,255,255,0.6)]'></div>
            <p className='font-mono uppercase text-[13px] text-[rgba(255,255,255,0.6)]'>Design Features</p>
          </div>
          <h1 className='text-[80px] font-[600] capitalize font-lato leading-[1.2] '>Your pocket-sized personal assistant.</h1>
          <h4 className='py-5 font-rale text-[20px] font-[300]'>Experience the convenience of modern technology integrated seamlessly into your life. Let us handle the complexities so you can focus 
            on what truly matters. AI solution tailored to your needs.
          </h4>
          <button className='relative flex px-10 py-4 w-fit uppercase font-[500] font-rale text-[15px] items-center rounded-full justify-center overflow-hidden bg-[#ebebeb] text-[#050505] shadow-xl transition-all before:absolute before:h-0 before:w-0 before:rounded-full before:bg-orange-600 before:duration-500 before:ease-out  hover:before:h-56 hover:before:w-56'>
            <span className='relative z-10 '>EXPLORE</span>
          </button>
         
        </div>

        <div className='w-[50%] '>
           <ImageCarouselSection/>
        </div>
      </main>

    

    </section>
  )
}

export default FeatureSection