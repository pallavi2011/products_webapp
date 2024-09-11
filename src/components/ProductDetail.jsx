import React, {useEffect, useState} from 'react'
import {  useParams } from 'react-router-dom';
import axios from 'axios';


const ProductDetail = () => {
    const [quantity, setQuantity] = useState(1);
    const [product, setProduct] = useState([])
    const params = useParams()

    const updateQuantity = (value) => {
        if(value == -1){
            setQuantity((prevState) => {
                if (prevState <= 0){
                    return prevState 
                }
                else{
                    return prevState + value
                }
            })
        }
        else{
            setQuantity((prevState) => {
                if (prevState <= product.stock) {
                    return prevState + value
                }
                else{
                    return prevState
                }
               
        })
    }}

    useEffect(() => {
        async function fetchsingleProduct() {
            const response = await axios.get(`https://dummyjson.com/products/${params.productId}`)
            
            console.log(response.data)
            setProduct(response.data)
            
           
        }
        fetchsingleProduct();
    },[params])
   
    
  return (
    <div className='flex flex-col justify-between lg:flex-row gap-16 lg:items-center'>
    <div className='flex flex-col gap-6 lg:w-2/4'>
                <img src={product.thumbnail} alt="" className='w-full h-full aspect-square object-cover rounded-xl'/>
               
            </div>
    {/* ABOUT */}
    <div className='flex flex-col gap-4 lg:w-2/4'>
        <div>
            <span className=' text-violet-600 font-semibold'>{product.brand}</span>
            <h1 className='text-3xl font-bold'>{product.title}</h1>
        </div>
        <p className='text-gray-700'>
        {product.description}
        </p>
        <h6 className='text-2xl font-semibold'>$ {product.price}</h6>
        <div className='flex flex-row items-center gap-12'>
            <div className='flex flex-row items-center'>
                <button className='bg-gray-200 py-2 px-5 rounded-lg text-violet-800 text-3xl' onClick={() => updateQuantity(-1)}>-</button>
                <span className='py-4 px-6 rounded-lg'>{quantity}</span>
                <button className='bg-gray-200 py-2 px-4 rounded-lg text-violet-800 text-3xl' onClick={() => updateQuantity(+1)}>+</button>
            </div>
            <button className='bg-violet-800 text-white font-semibold py-3 px-16 rounded-xl h-full'>Add to Cart</button>

        </div>
        <span className='text-gray-700 font-semibold'>Warranty: {product.warrantyInformation}</span>
        <span className='text-gray-700 font-semibold'>Shipping: {product.shippingInformation}</span>
    </div>
</div>
  )
}

export default ProductDetail