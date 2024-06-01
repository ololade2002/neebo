
import React from 'react'

const TopContent = () => {
  return (
    <section className='relative text-white flex flex-row items-start gap-32 px-11 mt-[7rem] 2xl:mt-28 pb-20 pt-12'>
        <div className='w-4/12 pt-6 '>
            <h3 className='font-mono text-[12px]'>THE BLEND OF SIMPLICITY AND INNOVATION</h3>
        </div>

        <div className='w-8/12 flex flex-col gap-6'>
            <h1 className='font-rale text-[45px] text-white'><span className='text-[#7e7e7e]'>Welcome to Neebo </span> — your reliable and friendly AI companion 
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