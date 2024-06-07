
import Image from 'next/image';
import React from 'react'
import { IoArrowForward } from "react-icons/io5";
import logo from '@/public/logo-neebo-b.svg'
import Link from 'next/link';

const Footer = () => {
  return (
    <section className=' pt-16 px-6 lg:px-11 bg-[#dadada] '>
        <div className='flex gap-6 lg:gap-0 pb-16 flex-col lg:flex-row justify-between mx-auto w-full lg:w-[80%]  '>
        <div className='footer-head '>
            <h2 className='footer-text'>Explore</h2>
            <ul className='footer-ul'>
                <Link href='/' className='footer-li'>Home</Link>
                <Link href='/features' className='footer-li'>Features</Link>
                <Link href='/about' className='footer-li'>About</Link>
                <Link href='/blog' className='footer-li'>Blog</Link>
                <Link href='/contact' className='footer-li'>Contact Us</Link>
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
            <div className='flex w-full flex-row gap-0'>
            <input type='email' className='py-3 px-4 w-full lg:w-[18vw] bg-[#bebebe66] text-rale placeholder:text-[20px] lg:placeholder:text-[16px] placeholder:text-[rgba(0,0,0,0.6)] font-rale' placeholder='Enter your email'/>
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
