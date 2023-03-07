import React, { useState } from 'react'
import Aos from "aos"
import "aos/dist/aos.css"
import { useEffect } from 'react'
import { toast } from 'react-toastify'

const Contact = () => {

    useEffect(()=>{
        Aos.init({duration:2000});
      },[])

    const [names , setNames] = useState({
        name:'',
        email:''
    })

    const {name,email} = names

    const handleSubmit = (e)=>{
       
        setNames((prev)=>({
            ...prev,
            [e.target.id] : e.target.value

        }))
    }

    const submit = ()=>{
        if(name === "" || email === ""){
            toast.error("Fill out all fields")
        }
        else{
            toast.success("Successfully Sent!")
            setNames({
                name:"",
                email:''
            })
        }
    }

   
    
  return (

    <div>

    <div data-aos="fade-up" className='flex flex-col md:max-w-[40%] px-5 ml-auto mr-auto gap-y-3 text-gray-200 py-20'>
    
    <p>Full Name</p>
    <input value={name} required className='text-black p-2 rounded-[5px]' id="name" onChange={handleSubmit}    type="text" />
    <p>E-mail</p>
    <input value={email} required className='text-black p-2 rounded-[5px] ' onChange={handleSubmit} id="email"   type="text" />
    <button onClick={submit} className='p-3 mt-2 rounded-[5px] w-[100%] bg-blue-400 text-white text-[20px]'>Submit</button>
    
    
    </div>
   



    </div>
  )
}

export default Contact