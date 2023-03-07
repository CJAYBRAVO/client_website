import React from 'react'
import Aos from "aos"
import "aos/dist/aos.css"
import { useEffect } from 'react'


 

const Shortquotes = () => {
  useEffect(()=>{
    Aos.init({duration:2000});
  },[])
  return (
    <div data-aos="fade-in" className='flex md:flex-row flex-col justify-between items-center text-center sm:px-10 px-2 items-center md:text-[30px] text-[16px] py-20 gap-y-3'>

        <h>3800 +<span className='text-blue-400'>Active Users</span></h>
        <h>2800 +<span className='text-blue-400'>Transactions</span></h>
        <h>3900 +<span className='text-blue-400'>Trusted By Comapany</span></h>

    </div>
  )
}

export default Shortquotes