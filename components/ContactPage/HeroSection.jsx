"use client"
import Image from 'next/image'
import React, { useState } from 'react'
import neebo from '@/public/img-neebo-10.webp'
import logo from '@/public/Neebo-logo.svg'
import Link from 'next/link'

const HeroSection = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone:'',
        city:'',
        agree: false,
        accept: false  
      });
      const [submitted, setSubmitted] = useState(false);
      const [error, setError] = useState('');
    
      const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        const val = type === 'checkbox' ? checked : value;
        setFormData((prevData) => ({
          ...prevData,
          [name]: val,
        }));
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        if (formData.firstName && formData.lastName && formData.email ) {
          setSubmitted(true);
        } else {
          setError('Please fill in all fields and agree to the terms');
        }
      };
    
  return (
    <section className='h-[100vh]'>
        <main className='flex flex-row '>
          <div className='w-6/12'>
              <Image className='h-[100vh] object-cover' src={neebo} alt='Neebo Device'/>
          </div>
  
          <div className='w-6/12 h-[100vh] bg-black px-[20px] sm:px-[40px] md:px-[70px] py-[48px]'>
          <Link href='/'>
            <Image className='h-8 w-full mb-0 object-contain' src={logo} alt='Atlas logo'/>
            </Link>

              {!submitted ? (
                <form className='flex flex-col gap-5' onSubmit={handleSubmit}>
 
                <div className='my-8 flex flex-col gap-0'>
                   <h2 className='text-white text-center text-[28px] xs:text-[32px] sm:text-[37px] font-rale'>Welcome back.</h2>
                   <p className='text-neutral-400 font-[300] py-2 text-center text-[17px] font-rale'>Please tell us a bit about yourself so that we may review your request.</p>
                 </div>
                  
                  <label className='border-teal-500' >
                    <input type="text" className='form-input' placeholder='Firstname' name="firstName"  required value={formData.firstName} onChange={handleChange} />
                  </label>

                  <label>
                    <input type="text" className='form-input' placeholder='Lastname' name="lastName" required value={formData.lastName} onChange={handleChange} />
                  </label>

                  <label>
                    <input type="email" className='form-input' placeholder='Email' name="email" required value={formData.email} onChange={handleChange}/>
                  </label>
 
                  <button className='bg-white w-fit mx-auto px-14 hover:opacity-65  font-rale mt-5 text-[20px] rounded-full py-4' type="submit">Submit</button>
                  {error && <p className='font-rale text-red-500 text-center text-[18px] pt-2' >{error}</p>}
                </form>
               ) : (
            <div>
              <p className='text-white text-center font-rale text-4xl font-[400] pt-8'>Thank you, {formData.firstName}!</p>
              <p className='text-neutral-400 font-[300] text-center font-rale text-[20px] my-3'>Your request has been submitted.</p>
              <button className='uppercase py-4 bg-orange-500 w-full text-white font-rale my-16 hover:opacity-90 mx-auto rounded-full'>Neebo is better with friends</button>
            </div>
             )}
            </div>

           
 

        </main>
    </section>
  )
}

export default HeroSection