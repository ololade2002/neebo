
"use client"
import Image from 'next/image';
import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import device from '@/public/neebo-device-1.webp'
import device2 from '@/public/neebo-device-2.webp'

const ImageCarouselSection = () => {

    const responsive = {
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 1,
          slidesToSlide: 1 // optional, default to 1.
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 1,
          slidesToSlide: 1 // optional, default to 1.
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1,
          slidesToSlide: 1 // optional, default to 1.
        }
      };

  return (
    <Carousel
      swipeable={true}
      draggable={true}
      showDots={false}
      responsive={responsive}
      ssr={true} 
      infinite={true}
      arrows={false}
      autoPlay={true}
      autoPlaySpeed={3000}
      keyBoardControl={true}
      customTransition="all .5"
      transitionDuration={1000}
      containerClass="carousel-container"
      removeArrowOnDeviceType={["tablet", "mobile"]}
      dotListClass="custom-dot-list-style"
      itemClass="carousel-item-padding-40-px"
    >
  <div>
    <Image className='image-c' src={device} alt='Neebo device' />
  </div>
  <div>
  <Image className='image-c' src={device2} alt='Neebo device' />
  </div>
  <div>
  <Image className='image-c' src={device} alt='Neebo device' />
  </div>
  <div>
  <Image className='image-c' src={device2} alt='Neebo device' />
  </div>

</Carousel>
  )
}

export default ImageCarouselSection
