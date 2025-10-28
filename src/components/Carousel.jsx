import React, { useContext } from 'react'
import { useEffect } from 'react'
import { DataContext, getData} from '../context/DataContext'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Category from './Category';

const Carousel = () => {
    const { data ,fetchAllProducts} = getData()
       console.log(data);

        var settings = {
        dots: false,
        infinite: true,
        speed: 200,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
    };
      useEffect(() => {
        fetchAllProducts()
    }, [])
  return (
    <>
      <Slider {...settings}>{
                data?.slice(0, 19)?.map((item, index) => {
                    return < div key={index} className='overflow-x-hidden bg-gradient-to-r from-[#e2e1ec] via-[#eec12b] to-[#f6d75f] -z-10'>

                        <div className='flex gap-10 justify-center h-[470px] items-center px-4 w-full'>

                            <div className='space-y-6 ml-30 '>
                                <h3 className='font-semibold font-sans text-xl'>Products hub provide the best quality products on better price.</h3>
                                <h1 className='font-bold text-4xl uppercase'>{item.title}</h1>
                                <p className=' line-clamp-3 text-gray-700 pr-7 font-serif'>{item.description}</p>
                                <button className='bg-gradient-to-r from-red-300 to-red-700 p-2 rounded-3xl cursor-pointer font-serif'>Shop now</button>
                            </div>

                            <img src={item.image} alt="error" className='rounded-full me-30 w-[250px] hover:scale-105  transition-all ' />

                        </div>



                    </div>
                })


            }


            </Slider>
            <Category/>

    </>
  )
}

export default Carousel
