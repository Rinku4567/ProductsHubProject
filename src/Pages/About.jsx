import React from 'react'
import { Link } from 'react-router-dom'

const About = () => {
  return (
    <>
      <h1 className='font-serif font-bold mt-10 text-4xl mx-auto text-center'>ProductsHub</h1>
      <div className='ms-10 mt-10 font-light font-sans text-justify me-10'>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo sint labore ea architecto laudantium veritatis, totam dolorem nihil laborum, atque, libero enim veniam quia ipsa a officia vitae omnis suscipit repellendus dicta porro temporibus officiis!Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illo sint labore ea architecto laudantium veritatis, totam dolorem nihil laborum, atque, libero enim veniam quia ipsa a officia vitae omnis suscipit repellendus dicta porro temporibus officiis!</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta dolore nisi culpa inventore harum itaque recusandae commodi delectus dolor numquam.Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta dolore nisi culpa inventore harum itaque recusandae commodi delectus dolor numquam.</p>
      </div>
      <div className='ms-10 me-10 text-justify mt-7'>
        <h2 className='font-bold text-3xl font-serif'>Our features-</h2>
        <ul className=' ms-10 list-disc text-[1.1rem] font-sans'>
          <li>Product Display & Organization</li>
        <li>Point of Sale (POS) System</li>
          <li>Customer Service</li>
          <li>Inventory Management</li>
          <li>Available more than one Payment Options</li>
        </ul>
      </div>
    <Link to={'/products'}><button className=' ms-10 mt-5 bg-gradient-to-r from-red-300 to-red-700 p-2 rounded-3xl cursor-pointer font-serif'>Shop now</button></Link>

    </>
  )
}

export default About
