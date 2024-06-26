
import Image from 'next/image'
import React from 'react'
import device from '@/public/neebo-device-10.webp'
import img from '@/public/img-neebo-11.webp'

const HeroSection = () => {
  return (
    <section className='absolute top-0 bg-[#000] w-full'>
        <div className="hero-shadow1"></div>
        <main className='flex webContent md:flex-row w-[100%]'>
            <div className='flex-1 '>
                <Image className='h-[110vh] w-full object-center object-cover ' src={device} alt='Neebo device'/>
            </div>
            <div className='flex-1 '>
                <Image className='h-[110vh] w-full object-center object-cover ' src={img} alt='Neebo'/>
            </div>
        </main>
        <main className='mobileContent'>
        <div className='flex-1 '>
                <Image className='h-[110vh] w-full object-center object-cover ' src={img} alt='Neebo'/>
            </div>
        </main>

        <div className='flex justify-between flex-wrap items-center py-4 lg:px-11 lg:py-8'>
            <p className='font-mono uppercase text-white opacity-50 font-[300] text-[14px]'>Neebo Industry</p>
            <p className='font-mono uppercase text-white opacity-50 font-[300] text-[14px]'>(2024)</p>
            <p className='font-mono uppercase text-white opacity-50 font-[300] text-[14px]'>Neebo Industry</p>
        </div>
    </section>
  )
}

export default HeroSection