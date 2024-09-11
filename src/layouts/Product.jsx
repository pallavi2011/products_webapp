import React, { useEffect, useState } from 'react'
import axios from 'axios';
import ProductCard from '../components/ProductCard';

const Product = () => {
    const [products, setProducts] = useState([]);
    
    useEffect(() => {
        async function fetchProductData() {
            const response = await axios.get("https://dummyjson.com/products?limit=10")
            setProducts(response.data.products)
            console.log(products)

        }
        fetchProductData();
    },[])
  return (
    <div className='h-screen p-10 bg-gray-100 flex flex-wrap md:flex md:flex-wrap items-center justify-center gap-4'>
        {products.map((prod, index) => {
            return (
                <ProductCard prod={prod} index={index} key={index}/>
            )
        })}
       
    </div>
  )
}

export default Product