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
      color: 'white',
      duration:5,
    }, {
      scale: 2.5,
      y: '40',
      color: 'white',
      ease: 'power1.inOut',
      duration:5,
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

  useEffect(() => {
    const triggerHeight = window.innerHeight * 2 ;

    ScrollTrigger.create({
      trigger: '.container1',
      start: `${triggerHeight} top`,
      end: 'bottom top',
      scrub: true,
      onEnter: () => gsap.to('.nav', { backgroundColor: 'black' }),
      onEnterBack: () => gsap.to('.nav', { backgroundColor: 'black' }),
    });

    ScrollTrigger.create({
      trigger: '.content',
      start: 'top top',
      end: 'bottom top',
      scrub: true,
      onUpdate: (self) => {
        if (self.progress > 0.5) {
          gsap.to('.nav', { backgroundColor: 'black' });
        } else {
          gsap.to('.nav', { backgroundColor: 'transparent' });
        }
      }
    });
  }, []);

  return (
   <header>
   
    <div className='webNavigation'>
      <div className="nav">
        <div className="items-left">
          <Link className='navText' href='/'>Home</Link>
          <Link className='navText' href='/about'>About</Link>
          <Link className='navText' href='/features'>Features</Link>
        </div>
        <div className="items-right">
          <Link className='navText' href='/blog'>Blog</Link>
          <Link className='navText' href='/contact'>Contact</Link>
          <Link className='navText' href='/'>Cart</Link>
        </div>
      </div>
      <div className="logo-container">
        <h1 className="logo font-rale">neebo</h1>
      </div>
      <div className="container1"></div>
    </div>
   </header>
  );
};

export default Navbar;