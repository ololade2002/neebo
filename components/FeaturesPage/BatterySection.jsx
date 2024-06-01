
import Image from 'next/image'
import React from 'react'
import pattern from '@/public/neebo-device-10.webp'
import icon from '@/public/ar_icon.png'

const BatterySection = () => {
  return (
    <section className='bg-[#fff] px-11 py-24'>
      <main className=' mx-auto text-center'>
        <h4 className='w-8/12 text-center mx-auto text-[70px] font-[700] text-[#1d1d1f] leading-[1.1]  font-rale'>A battery that keeps stayin&apos; alive.</h4>
        <h1 className='text-[600px] leading-[0.8] font-[500]'>20</h1>
        <h4 className='w-8/12 mx-auto text-center py-12 font-rale text-[22px]'>hours of continuous use, whether you&apos;re listening to music,
            watching movies, or engaging in conversations—all with Active Noise
            Cancellation and Spatial Audio enabled. Charging is simple and efficient 
            via the Lightning connector. Plus, when you&apos;re in a hurry, a quick 5-minute
            charge provides 1.5 hours of listening time, ensuring that Neebo is always 
            ready to support your busy lifestyle.
        </h4>
      </main>

      <main className='bg-[#f4f4f4] rounded-xl flex flex-row gap-6 items-center justify-center'>
        <div className='flex-1 '>
            <Image src={pattern} alt='Device' className='w-full h-[80vh] rounded-xl object-cover'/>
        </div>
        <div className='flex-1 flex flex-col gap-4 py-8 px-8'>
            <Image src={icon} alt='icon'/>
            <h2 className='font-rale text-[18px] '>Neebo&apos;s durable and long-lasting battery supports extended use without the need for
                frequent recharging. Whether you&apos;re at home or on the move, Neebo ensures consistent
                performance and reliability, providing uninterrupted assistance whenever you need it.
            </h2>
            <h2 className='font-rale text-[18px]'>Neebo&apos;s advanced technology intelligently manages power usage, ensuring that the device
                operates efficiently without compromising performance. Whether it&apos;s adjusting the thermostat, 
                controlling lighting, or managing home security systems, Neebo uses just the right amount of 
                energy needed for each task, conserving resources and reducing waste.</h2>
        </div>

      </main>
    </section>
  )
}

export default BatterySection