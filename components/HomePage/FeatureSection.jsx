
import Image from 'next/image'
import React from 'react'
import neeboHome from '@/public/neebo-device-4.webp'
import neeboPlus from '@/public/neebo-device-2.webp'
import neeboPro from '@/public/neebo-device-3.webp'
import {featuresData} from '@/utils/utilsData.js'

const FeatureSection = () => {
  return (
    <section className='py-28'>
       <div className='flex flex-row items-center gap-4'>
         <div className='w-3/12'>
           <Image className='rounded-md h-[48vh] object-cover' src={neeboHome} alt='Neebo Home'/>
         </div>
         <div className='w-7/12'>
           <Image className='rounded-md h-[70vh] object-cover' src={neeboPlus} alt='Neebo Plus'/>
         </div>
         <div className='w-3/12'>
           <Image className='rounded-md h-[48vh] object-cover' src={neeboPro} alt='Neebo Pro'/>
         </div>
       </div>

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

    </section>
  )
}

export default FeatureSection