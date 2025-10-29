// import the creteContext and axios rom react and axios
import { createContext,useContext,useState } from "react";
import axios from "axios";

// create the object of context using createContext object is :- DataContext
export const DataContext = createContext(null)


// DataProvider is a react component that wrap another component inside them and pass  children as prop bcz it wrap another component inside them so children point out another component like app component and app's children component
export const DataProvider = ({ children }) => {
    const [data, setData] = useState()
    

    
    // create an async function to fetching data from api
    const fetchAllProducts = async()=>{
        try {
            // fetch data from api using axios.get and use await that wait till when the data is not fetched
            const res= await axios.get('https://fakestoreapi.com/products')
            
            // store products data in that object 
            const productsData= res.data
            // const productsData= res.data.products
            
            // it updates the data state using fetchedproducts data
            //  console.log(res);
            
            setData(productsData)
            // console.log(res.data.products);
            
            
            
           
            //   console.log( productsData);
            
            
        } catch (error) {
            console.log(error);
            
        }
    }

    const getUniqueCategory = (data, property) => {
            let newVal = data?.map((curElem) => {
                return curElem[property]
            })
            newVal = ["All",...new Set(newVal)]
            return newVal
        }
    
        const categoryOnlyData = getUniqueCategory(data, "category")

    
    // It waraps the children component inside a context Provider This allows any child component to consume the context values: data, setData, and fetchAllProducts.This is how you make global state available throughout your app.
    //  Means without passing the props,  the children component of DataProvider component can access the all values globally- data , setData, fetchAllProducts
    return <DataContext.Provider value={{ data, setData,fetchAllProducts ,categoryOnlyData }}>
        {children}
    </DataContext.Provider>
}

export const getData =()=> useContext(DataContext)

