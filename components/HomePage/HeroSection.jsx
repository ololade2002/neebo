
import React from 'react'
import Image from 'next/image'
import main from '@/public/img-neebo-3.webp'

const HeroSection = () => {
  return (
    <section className='relative '>
       <div className="content ">
         <Image className='w-full h-[120vh] object-cover object-center' src={main} alt='Man wearing neebo'/>
       </div>

       <div className="heroText flex gap-8 flex-col w-[30%] absolute top-[43%] right-[2%] leading-[1.4] z-50  ">
         <h2 className='text-[34px] font-rale text-[#ecebe9]'>Neebo is where design meets functionality .</h2>
          <button className='relative flex px-12 py-5 w-fit uppercase font-[500] font-rale text-[14px]   items-center rounded-full justify-center overflow-hidden bg-[#ebebeb] text-[#050505] shadow-xl transition-all before:absolute before:h-0 before:w-0 before:rounded-full before:bg-orange-600 before:duration-500 before:ease-out hover:shadow-orange-500 hover:before:h-56 hover:before:w-56'>
          <span className='relative z-10 font-[600]'>Pre order</span>
         </button>
       </div>

       <div className='heroSubText absolute bottom-[3%] left-11  '>
        <p className='font-mono text-[#ececec] uppercase text-[15px] font-[400]'>2024</p>
        <p className='font-mono text-[#ececec] uppercase text-[15px] font-[400]'>Neebo industries</p>
       </div>
    </section>
  )
}

export default HeroSection