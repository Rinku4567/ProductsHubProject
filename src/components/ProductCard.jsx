import React from 'react'
import { IoCartOutline } from 'react-icons/io5';
import { useNavigate } from 'react-router-dom';

const ProductCard = ({ product }) => {
    const navigate = useNavigate()
    return (
        <>

            <div className='border  h-max relative border-black rounded-md cursor-pointer hover:scale-105 hover:shadow-2xl '>
                <div onClick={() => navigate(`/products/${product.id}`)}>
                    <img src={product.image} alt="error" className='rounded-md bg-gray-100 aspect-square w-[100px] mx-auto mt-3' />
                    <h1 className='line-clamp-2 p-1 font-semibold'> {product.title}</h1>
                    <p className='my-1 text-lg text-gray-800 font-bold p-1'>Price {product.price}$</p>
                </div>
                <button className='bg-red-500 mt-2 px-3 py-2 text-lg text-white w-full cursor-pointer flex gap-2 items-center justify-center font-semibold rounded-b-md'><IoCartOutline className='w-6 h-6' /> Add to cart </button>

            </div>


        </>
    )
}

export default ProductCard