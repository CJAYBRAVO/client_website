import React, { useState } from 'react'
import { accordion } from '../components/constants'
import Aos from "aos"
import "aos/dist/aos.css"
import { useEffect } from 'react'




const Faq = () => {

    useEffect(()=>{
        Aos.init({duration:1500});
      },[])

    const [isActive , setIsActive]= useState(false);

    
  return (
    <div className='py-20 sm:px-10 px-2'>

        <h className='flex justify-center  font-semibold md:text-[35px] text-[25px]'>Frequently Asked Queries</h>
        {accordion.map((item,index)=>{
            return(
                <>
                <div key={index} className='tracking-tight mt-5 flex flex-col md:max-w-[50%] ml-auto mr-auto gap-y-4 sm:px-10 px-5'>


                    <div data-aos='fade-in' className='flex flex-row justify-between items-center'>
                        <h className='md:text-[23px] text-[13px] text-justify'>{item.title}</h>
                        <p className='text-blue-400 md:text-[33px] text-[27px] cursor-pointer' onClick={(()=>{
                             setIsActive(index === isActive ? null : index)
                        })}>{isActive ===  index ? '-' : '+'}</p>
                    </div>

                    <div className=''>
                        { isActive === index &&<p className='text-gray-400 md:text-[17px] text-[15px] text-justify'> {item.paragraph} </p>}
                    </div>

                </div>
                </>
            )
        })}

    </div>
  )
}

export default Faq