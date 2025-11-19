import React from 'react'
import { BsTwitterX } from 'react-icons/bs'
import { FaFacebook, FaInstagram } from 'react-icons/fa'

const Footer = () => {
    return (
        <>
            <div className='h-[330px] bg-[#0a131d] mt-5 flex flex-row pt-10 text-white'>
                <div className="address px-30">
                    <h1 className='font-bold text-3xl'><span className='text-red-600 font-serif'>P</span><span className='text-white'>roducts</span><span className='text-red-600 font-serif'>H</span>< span className='text-white'>ub</span></h1>
                    <p>Product Hub is a best choice in Indore</p>
                    <p className='address mt-5 max-w-[200px]'> 41 A Suryadev nagar, near Gopur square Indore Madhya Pradesh 452009</p>
                </div>
                <div className="services">
                    <h2 className=' font-bold font-sans'>Customer Services</h2>
                    <ul className='mt-3 '>
                        <li className='mt-2'>Contact us</li>
                        <li className='mt-2'>Shipping & returns</li>
                        <li className='mt-2'>FaQs</li>
                        <li className='mt-2'>Order tracking </li>
                        <li className='mt-2'>Size guide</li>
                        <li></li>
                    </ul>
                </div>
                <div className="icons px-5 ">
                    <h2 className=' font-bold font-sans'>Follow us</h2>
                    <div className="icons flex flex-row mt-5 text-2xl gap-2">
                        <FaFacebook className=' cursor-pointer' />
                        <FaInstagram className=' cursor-pointer' />
                        <BsTwitterX className=' cursor-pointer' />
                    </div>

                </div>

                <div className="map">
                    <p className='px-50'><iframe className='border-4 border-white' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29449.817497398974!2d75.80594030985299!3d22.682585082428645!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962fc39062b9e61%3A0x4faed261a0ab936c!2sSector%20A%2C%20Surya%20Dev%20Nagar%2C%20Indore%2C%20Madhya%20Pradesh%20452009!5e0!3m2!1sen!2sin!4v1760691908410!5m2!1sen!2sin" width="350" height="250" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe></p>
                </div>

            </div>
        </>
    )
}

export default Footer