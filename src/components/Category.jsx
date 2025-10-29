import React from 'react'
import { getData } from '../context/DataContext'

const Category = () => {
  const {categoryOnlyData} = getData()
  

  return (
    <>
      
            <div className='bg-amber-300 flex max-w-[1600px]  gap-2 items-center justify-around py-5 px-4 m-0'>
                {
                    categoryOnlyData?.map((item, index) => {
                        return <div key={index}>
                            <button className=' font-serif px-3 py-2 bg-white rounded-2xl  text-black text-[1.1rem]  cursor-pointer'>
                                {item}
                            </button>
                        </div>

                    })
                }
            </div>
    </>
  )
}

export default Category
