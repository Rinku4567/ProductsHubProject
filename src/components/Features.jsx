import React from 'react'
import { MdOutlineLocalShipping } from 'react-icons/md'
import { FaLock } from "react-icons/fa";
import { VscRefresh } from "react-icons/vsc";
import { FaRegClock } from "react-icons/fa";

const Features = () => {
  return (
    <>
      <ul className='flex gap-40 mx-auto justify-center items-center mt-10'>
        <li className='text-[1rem] font-serif'><MdOutlineLocalShipping className='mx-auto text-2xl'/>Free shipping</li>
       <li className='text-[1rem] font-serif'><FaLock className='mx-auto text-2xl'/>Secure payment</li>
        <li className='text-[1rem] font-serif'><VscRefresh className='mx-auto text-2xl'/>Easy returns</li>
         <li className='text-[1rem] font-serif'><FaRegClock className='mx-auto text-2xl'/>24/7 support</li>
      </ul>
    </>
  )
}

export default Features