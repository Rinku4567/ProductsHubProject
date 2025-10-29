import React from 'react'
import { getData } from '../context/DataContext'

const FilterSection = ({search,setSearch,category , setCategory, priceRange,setPriceRange,handleCategoryChange}) => {
  const { categoryOnlyData } = getData()
   const handleReset=()=>{
    setSearch("")
    setCategory("All")
    setPriceRange([0,1000])
   }
  return (
    <>

      <div className='bg-gray-100 mt-10 p-4 rounded-md h-max w-[250px]'>
        <input type="text" 
        placeholder='Search..' 
        value={search}
        onChange={(e)=>setSearch(e.target.value)}
        
        className='bg-white p-2 rounded-md border-gray-400 border-2 w-[200px]' />

        {/* Category only data */}
        <h1 className='mt-5 font-semibold text-xl'>Category</h1>
        <div className='flex flex-col gap-2 mt-3'>
          {
            categoryOnlyData?.map((item,index) => {
              return <div key={index} className='flex  gap-2'>
                     <input type="checkbox" className=' accent-red-500'
                     name ={item} value={item} checked={category===item} onChange={handleCategoryChange}/>
                     <button className='cursor-pointer uppercase '>{item}</button>
              </div>
            })
          }

          

        </div>
        {/* Range */}
         <div className='mt-5'>
          <h1 className=' font-semibold text-xl'>Range</h1>
          <div className='mt-3'>
          <label for="points" className='text-md '>{priceRange[0]}$-{priceRange[1]}$</label>
          <input type="range" name="" id="" value={priceRange[1]} 
          onChange={(e)=>setPriceRange([priceRange[0],Number(e.target.value)])}
          min="0"
          max="1000"
          step="1"
          className='cursor-pointer mt-2 w-full accent-red-500'/>
          </div>
        
         </div>
        <button className='bg-red-500 p-2 rounded-[10px] cursor-pointer text-white mt-3' onClick={handleReset}>Reset filter</button>
      </div>



    </>
  )
}

export default FilterSection