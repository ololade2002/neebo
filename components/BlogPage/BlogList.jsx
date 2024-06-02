
import { blogData } from '@/utils/utilsData'
import Link from 'next/link'
import React from 'react'
import Image from 'next/image'

const BlogList = () => {
  return (
   <section className='py-24 px-4 lg:px-11 bg-[#181818]'>
    <main className=' flex flex-col md:flex-row gap-8 lg:gap-5  justify-between'>
      {blogData.map((blog) => (
        <Link href={`/blog/${blog.id}`} className="w-full md:w-4/12" key={blog.id}>
         <div className='flex flex-col gap-4'>

         <div className='w-[100%] lg:h-[80%] relative overflow-hidden '>
            <Image className='h-[60vh] lg:h-[50vh] object-cover rounded-md hover:scale-110 transition duration-[0.9s] cursor-pointer'  src={blog.img} alt='Neebo Device'/>
         </div>
          <h2 className='text-white font-rale text-[25px] lg:h-[20vh] '>{blog.title}</h2>
          <p className='text-neutral-400 font-rale flex gap-2 font-[400]'>Press <span className='text-white'>|</span> <span className='hover:underline'>{blog.press}</span></p>
         </div>
        </Link>
      ))}
    </main>
   </section>
  )
}

export default BlogList