
"use client"
import Image from 'next/image'
import React, { useState } from 'react'
import logo from '@/public/Neebo-logo.svg'
import { HiOutlineMenuAlt3, HiOutlineX } from "react-icons/hi";
import Link from 'next/link';

const MobileNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className='mobileNavbar w-full py-4 px-4 absolute z-50 top-0'>
      <nav className='flex flex-row justify-between items-center'>

        <div>
          <Image className='h-8 w-8' src={logo} alt='Neebo Logo'/>
        </div>

        <div onClick={toggleNavbar} className='cursor-pointer'>
          {isOpen ? (
            <HiOutlineX className='text-white relative z-50 h-9 w-9'/>
          ) : (
            <HiOutlineMenuAlt3 className='text-white h-8 w-8'/>
          )}
        </div>

      </nav>

      {isOpen && (
        <div className=' mt-4 bg-white p-4'>
          <ul className='mobileNav h-screen text-white flex flex-col'>
          <Link className='navText' href='/'>Home</Link>
          <Link className='navText' href='/about'>About</Link>
          <Link className='navText' href='/features'>Features</Link>
          <Link className='navText' href='/blog'>Blog</Link>
          <Link className='navText' href='/contact'>Contact</Link>
          <Link href='/' className='navText' >Cart</Link>
          </ul>
        </div>
      )}
    </header>
  );
}

export default MobileNavbar;


/*
import Image from 'next/image'
import React from 'react'
import logo from '@/public/Neebo-logo.svg'
import { HiOutlineMenuAlt3 } from "react-icons/hi";


const MobileNavbar = () => {
  return (
    <header className='mobileNavbar w-full py-4  px-4 absolute z-50 top-0'>
      <nav className='flex flex-row justify-between items-center'>

      <div>
        <Image className='h-6 w-6' src={logo} alt='Neebo Logog'/>
      </div>

      <div>
        <HiOutlineMenuAlt3 className='text-white h-6 w-6 '/>
      </div>
      </nav>
     
    </header>
  )
}

export default MobileNavbar

*/