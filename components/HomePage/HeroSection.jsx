"use client"
import React, { useEffect } from 'react'
import Image from 'next/image'
import main from '@/public/img-neebo-3.webp'
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {useGSAP} from '@gsap/react'

gsap.registerPlugin(useGSAP)
gsap.registerPlugin(ScrollTrigger);

const HeroSection = () => {


  return (
    <section className=''>
       <div className="content ">
         <Image className='heroImg w-full relative h-[100vh] lg:h-[130vh] object-cover object-center' src={main} alt='Man wearing neebo'/>
       </div>
    </section>
  )
}

export default HeroSection