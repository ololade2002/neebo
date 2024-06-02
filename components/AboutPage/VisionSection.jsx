
import React from 'react'

const VisionSection = () => {
  return (
    <section className='px-4 lg:px-12 pt-0 pb-24'>
          <main className='flex flex-col lg:flex-row gap-4 lg:gap-28'>
        <div className='w-full lg:w-5/12 lg:h-screen lg:sticky lg:top-20 '>
          <p className='uppercase font-mono text-[14px] text-neutral-300'>
          The Neebo Promise: User-Friendly and Supportive
          </p>
        </div>

        <div className='w-full lg:w-7/12 ml-auto '>
          <h1 className='text-[32px] xs:text-[40px] sm:text-[60px] lg:text-[85px] text-[#fff] font-[600] capitalize font-rale leading-[1.2] lg:leading-[1.1] pb-5'>Enhancing Your Experience.</h1>  
          <h2 className='font-rale text-[20px] xs:text-[23px] text-neutral-400 font-[300] pb-5'>
          Neebo is committed to providing an interface and user experience that are intuitive and easy to navigate. This means that regardless of 
          your technical expertise or familiarity with AI technology, Neebo strives to make interacting with it a seamless and straightforward experience.
          Whether you&apos;re accessing Neebo on a computer, tablet, or smartphone, the interface remains consistent and user-friendly across all devices.
          </h2>
          <h2 className='font-rale text-[20px] xs:text-[23px] text-neutral-400 font-[300] pb-5'>
          At Neebo, we believe that AI should be accessible and helpful to everyone. Our commitment is to provide an AI companion that enhances your
           daily life through user-friendliness, positivity, and empathy. Here&apos;s what you can expect from Neebo:
          </h2>
          
          <ul className='flex flex-col gap-3 font-rale text-[20px] xs:text-[23px] text-neutral-400 font-[300] list-disc list-inside'>
            <li className='text-neutral-400'>
                <span className='font-[400]'>Intuitive Interface: </span>Neebo is designed to be incredibly easy to use, with a user-friendly interface that anyone can navigate.</li>
            <li className='text-neutral-400'>
                <span className='font-[400]'>Positive Interactions: </span> We believe in building positive and supportive interactions. Neebo is here to listen, learn, and offer encouragement.</li>
            <li className='text-neutral-400'>
                <span className='font-[400]'>Empathetic Support: </span>Empathy is at the core of Neebo&apos;s design. Neebo is programmed to understand and respond to your needs with genuine empathy and understanding.</li>
          
          </ul>
        </div>
      </main>
    </section>
  )
}

export default VisionSection