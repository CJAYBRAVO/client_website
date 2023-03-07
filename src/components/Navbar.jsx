import React, { useState } from 'react'
import links from './constants'

import { FaBars } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Aos from "aos"
import "aos/dist/aos.css"

const Navbar = () => {

    
        useEffect(()=>{
          Aos.init({duration:2000});
        },[])

    const cat = "Contact-Us"

    const [open , setOpen] = useState(false);
  return (

    <>
    <div className='flex justify-between items-center sm:px-10 px-2 sm:py-5 py-6'>

        <div>
            <h1 className='font-semibold md:text-[30px] text-[20px]'>Apex <span className='text-blue-400'>Atm Solutions</span></h1>
        </div>

        <ul className='hidden md:flex'>

            {links.map((item)=>{
                return(
                    <>
                    <div>
                        <li className='ml-3'><Link to={item.path}><a href={item.path}>{item.name}</a></Link></li>
                        </div>
                        </>
                )
            })}

        </ul>


        <div onClick={(()=>{
            setOpen(!open)
        })} className='hover:text-gray-400 cursor-pointer md:hidden flex text-[25px] md:text-[30px] text-white shadow-lg'>

            <FaBars />

        </div>

       
    </div>

    <div className={` ${open? 'fixed top-0 bottom-0 z-50 flex flex-col transition ease-in-out delay-150 ' : 'hidden'} sm:px-10  px-2 py-5 justify-center text-[15px] items-center text-center fixed bg-black w-full text-gray-100 `}>

        <ul>
            {links.map((item)=>{
                return(
                    <>
                    <div id='trans' className=''>
                        <li data-aos='fade-in'><NavLink to={item.path} ><a onClick={(()=>{
                            setOpen(false)
                        })} className='' href=''>{item.name}</a></NavLink></li>
                    </div>
                    </>
                )
            })}
        </ul>
        
    </div>
    </>

    
  )
}

export default Navbar