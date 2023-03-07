import React from 'react'
import d from "../d.jpg"
import Aos from "aos"
import "aos/dist/aos.css"
import { useEffect } from 'react'
import ATM from './ATM'

const Atmpartone = () => {

    useEffect(()=>{
        Aos.init({duration:1000});
      },[])


  return (
    <>
    
    <div className=''>

        <div className='md:h-[550px] w-[100%] relative'><img className='opacity-20 h-[100%] w-[100%]' src= {d} />


        <div data-aos='fade-in' className='absolute top-0 bottom-0 left-0 right-0 flex justify-center items-center max-w-[80%] md:max-w-[30%] ml-auto mr-auto'>
            <h1 className='md:text-[17px] text-[14px] text-justify text-gray-300 font-semibold'><span className='text-blue-400'>An Apex</span> Atm Solutions, we understand that you have many options when it comes to ATM services. </h1>
        </div>




        
        
        
        
        
        </div>
        


    </div>

  <ATM />

    
    </>
  )
}

export default Atmpartone