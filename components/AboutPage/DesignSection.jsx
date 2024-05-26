

"use client"
import Image from 'next/image';
import React from 'react'
import { ParallaxBanner, ParallaxBannerLayer } from 'react-scroll-parallax';
import device from '@/public/neebo-device-10.webp'
import device2 from '@/public/neebo-device-14.webp'
import device3 from '@/public/neebo-device-13.webp'

const DesignSection = () => {
  return (
    <section className=''>
         <main className='relative'>
            <ParallaxBanner style={{ aspectRatio: '2 / 1', height:'60vw'  }}>
             <ParallaxBannerLayer className='w-[100vw]  '  image='./neebo-device-9.webp' speed={-15} />
            </ParallaxBanner>
        </main>

        <main className='flex py-24 px-12 gap-28'>
        <div className='w-5/12 h-screen sticky top-20 '>
          <p className='uppercase font-mono text-[14px] text-neutral-300'>
            Design
          </p>
        </div>

        <div className='w-7/12 ml-auto '>
          <h1 className='text-[85px] text-[#fff] font-[600] capitalize font-rale leading-[1.1] pb-5'>Designed with You in Mind.</h1>  
          <h2 className='font-rale text-[23px] text-neutral-400 font-[300] pb-5'>
          Neebo isn't just feature-rich, it&apos;s designed for effortless use. The sleek,
          minimalist form factor feels comfortable in your hand, crafted from polished aluminum that exude quality.
          The smooth, curved edges and lightweight design make it perfect for one-handed operation,
           whether you're on the go or relaxing at home.
          
          </h2>
          <h2 className='font-rale text-[23px] text-neutral-400 font-[300] pb-5'>
          The vibrant 4-inch OLED touchscreen is not only easy on the eyes but also a joy to navigate. Neebo's user interface is designed
          for clarity, with large, colorful icons and a clean layout that puts everything you need at your fingertips.Swiping through menus
          feels intuitive, and subtle haptic feedback confirms your actions for a satisfying user experience.
          </h2>
          <div className='flex flex-col gap-4 pt-3'>
            <Image className='h-[70vh] w-full object-cover rounded-md' src={device} alt='Neebo device'/>
            <div className='flex flex-row gap-4'>
            <Image className='h-[50vh] w-6/12 object-cover rounded-md' src={device2} alt='Neebo device'/>
            <Image className='h-[50vh] w-6/12 object-cover rounded-md' src={device3} alt='Neebo device'/>
            </div>
          </div>
        </div>
      </main>

      <main className='relative'>
            <ParallaxBanner style={{ aspectRatio: '2 / 1', height:'60vw'  }}>
             <ParallaxBannerLayer className='w-[100vw] object-cover '  image='./img-neebo-3.webp' speed={-15} />
            </ParallaxBanner>
        </main>

    </section>
  )
}

export default DesignSection