
"use client"
import { specificationData } from '@/utils/utilsData';
import React from 'react'
import { ParallaxBanner, ParallaxBannerLayer } from 'react-scroll-parallax';
import useTextAnimation from '@/hooks/useTextAnimation'

const Specification = () => {
  useTextAnimation('.subTextt')
  return (
    <section>
        <main className='relative'>
            <ParallaxBanner style={{ aspectRatio: '2 / 1', height:'120vh'  }}>
             <ParallaxBannerLayer className='w-[100vw]  '  image='./img-neebo-4.webp' speed={-15} />
             <div className='absolute w-full lg:w-[60%] z-20 top-10 lg:top-20 pl-2 lg:pl-11'>
                <h2 data-aos="fade-up" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="600" className=' text-[32px] xs:text-[40px] sm:text-[60px] lg:text-[80px] font-rale leading-[1.1] capitalize font-[600]  text-white'>Modern aesthetics crafted for elegance and comfort.</h2>
            </div>
            </ParallaxBanner>
        </main>

        <main className='flex flex-col lg:flex-row  pt-20 pb-16 lg:py-24 px-4 lg:px-12 gap-8 lg:gap-28'>
        <div className='w-full lg:w-5/12 relative lg:h-screen lg:sticky lg:top-20 '>
          <p className='subTextt uppercase font-mono text-[14px] text-neutral-300'>
            Specifications
          </p>
        </div>

        <div className='w-full lg:w-7/12 ml-auto '>
          {specificationData.map((spec) => (
            <div className="spec-preview" key={spec.id}>
                <div className='flex flex-col xs:flex-row gap-4 xs:gap-6 lg:gap-16 justify-between'>
                  <h2 className='w-full xs:w-4/12 text-white font-rale font-[400] text-[22px]'>{spec.text}</h2>
                  <h2 className='w-full xs:w-8/12  text-neutral-400 font-rale font-[300] text-[20px]'>{spec.text2}</h2>
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