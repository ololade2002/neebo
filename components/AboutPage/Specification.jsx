
"use client"
import { specificationData } from '@/utils/utilsData';
import React from 'react'
import { ParallaxBanner, ParallaxBannerLayer } from 'react-scroll-parallax';

const Specification = () => {
  return (
    <section>
        <main className='relative'>
            <ParallaxBanner style={{ aspectRatio: '2 / 1', height:'60vw'  }}>
             <ParallaxBannerLayer className='w-[100vw]  '  image='./img-neebo-4.webp' speed={-15} />
             <div className='absolute w-[60%] z-20 top-20 pl-11'>
                <h2 className='text-[80px] font-rale leading-[1.1] capitalize font-[600]  text-white'>Modern aesthetics crafted for elegance and comfort.</h2>
            </div>
            </ParallaxBanner>
        </main>

        <main className='flex py-24 px-12 gap-28'>
        <div className='w-5/12 h-screen sticky top-20 '>
          <p className='uppercase font-mono text-[14px] text-neutral-300'>
            Specifications
          </p>
        </div>

        <div className='w-7/12 ml-auto '>
          {specificationData.map((spec) => (
            <div className="spec-preview" key={spec.id}>
                <div className='flex flex-row gap-16 justify-between'>
                  <h2 className='w-4/12 text-white font-rale font-[400] text-[22px]'>{spec.text}</h2>
                  <h2 className='w-8/12 text-neutral-400 font-rale font-[300] text-[20px]'>{spec.text2}</h2>
                </div>
                <div className='h-[1px] my-6 w-full bg-white opacity-15'></div>
            </div>
          ))}
        </div>
      </main>

    </section>
  )
}

export default Specification