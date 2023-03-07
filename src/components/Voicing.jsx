import React from 'react'
import card from "../card.png"


import Aos from "aos"
import "aos/dist/aos.css"
import { useEffect } from 'react'


const Voicing = () => {

  useEffect(()=>{
    Aos.init({duration:2000});
  },[])
  return (
    <div data-aos="fade-in" className='flex md:flex-row flex-col sm:px-10 px-5 py-10 justify-between items-center gap-y-10'>

        <div className='h-[50%] md:w-[40%]'>
            <img className='h-[100%] w-[100%]' src={card} />
        </div>


        <div className='md:w-[40%] flex flex-col gap-y-4 tracking-tight'>
            <h1 className='font-semibold md:text-[38px] text-[23px]'>Over 10 Years Of <span className='text-blue-400'>Experience</span></h1>
            <p className='text-justify text-[16px]'>Having an ATM brings consumers into your space specifically to use our machine, granting you the opportunity to convert that foot traffic into increased sales and profits.</p>
             <p className='text-[16px]'>With no operating costs and no maintenance responsibilities, all you have to do is sit back and watch your revenue grow</p>
        <p className='text-[16px]'>We split the ATM usage fee with you so that you can start earning a tidy profit on your most underused floor space.</p>
        </div>

    </div>
  )
}

export default Voicing