import React from 'react'
import "aos/dist/aos.css"
import Aos from "aos"
import { useEffect } from 'react'
import {Link, Navigate, useNavigate} from "react-router-dom"

const Service = () => {

  const nav = useNavigate();
  useEffect(()=>{
    Aos.init({duration:2000});
  },[])
  return (
    <div data-aos="fade-in" className='flex md:flex-row flex-col justify-between gap-y-4 items-center sm:px-10 px-5 bg-gray-800 rounded-[8px] max-w-[90%] ml-auto mr-auto py-10'>


        <div className='flex flex-col md:max-w-[40%] gap-y-2'>
            <h1 className='md:text-[35px] font-semibold text-blue-400'>Lets try our service Now</h1>
            <p className='text-[15px] text-justify'>We think differently. Many ATM companies have been doing things the same way for so long that change isn’t even on their radar. We’ve done our homework, and know what other ATM companies offer</p>
        
        </div>

        <div className='flex md:max-w-[40%] '>
          <Link to="/contact"><button  className='bg-blue-400 rounded-[5px] p-2 w-[200px] text-center '>Less Go!</button></Link> 
             </div>

    </div>
  )
}

export default Service