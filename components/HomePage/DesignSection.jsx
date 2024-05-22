
import Image from 'next/image'
import React from 'react'
import neebo1 from '@/public/neebo-device-6.webp'
import neebo2 from '@/public/neebo-device-5.webp'
import neebo3 from '@/public/neebo-device-7.webp'
import { designData } from '@/utils/utilsData'

const DesignSection = () => {
  return (
    <section className='bg-[#dadada] py-24'>
      <main className='relative text-black flex flex-row items-start gap-32 px-11 pb-20'>
       <div className='w-5/12 pt-6 '>
        <h3 className='font-mono text-[#111111] text-[12px]'>THE BLEND OF EFFORTLESS INGENUITY AND SMART SIMPLICITY</h3>
       </div>  
       <div className='w-7/12  flex flex-col gap-6'>
        <h1 className='text-[85px] text-[#000] font-[600] capitalize font-lato leading-[1.2] '>Designed to make your daily life simpler.</h1>
        <h4 className='py-5 font-rale text-[#111111] opacity-90 text-[25px] font-[400]'>Experience the convenience of modern technology integrated seamlessly into your life. Let us handle the complexities so you can focus 
            on what truly matters. AI solution tailored to your needs.
        </h4>
        <button className='relative flex px-12 py-5 w-fit uppercase font-[500] font-rale text-[15px] items-center rounded-full justify-center overflow-hidden bg-[#ebebeb] text-[#050505] shadow-xl transition-all before:absolute before:h-0 before:w-0 before:rounded-full before:bg-orange-600 before:duration-500 before:ease-out  hover:before:h-56 hover:before:w-56'>
        <span className='relative z-10 '>Pre order</span>
        </button>
       </div>
      </main>

      <main className=''> 
        <div className='flex flex-row items-center justify-center px-6 gap-4'>
            <Image className='w-6/12 h-[70vh] object-cover' src={neebo1} alt='neebo device'/>
            <Image className='w-6/12 h-[70vh] object-cover' src={neebo2} alt='neebo device'/>
        </div>
        <div className=' mx-auto -mt-12 '>
            <Image className='h-[100vh]' src={neebo3} alt='neebo device'/>
        </div>
      </main>

      <main className='px-11'>
        <div className='flex flex-row gap-6'>
          {designData.map((feature) => (
            <div className="feature-preview w-full  text-black" key={feature.id}>
             
              <div className='w-24 h-24 rounded-[50%] bg-green-500 '>
               <Image className='w-12 h-12 object-center mx-auto' src={feature.img} alt={feature.alt}/>
              </div>
               <h2 className='font-rale text-[25px] font-[400]'>{feature.text}</h2>
              
              <p className='font-rale text-[18px] text-black text- font-[300]'>{feature.desc}</p>
            </div>
          ))}
        </div>
      </main>

    </section>
  )
}

export default DesignSection
