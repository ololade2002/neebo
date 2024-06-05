
import React from 'react'
import Image from 'next/image'
import main from '@/public/img-neebo-3.webp'

const HeroSection = () => {
  return (
    <section className=''>
       <div className="content ">
         <Image className='w-full relative h-[100vh] lg:h-[130vh] object-cover object-center' src={main} alt='Man wearing neebo'/>
       </div>
    </section>
  )
}

export default HeroSection