import { MapPin } from 'lucide-react'
import React from 'react'
import { FaCaretDown } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { IoCartOutline } from 'react-icons/io5'
import { NavLink } from 'react-router-dom'
import { CgClose } from 'react-icons/cg'
import { MdOutlineLightMode,MdOutlineDarkMode } from 'react-icons/md'
import { useState } from 'react'
import { useCart } from '../context/CartContext'

const Navbar = ({ location,getLocation, openDropdown, setDropdown }) => {
const [mode, setMode] = useState('light')
const {cartItem} = useCart()

    const toggleMode = () => {
        if (mode === 'dark') {
            document.body.style.backgroundColor = 'white'
            setMode('light')

        } else {
            document.body.style.backgroundColor = '#042743'
            setMode('dark')

 
        }

    }
   
    const toggleDropDown = () => {
        setDropdown(!openDropdown)
    }
    return (
        <>
            <div className='bg-black py-3 shadow-2xl '>
                <div className='max-w-6xl mx-auto flex justify-between items-center'>
                    {/* logo section */}
                    <div className='flex gap-7 items-center'>
                        <Link to={'/'}> <h1 className='font-bold text-3xl'><span className='text-red-600 font-serif'>P</span><span className='text-white'>roducts</span><span className='text-red-600 font-serif'>H</span>< span className='text-white'>ub</span></h1></Link>
                        <div className='flex gap-1 cursor-pointer text-gray-700 items-center'>
                            <MapPin className='text-red-500' />
                            <span className='font-semibold text-white'> {location ? <div className='-space-y-2'>
                                <p>{location.county}</p>
                                <p>{location.state}</p>
                            </div> : "Add address"}</span>
                            <FaCaretDown onClick={toggleDropDown} className='text-white' />
                        </div>
                        {
                            openDropdown ? <div className='w-[250px] h-max bg-white shadow-2xl z-50 top-40 left-60 border-2 p-5 border-gray-100 rounded-md -mx-[190px]  -mb-[130px]'>
                                <h1 className='font-semibold mb-4 text-xl flex justify-between'>Change location <span onClick={toggleDropDown} ><CgClose className='cursor-pointer' /></span></h1>
                                <button onClick={getLocation} className='bg-red-500 rounded-[10px] text-white p-2 cursor-pointer'>Detect my location</button>

                            </div> : null
                        }
                    </div>

                    {/* menu section */}
                    <nav className='md:flex gap-7 '>
                         <div onClick={toggleMode} className='mt-2  rounded-2xl'>
                            {mode === 'dark' ?
                                <MdOutlineLightMode className='h-7 cursor-pointer  w-7 text-white ' /> : <MdOutlineDarkMode className='h-7 cursor-pointer  w-7  text-white' />
                            }
                        </div>
                        <ul className='flex gap-4 font-bold items-center'>
                            <NavLink to={'/'} className={({ isActive }) => `${isActive ? "border-b-2 transition-all border-red-500" : "text-black"} cursor-pointer text-white`}><li>Home</li></NavLink>
                            <NavLink to={'/about'} className={({ isActive }) => `${isActive ? "border-b-2 transition-all border-red-500" : "text-black"} cursor-pointer text-white`} ><li className='cursor-pointer'>About</li></NavLink>
                            <NavLink to={'/products'} className={({ isActive }) => `${isActive ? "border-b-2 transition-all border-red-500" : "text-black"} cursor-pointer text-white`}><li className='cursor-pointer'>Products</li></NavLink>
                            <NavLink to={'/contact'} className={({ isActive }) => `${isActive ? "border-b-2 transition-all border-red-500" : "text-black"} cursor-pointer text-white`}><li className='cursor-pointer'>Contact</li></NavLink>
                        </ul>
                        <Link to={'/cart'} className='relative'>
                            <IoCartOutline className='h-7 w-7 text-white' />
                            <span className='bg-red-500 px-2 rounded-full absolute -top-3 -right-3 text-white'>{cartItem.length}</span>
                        </Link>

                        <button className=' bg-red-500 px-4 py-1 rounded-[5px]  text-white cursor-pointer'>Sign in</button>

                    </nav>



                </div>
            </div>
        </>
    )
}

export default Navbar
