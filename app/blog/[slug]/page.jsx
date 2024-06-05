
"use client"
import React from 'react'
import {blogData} from '../../../utils/utilsData'
import Navbar from '@/components/NavbarSection/Navbar';
import Image from 'next/image';
import Footer from '@/components/Footer/Footer';

const BlogDetails = ({params}) => {
    const selectedBlog = blogData.find((blog) => blog.id ===  params.slug);

  return (
    <section className='bg-[#ecebe9]'>
       <Navbar className='z-50 relative' />
       
       <main >
        <div className='absolute w-full z-0 top-0'>
        <Image className=' object-cover h-[85vh] object-center w-screen  ' src={selectedBlog.img} alt='Neebo Device'/>
        <div className="hero-shadow1"></div>
        <div className='  blogText  z-50'>
         <h2 className='text-[30px] sm:text-[60px] lg:text-[75px] font-rale font-[500] w-full lg:w-9/12 mx-auto text-[#fff] leading-[1.3]'>{selectedBlog.title}</h2>
        </div>
        </div>
       </main>

       <main className='relative top-[70vh] pt-12 lg:pt-16  bg-[#ecebe9]'>
        <div className=' w-full px-4 lg:w-8/12 pb-10 lg:pb-24 flex flex-col text-[#161515] font-[400] gap-4 font-rale text-[20px] justify-center items-center mx-auto'>
        <h2 className=''>{selectedBlog.mainText}</h2>
        <h2 className=''>{selectedBlog.text1}</h2>
        <h2 className=''>{selectedBlog.text2}</h2>
        <h2 className=''>{selectedBlog.text3}</h2>
        <h2 className=''>{selectedBlog.text4}</h2>
        <h2 className=''>{selectedBlog.text5}</h2>
        </div>

        <Footer/>
       </main>

      
    </section>
  )
}

export default BlogDetails