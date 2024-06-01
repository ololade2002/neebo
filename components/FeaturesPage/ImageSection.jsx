
"use client"
import React from 'react'
import { Parallax } from 'react-parallax';

const ImageSection = () => {
  return (
   <section className='overflow-x-hidden py-24'>
      <Parallax className=' h-[120vh] w-[100vw] object-contain object-center ' bgImage="./neebo-device-53.webp" bgImageAlt="the cat" strength={200}> </Parallax>
      <Parallax className=' h-[120vh] w-[100vw] object-contain object-center ' bgImage="./neebo0img.webp" bgImageAlt="the cat" strength={200}> </Parallax>
      <Parallax className=' h-[120vh] w-[100vw] object-contain object-center ' bgImage="./neebo-device-2.webp" bgImageAlt="the cat" strength={200}> </Parallax>

    
   </section>
  )
}

export default ImageSection