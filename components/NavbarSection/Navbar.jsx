
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import logo from '@/public/Neebo-logo.svg'

const Navbar = () => {
  return (
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
                <Link className='navText text-white' href='/collection'>Collection</Link>
                <Link className='navText text-white' href='/contact'>Contact</Link>
                <Link className='navText text-white' href='/'>Cart</Link>
            </div>
        </div>
    </header>
  )
}

export default Navbar