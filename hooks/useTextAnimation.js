
"use client"
import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const useTextAnimation = (selector) => {
  useEffect(() => {
    const textElement = document.querySelectorAll(selector);

    textElement.forEach(text => {
      text.innerHTML = text.textContent
        .split('')
        .map((char) => `<span class='char'>${char}</span>`)
        .join('');

      gsap.fromTo(
        text.querySelectorAll('.char'),
        {
          opacity: 0,
          x: -20,
        },
        {
          opacity: 1,
          x: 0,
          stagger: 0.09,
          scrollTrigger: {
            trigger: text,
            start: 'top 70%',
            end: 'bottom 30%',
            scrub: 1,
          },
        }
      );
    })
  

  }, [selector]);
};

export default useTextAnimation;
