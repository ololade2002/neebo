
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
