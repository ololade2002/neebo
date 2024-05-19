
"use client"
import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Link from 'next/link';
import {useGSAP} from '@gsap/react'

gsap.registerPlugin(useGSAP)
gsap.registerPlugin(ScrollTrigger);


const Navbar = () => {


  useGSAP (() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: '.content',
        start: 'top bottom',
        end: 'top center',
        scrub: 1,
      }
    });

    tl.fromTo('.logo', {
      y: '52vh',
      scale: 25,
      yPercent: -50,
      color: 'white'
    }, {
      scale: 2.5,
      y: '50',
      color: 'white',
      ease: 'power1.inOut',
    })
    .fromTo('.navText', {
      opacity: 0,
      y: 50,
      color:'#000',
    }, {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: 'power1.inOut',
      color:'#fff'
    }, 0); 


    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <div>
      <div className="nav">
        <div className="items-left">
          <Link className='navText' href='/'>Home</Link>
          <Link className='navText' href='/'>About</Link>
          <Link className='navText' href='/'>Collection</Link>
        </div>
        <div className="items-right">
        <Link className='navText' href='/'>Features</Link>
        <Link className='navText' href='/'>Contact</Link>
        <Link className='navText' href='/'>Cart</Link>
        </div>
      </div>
      <div className="logo-container">
        <h1  className="logo font-rale">neebo</h1>
      </div>
      <div className="container1"></div>
      
    </div>
  );
};

export default Navbar;

    /*
        const animation = gsap.fromTo('.logo', {
      y: '52vh',
      scale: 25,
      yPercent: -50,
      color:'black'
    }, 
    {
        scale:2.5,
        y:'50',
        color:'white',
        ease:'power1.inOut',
    }
);

    ScrollTrigger.create({
      animation: animation,
      scrub: 1,
      duration:2,
      trigger: '.content',
      start: 'top bottom',
      endTrigger: '.content',
      end: 'top center',
    });

       <Link className='navText group relative w-[80%]' href='/'>
          <span>Hover over me</span>
      <span class="absolute -bottom-1 left-1/2 w-0 transition-all h-0.5 bg-indigo-600 group-hover:w-3/6"></span>
      <span class="absolute -bottom-1 right-1/2 w-0 transition-all h-0.5 bg-indigo-600 group-hover:w-3/6"></span>
          </Link>
    */