
import React from 'react'
import { IoMdArrowForward } from "react-icons/io";

const JoinSection = () => {
  return (
    <section className='text-white px-4 lg:px-11 py-16 lg:py-24 h-[100vh]'>
      <main className='flex w-full lg:w-6/12 text-center flex-col mx-auto justify-center items-center'>
      <p className='text-neutral-400 font-mono'>JOIN NEEBO NOW</p>
        <h1 className=' text-[32px] xs:text-[45px] sm:text-[60px] lg:text-[90px] leading-[1.2] font-[500] py-16 font-rale capitalize'>Subscribe for Neebo insights</h1>
        <div className='flex flex-row gap-3 '>
            <input className='px-4 py-4 text-white font-[300] focus:ring-inset focus:ring-1 focus:ring-slate-400 bg-neutral-800 outline-none text-[20px] font-rale placeholder:text-white placeholder:font-[300] placeholder:text-[18px] placeholder:font-rale w-[50vh] rounded-md' type="text" placeholder='Enter Your Name' />
            <input className='px-4 py-4 text-white font-[300] focus:ring-inset focus:ring-1 focus:ring-slate-400 bg-neutral-800 outline-none text-[20px] font-rale placeholder:text-white placeholder:font-[300] placeholder:text-[18px] placeholder:font-rale w-[50vh] rounded-md' type="email" placeholder='Enter Your Email Address' />
            <div className='bg-white hover:opacity-80 flex items-center justify-center px-9 rounded-full'>
                <IoMdArrowForward className='text-black text-[30px]'/>
            </div>
        </div>
      </main>
    </section>
  )
}

export default JoinSection