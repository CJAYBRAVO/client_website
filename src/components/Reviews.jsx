import React from 'react'
import "aos/dist/aos.css"
import Aos from "aos"
import { useEffect } from 'react'
const Reviews = () => {

    useEffect(()=>{
        Aos.init({duration:2000});
      },[])
  return (
    <>
        <div data-aos="fade-in" className='flex md:flex-row flex-col sm:px-10 px-5 justify-between items-center py-10 gap-y-4'>

<div className='md:max-w-[40%] text-[23px] font-semibold'><h className="md:text-[35px]"><span className='text-blue-400'>What people</span> are saying about us?</h></div>
<div className='md:max-w-[40%] text-[17px]'><p>Everythin you need to accept card payment and grow up your business anywhere on the planet</p></div>
           

        </div>

        <div data-aos="zoom-in" className='flex md:flex-row flex-col justify-between items-center sm:px-10 px-5 py-10 gap-y-3'>

            <div className='flex flex-col md:max-w-[25%] p-2 '>

                <h className='text-blue-400 italic text-[60px]'>"</h>
                <p className='text-[17px] text-justify'>Money is only a tool it will take yo wherever you wish bt it will not replace you as the driver</p>

                <div  className='flex flex-row items-center gap-x-2 py-5'>
                    <div className='rounded-full h-[40px] w-[40px]'><img className='rounded-full w-[100%] h-[100%]' src="https://picsum.photos/200/300" /></div>
                    <p className='text-gray-400'>Michael rich</p>
                </div>

            </div>


            <div className='flex flex-col md:max-w-[25%] rounded-[10px] bg-gray-800 p-2'>

                <h className='text-blue-400 italic text-[60px]'>"</h>
                <p className='text-[17px] text-justify'>Money makes your life easier if you are lucky to have it yo are lucky</p>

                <div className='flex flex-row items-center gap-x-2 py-5'>
                    <div className='rounded-full h-[40px] w-[40px]'><img className='rounded-full w-[100%] h-[100%]' src="https://picsum.photos/201/300" /></div>
                    <p className='text-gray-400'>Steve Finn</p>
                </div>

            </div>


             <div className='flex flex-col md:max-w-[25%] p-2'>

                <h className='text-blue-400 italic text-[60px]'>"</h>
                <p className='text-[17px] text-justify'>It is usually people in the money business finance and international trade who are fairly rich</p>

                <div className='flex flex-row items-center gap-x-2 py-5'>
                    <div className='rounded-full h-[40px] w-[40px]'><img className='rounded-full w-[100%] h-[100%]' src="https://picsum.photos/200/302" /></div>
                    <p className='text-gray-400'>John doe</p>
                </div>

            </div>



             

        </div>
    </>
  )
}

export default Reviews