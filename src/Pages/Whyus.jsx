import React from 'react'
import { why } from '../components/constants'
import Aos from "aos"
import "aos/dist/aos.css"
import { useEffect } from 'react'


const Whyus = () => {
    useEffect(()=>{
        Aos.init({duration:2000});
      },[])
  return (
    <div className='flex flex-wrap md:px-10 px-5 justify-between items-center gap-y-4 py-20'>
    {why.map((item)=>{
        return(
            <div data-aos='zoom-in' className='cursor-pointer flex flex-col md:w-[30%] w-[85%] ml-auto mr-auto py-5 gap-y-0  '>
                <div><img className='hover:opacity-50 object-cover w-[100%] md:h-[250px] h-[200px]' src={item.img} /></div>
                <div className='bg-gray-700 px-2'>
                    <div><p>{item.head}</p></div>
                    <div className='w-[100%] text-gray-400 md:text-[18px] text-[14px] text-justify'><p1>{item.para}</p1></div>
                </div>
            </div>
        )
    })}
</div>
  )
}

export default Whyus