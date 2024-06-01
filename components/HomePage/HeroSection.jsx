
import React from 'react'
import Image from 'next/image'
import main from '@/public/img-neebo-3.webp'

const HeroSection = () => {
  return (
    <section className='relative h-[120vh] 2xl:h-[130vh] '>
       <div className="content ">
         <Image className='w-full h-[130vh] object-cover object-center' src={main} alt='Man wearing neebo'/>
       </div>


       <div className='heroSubText absolute bottom-[8%] left-11  '>
        <p className='font-mono text-[#ececec] uppercase text-[15px] font-[400]'>2024</p>
        <p className='font-mono text-[#ececec] uppercase text-[15px] font-[400]'>Neebo industries</p>
       </div>
    </section>
  )
}

export default HeroSection