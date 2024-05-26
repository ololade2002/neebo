
import Image from 'next/image';
import React from 'react'
import { IoArrowForward } from "react-icons/io5";
import logo from '@/public/logo-neebo-b.svg'

const Footer = () => {
  return (
    <section className=' pt-16  px-11 bg-[#dadada] '>
        <div className='flex pb-16 flex-row justify-between mx-auto  w-[80%]  '>
        <div className='footer-head '>
            <h2 className='footer-text'>Explore</h2>
            <ul className='footer-ul'>
                <li className='footer-li'>Home</li>
                <li className='footer-li'>Featues</li>
                <li className='footer-li'>Collection</li>
                <li className='footer-li'>Blog</li>
                <li className='footer-li'>Contact Us</li>
            </ul>
        </div>

        <div className='footer-head '>
            <h2 className='footer-text'>Resources</h2>
            <ul className='footer-ul'>
                <li className='footer-li'>Documentations</li>
                <li className='footer-li'>Tutorials</li>
                <li className='footer-li'>Community</li>
                <li className='footer-li'>Suggestion</li>
                <li className='footer-li'>Newsletter</li>
            </ul>
        </div>

        <div className='footer-head '>
            <h2 className='footer-text'>Legal And Privacy</h2>
            <ul className='footer-ul'>
                <li className='footer-li'>Privacy</li>
                <li className='footer-li'>Terms Of Service</li>
            </ul>
        </div>

        <div className='footer-head '>
            <h2 className='footer-text'>Sign up for our newsletter</h2>
            <div className='flex flex-row gap-0'>
            <input type='email' className='py-3 px-4 w-[18vw] bg-[#bebebe66] text-rale placeholder:text-[rgba(0,0,0,0.6)] font-rale' placeholder='Enter your email'/>
            <div className='bg-[#bebebe66] flex items-center justify-center px-3'>
                <IoArrowForward className='text-[20px]'/>
            </div>
            </div>
        </div>
        </div>

        <div className="line  w-full h-[1px]  bg-black opacity-10"></div>

        <div className='flex justify-between pt-8 pb-16'>
            <p className='uppercase font-mono'>Neebo industry</p>
            <p className='uppercase '>&copy; <span className='font-mono'>2024 NEEBO</span></p>
        </div>
        <div className='mx-auto flex justify-center  items-center '>
            <Image className='object-cover object-top h-[30vh]' alt='Logo' src={logo}/>
        </div>
    </section>
  )
}

export default Footer
