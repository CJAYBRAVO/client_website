import React from 'react'

import Aos from "aos"
import "aos/dist/aos.css"
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import { useEffect } from 'react'

const ATM = () => {

    useEffect(()=>{
        Aos.init({duration:2000});
      },[])
  return (
    <>
    <div data-aos="fade-in" className='flex md:flex-row flex-col sm:px-10 px-5 py-10 justify-between items-center gap-y-10'>

    <div className=' md:w-[40%]'>
        <h1 className='text-blue-400 font-bold color-gray-600 md:text-[35px]'>
The Nautilus Hyosung 2700CE</h1>
    </div>


    <div className='md:w-[40%] flex flex-col gap-y-4 tracking-tight'>
        <p className='text-justify text-[16px]'>We provide all of our customers with the exceptional Nautilus Hyosung 2700CE ATM Machine. Typically, the ATMs used for free placements offered by other ATM companies are not only less secure, but weigh an average of nearly 90 pounds less. What this means for businesses that receive our free ATM placement is that our ATM’s discourage theft and increase safety.
Here are just a few of the important details about the Nautilus Hyosung 2700 CE ATM Machine
</p>
    </div>

</div>




<div data-aos="fade-in" className='flex md:flex-row flex-col flex-nowrap sm:px-10 px-5 py-10 justify-between items-center gap-y-10'>

<div className='md:w-[40%] flex flex-col gap-y-4 tracking-tight'>
    <p className='text-justify text-[16px]'>The NH-2700CE is specifically designed to provide first-class reliability. This machine has one of the longest life spans in the industry, and was designed to have absolutely minimum upkeep requirements, eliminating potential downtime and increasing your business’ profits. You won’t have to worry about needing constant repairs or sudden breakdowns; this ATM is constructed to operate for a very long period of time without incident. This reliability reduces our overheads, translating into lower operating costs and better profit sharing rates for you!
</p>
</div>


<div className=' md:w-[40%]'>
    <h1 className='text-blue-400  font-bold color-gray-600 md:text-[35px]'>
    Paramount Reliability</h1>
</div>




</div>




<div data-aos="fade-in" className='flex md:flex-row flex-col sm:px-10 px-5 py-10 justify-between items-center gap-y-10'>

<div className=' md:w-[40%]'>
    <h1 className='text-blue-400  font-bold color-gray-600 md:text-[35px]'>

    Environmentally Friendly
</h1>
</div>


<div className='md:w-[40%] flex flex-col gap-y-4 tracking-tight'>
    <p className='text-justify text-[16px]'>One of the most important reasons we selected this machine was because of its eco-friendly design. The NH-2700CE is built with energy saving features and functionality, such as its low energy LCD screen, which reduces energy consumption and greenhouse gases. By using this machine, we are taking one small step towards a greener future.
</p>
</div>

</div>




<div data-aos="fade-in" className='flex md:flex-row flex-col sm:px-10 px-5 py-10 justify-between items-center gap-y-10'>

<div className='md:w-[40%] flex flex-col gap-y-4 tracking-tight'>
    <p className='text-justify text-[16px]'>The NH-2700CE ATM we offer as a free placement is designed with an open architecture platform which allows for simple prospective enhancement upgrades and module modifications and adjustments.  The modular design of this ATM is one of the many ways in which we are trying to reduce our operating costs and provide your customers with greater convenience. What this means for businesses that have an ATM Boost at their location is more competitive profit sharing rates for you!
</p>
</div>


<div className=' md:w-[40%]'>
    <h1 className='text-blue-400  font-bold color-gray-600 md:text-[35px]'>
    Flexibility and Design</h1>
</div>




</div>




<div data-aos="fade-in" className='flex md:flex-row flex-col sm:px-10 px-5 py-10 justify-between items-center gap-y-10'>

<div className=' md:w-[40%]'>
    <h1 className='text-blue-400  font-bold color-gray-600 md:text-[35px]'>

    Ultimate Functionality
</h1>
</div>


<div className='md:w-[40%] flex flex-col gap-y-4 tracking-tight'>
    <p className='text-justify text-[16px]'>Having a NH-2700CE ATM Boost on your premises offers your customers more reasons to come to your business. Features such as bill payment, funds transfer, mobile cell phone top-up are available in a highly user friendly interface, giving your business modern appeal, enhancing your competition in the marketplace, and increasing your ability to attract new foot traffic to your business location.
</p>
</div>

</div>




















</>
  )
}

export default ATM