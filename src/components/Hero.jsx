import React, { useEffect } from 'react'
import robo from "../robo.png"
import Aos from "aos"
import "aos/dist/aos.css"
import d from "../d.jpg"
import p from "../p.jpg"
import { Link } from "react-router-dom"

const Hero = () => {
  useEffect(()=>{
    Aos.init({duration:2000});
  },[])
  return (
    <>

    <div className='md:h-[550px] w-[100%] relative'>
      <img className='h-[100%] w-[100%]  opacity-30' src={p} />

      <div data-aos='fade-in' className='absolute top-0 bottom-0 left-0  right-0 flex flex-col justify-center items-center max-w-[80%] md:max-w-[40%] ml-auto mr-auto'>
            <h1 className='md:text-[18px] text-[14px] tracking-tight text-justify text-gray-300 font-semibold'>Our team is made up of experienced professionals who are passionate about providing exceptional service. We understand the importance of having reliable and convenient access to cash, which is why we have made it our mission to provide our clients with top-quality ATM services.</h1>

        </div>
    </div>



    
    </>
    // <div  className='flex md:flex-row flex-col sm:px-10 px-2 py-10  justify-between md:items-center '>
    //     <div data-aos="zoom-in-right" className='md:max-w-[40%] flex flex-col gap-y-5'>
    //         <h1 className='md:text-[48px] text-[23px] tracking-tight font-bold'>ZERO INVESTMENT 100% PROFIT</h1>
           
    //         <p className='text-justify text-gray-400 text-[17px] h-[100%]'>ATM Boost refers to the various features and services that enhance the convenience, speed, and security of automated teller machine (ATM) transactions. With ATM Boost, customers can perform a wide range of self-service banking transactions, including cash withdrawals, deposits, balance inquiries, and card activations, among others</p>
    //         <button className='text-center rounded-[5px] bg-blue-400 md:max-w-[250px] py-3 text-white'>Contact US</button>
    //     </div>


    //     <div className='rounded-full md:h-[550px] md:h-[620px] h-[500px] md:w-[55%] md:max-w-[55%] w-full mt-4'>
    //         <img id="animate-bounce" className='opacity-50 h-[100%] w-[100%] object-fit' src={p} />
    //     </div>
    //     </div>
  )
}

export default Hero