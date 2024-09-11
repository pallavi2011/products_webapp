import React, { useEffect, useState } from 'react'
import axios from 'axios';
import ProductCard from '../components/ProductCard';

const Product = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        async function fetchProductData() {
            const response = await axios.get("https://dummyjson.com/products")
            setProducts(response.data.products)
            console.log(products)

        }
        fetchProductData();
    },[])
  return (
    <div className='h-screen bg-gray-100 flex items-center justify-center'>
        {products.map((prod, index) => {
            return (
                <ProductCard/>
            )
        })}
       
    </div>
  )
}

export default Product