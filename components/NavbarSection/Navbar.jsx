
"use client"
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import logo from '@/public/Neebo-logo.svg'
import { useState } from 'react'
import { Bars3BottomRightIcon, XMarkIcon } from '@heroicons/react/20/solid'
import {BsBag} from 'react-icons/bs'

const Navbar = () => {
    const [mobile,setMobile] = useState(false)

  return (
    <header className='relative z-50'>
        
        <div className={mobile ? 'mobileNav h-screen' : ' webNav flex flex-row justify-between items-center px-11 w-[100%]  h-[80px]'} onClick={() => setMobile(false)} >
            <div className='items-left'>
                <Link className='navText text-white' href='/'>Home</Link>
                <Link className='navText text-white' href='/about'>About</Link>
                <Link className='navText text-white' href='/features'>Features</Link>
            </div>

            <div className='webNav'>
                <Image className='h-8 w-8' src={logo} alt='Neebo-logo'/>
            </div>

            <div className='items-right'>
                <Link className='navText text-white' href='/blog'>Blog</Link>
                <Link className='navText text-white' href='/contact'>Contact</Link>
                <Link href='/' className='navText text-white' >Cart</Link>
            </div>
        </div>

         {/*Mobile Nav */}
         <button className='menu px-4 py-4 flex items-center justify-between gap-4 xs:gap-6 w-full' onClick={() =>setMobile(!mobile)}>
         <Image className='h-8 w-8' src={logo} alt='Neebo-logo'/>
         {mobile ? <XMarkIcon className='  w-9 h-9 text-white'/> : <Bars3BottomRightIcon className='w-8 h-8 text-white'/>  }  
         </button>

    </header>
  )
}

export default Navbar


/*
 <header className='relative z-50'>
        <div className='flex flex-row justify-between items-center px-11 w-[100%]  h-[80px]'>
            <div className='items-left'>
                <Link className='navText text-white' href='/'>Home</Link>
                <Link className='navText text-white' href='/about'>About</Link>
                <Link className='navText text-white' href='/features'>Features</Link>
            </div>

            <div>
                <Image className='h-8 w-8' src={logo} alt='Neebo-logo'/>
            </div>

            <div className='items-right'>
                <Link className='navText text-white' href='/blog'>Blog</Link>
                <Link className='navText text-white' href='/contact'>Contact</Link>
                <Link className='navText text-white' href='/'>Cart</Link>
            </div>
        </div>
    </header>
*/