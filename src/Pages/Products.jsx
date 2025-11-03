import React, { useEffect, useState } from 'react'
import { getData } from '../context/DataContext'
import FilterSection from '../components/FilterSection'
import loading from '../assets/loading.mp4'
import ProductCard from '../components/ProductCard'
import notfound from '../assets/nodatafound.mp4'

const Products = () => {
  const { data, fetchAllProducts } = getData()
  //  console.log(data.length);

  const [page, setPage] = useState(1)

  const [search, setSearch] = useState("")
  const [category, setCategory] = useState("All")
  const [priceRange, setPriceRange] = useState([0, 1000])

  const handleCategoryChange = (e) => {
    setPage(1)
    setCategory(e.target.value)
  }

  let filteredData = data?.filter((item) =>
    item.title.toLowerCase().includes(search.toLowerCase()) &&
    (category === "All" || item.category === category) &&
    (item.price >= priceRange[0] && item.price <= priceRange[1])

  )




  const pageNextHandler = () => {

    setPage(page => page + 1)

  }

  const pagePreviousHandler = () => {

    setPage(page => page - 1)

  }



  // const pageHandler


  useEffect(() => {
    fetchAllProducts()
  }, [])

  return (
    <>
      <div className='max-w-5xl mx-auto px-4 mb-10 mt-5'>
        {
          data?.length > 0 ? (
            <div className=' flex  flex-col mx-auto justify-center items-center'>
              <div className='flex gap-5 '>

                <FilterSection search={search} setSearch={setSearch} category={category} setCategory={setCategory} priceRange={priceRange} setPriceRange={setPriceRange} handleCategoryChange={handleCategoryChange} />
                <div className='grid grid-cols-3 gap-7 mt-10 '>
                  {
                    filteredData.length > 0 ?
                      filteredData?.slice(page * 6 - 6, page * 6).map((pro, index) => {
                        return <ProductCard key={index} product={pro} />
                      }) :
                      <div className=" ms-[200px] w-full mt-10  flex flex-col items-center justify-center">
                        <h1 className="text-2xl font-bold text-center whitespace-nowrap">
                          No Products Available
                        </h1>

                        <video
                          muted
                          autoPlay
                          loop
                          className="w-[500px] h-[300px] object-cover"
                        >
                          <source src={notfound} type="video/mp4" />
                        </video>
                      </div>


                  }

                </div>

              </div>

              {filteredData.length > 0 ?
                <div className='flex mx-auto justify-center items-center mt-5'>
                  <button
                    disabled={page === 1}
                    className={`${page === 1 ? " bg-red-300  cursor-not-allowed" : "bg-red-500 cursor-pointer"} p-2 text-white rounded-[10px] m-2 `} onClick={pagePreviousHandler} >Previous</button>

                  <button
                    disabled={page > filteredData.length / 6}
                    className={`${page >= filteredData.length / 6 ? " bg-red-300  cursor-not-allowed" : "bg-red-500 cursor-pointer"} p-2 text-white rounded-[10px] m-2 `}
                    onClick={pageNextHandler}>Next</button>
                </div> :

                <div></div>

              }

            </div>


          ) : (
            <div className='flex items-center justify-center h-[400px]'>
              <video muted autoPlay loop className='h-[100px]'>
                <source src={loading} type='video/mp4' />
              </video>

            </div>
          )
        }

      </div>

    </>
  )
}
export default Products