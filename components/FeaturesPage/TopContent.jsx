"use client"

import React from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';


const TopContent = () => {
    useEffect(() => {
        AOS.init()
        },[])  

  return (
    <section className=''>
        <div className='bg-black py-40 ' >
            <h1 data-aos="fade-up" data-aos-duration="1000" data-aos-offset="100" className='text-[170px] text-center leading-[1.1] font-[400] text-[#ecebe9]'>SAY HELLO </h1>
            <h1 data-aos="fade-up" data-aos-duration="1000" data-aos-offset="150" className='text-[170px] text-center leading-[1.1] font-[400] text-[#ecebe9]'>TO SMARTER</h1>
            <h1 data-aos="fade-up" data-aos-duration="1000" data-aos-offset="200" className='text-[160px] text-center leading-[1.1] font-[400] text-[#ecebe9]'>DAYS WITH NEEBO</h1>
        </div>
    </section>
  )
}

export default TopContent