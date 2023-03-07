import React from 'react'

import { FaInstagram } from 'react-icons/fa';
import { FaFacebookF } from 'react-icons/fa';

import { FaTwitter } from 'react-icons/fa';
import {useNavigate} from "react-router-dom"







const Footer = () => {

  const nav = useNavigate();

  

  
  return (
    <div className='py-20 flex md:flex-row flex-col justify-center items-center sm:px-10 px-5 gap-x-5 gap-y-4'>


        <div className='flex flex-col md:max-w-[40%] gap-y-2'>
            <h className='md:text-[35px]'>Apex <span className='text-blue-400'>Atm Solutions</span></h>
            <p className='text-[18px]'>© All Rights Reserved</p>

        </div>


        <div className='flex gap-x-2 text-blue-400 text-[25px]'>
            <FaInstagram />
            <FaFacebookF />
            <FaTwitter />
                    </div>

    </div>
  )
}

export default Footer