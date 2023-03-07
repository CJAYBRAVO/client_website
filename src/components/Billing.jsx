import React from 'react'
import { FaBloggerB } from 'react-icons/fa';
import { FaGetPocket } from 'react-icons/fa';
import { FaHotjar } from 'react-icons/fa';
import { FaTools } from 'react-icons/fa';
import "aos/dist/aos.css"
import Aos from "aos"
import { useEffect } from 'react'
import { NavLink } from 'react-router-dom';


const Billing = () => {

    useEffect(()=>{
        Aos.init({duration:2000});
      },[])
    
  return (
    <div data-aos="fade-right" className='flex md:flex-row flex-col sm:px-10 px-2 py-5 justify-between items-center gap-y-10'>

        <div className='flex flex-col md:max-w-[40%] gap-y-6'>
            <h className="md:text-[35px] text-[23px] font-semibold">
IT'S MORE THAN JUST AN <span className='text-blue-400'>ATM!</span>
</h>

<p className='text-[16px] text-justify'>These transactions can be completed quickly and easily, without the need for personal assistance from a bank teller. Apex Atm also includes advanced security measures, such as encrypted PIN entry and card skimming prevention, to protect customers' personal and financial information</p>
<NavLink to='/whyus'><button className='text-center rounded-[5px] bg-blue-400 md:max-w-[250px] w-full py-3 text-white'>Get Started</button>
</NavLink>

        </div>


        <div className='flex flex-col justify-center gap-y-6 md:max-w-[40%] tracking-tight '>


          

            <div className='flex flex-row gap-x-2  justify-center items-center'>
                <div><p className='text-white text-center flex justify-center items-center rounded-[100%] p-2 w-[50px]  bg-blue-400 h-[50px]'><FaGetPocket /></p></div>
                <div className='flex flex-col '>
                    <p>Terms And Conditions</p>
                    <p className='text-gray-400 md:text-[17px]  text-justify'>Industry leading terms and conditions, including

complimentary receipt couponing, ATM wraps, and business insurance.</p>
                </div>
            </div>


            <div className='flex flex-row gap-x-2 justify-center items-center'>
                <div><p className='text-white text-center flex justify-center items-center rounded-[100%] p-2 w-[50px]  bg-blue-400 h-[50px]'><FaHotjar /></p></div>
                <div className='flex flex-col'>
                    <p>100% Security</p>
                    <p className='text-gray-400 text-[17px] text-justify'>Secure your sales and back up your business! Having an PRESTIGE ATM is an independent source of cash for your customers in case your business internet temporarily stops working, or your credit card processing system crashes. </p>
                </div>
            </div>

            <div className='flex flex-row gap-x-2 justify-center items-center'>
                <div><p className='text-white text-center flex justify-center items-center rounded-[100%] p-2 w-[50px]  bg-blue-400 h-[50px]'><FaTools  /></p></div>
                <div className='flex flex-col'>
                    <p>Retaining Ability</p>
                    <p className='text-gray-400 text-[17px] text-justify'>Retain your customers. Our ATM service keep your customers from looking for another ATM service elsewhere and keeps people, with money, inside your business! </p>
                </div>
            </div>

           
           

          


        </div>

    </div>
  )
}

export default Billing