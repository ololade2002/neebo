
"use client"
import React from 'react'

const HeroSection = () => {
  
  return (
    <section className=' px-4 py-12 lg:py-16'>
      <main className='flex flex-col text-center justify-center items-center gap-3 w-full lg:w-7/12 mx-auto'>
      <h1 className='font-rale text-[32px] xs:text-[28px] text-center sm:text-[50px] lg:text-[60px] capitalize text-white '>Stay updated with neebo</h1>
       <p className='font-rale  text-neutral-400 text-justify sm:text-center text-[22px] font-[300] '>Get the latest news, special
        offers, and exclusive updates straight to your inbox. Join our community and never miss out on the latest trends and innovations from Neebo.</p>
      </main>
    </section>
  )
}

export default HeroSection