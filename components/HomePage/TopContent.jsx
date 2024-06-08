
"use client"
import React from 'react';
import useTextAnimation from '@/hooks/useTextAnimation'

const TopContent = () => {
  useTextAnimation('.subTextt');

  return (
    <section className='relative text-white flex flex-col lg:flex-row items-start gap-2 lg:gap-32 px-4 lg:px-11 pb-14 lg:pb-20 pt-12'>
        <div className='w-full lg:w-4/12 pt-6 '>
            <h3 className='subTextt font-mono text-[13px] pb-4 lg:pb-0 lg:text-[12px]'>THE BLEND OF SIMPLICITY AND INNOVATION</h3>
        </div>
        <div  className='w-full lg:w-8/12 flex flex-col gap-6'>
            <h1 className=' font-rale text-pretty text-[30px] md:text-[45px] text-white'>
              <span className=' text-neutral-400'>Welcome to Neebo </span> — your reliable and friendly AI companion 
              designed to make your daily life simpler and more enjoyable in this fast-paced world.
            </h1>
            <button className='relative flex px-12 py-5 w-fit uppercase font-[500] font-rale text-[15px] items-center rounded-full justify-center overflow-hidden bg-[#ebebeb] text-[#050505] shadow-xl transition-all before:absolute before:h-0 before:w-0 before:rounded-full before:bg-orange-600 before:duration-500 before:ease-out  hover:before:h-56 hover:before:w-56'>
            <span className='relative z-10 '>Pre order</span>
            </button>
        </div>
    </section>
  )
}

export default TopContent

