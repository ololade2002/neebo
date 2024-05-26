
import Image from 'next/image'
import React from 'react'
import device from '@/public/neebo-device-10.webp'
import img from '@/public/img-neebo-11.webp'

const HeroSection = () => {
  return (
    <section className='absolute top-0 bg-black'>
        <div className="hero-shadow"></div>
        <main className='flex flex-row'>
            <div className='w-6/12'>
                <Image className='h-[110vh] object-center object-cover ' src={device} alt='Neebo device'/>
            </div>
            <div className='w-6/12'>
                <Image className='h-[110vh] object-center object-cover ' src={img} alt='Neebo'/>
            </div>
        </main>
        <div className='flex justify-between items-center px-11 py-8'>
            <p className='font-mono uppercase text-white opacity-50 font-[300] text-[14px]'>Neebo Industry</p>
            <p className='font-mono uppercase text-white opacity-50 font-[300] text-[14px]'>(2024)</p>
            <p className='font-mono uppercase text-white opacity-50 font-[300] text-[14px]'>Neebo Industry</p>
        </div>
    </section>
  )
}

export default HeroSection