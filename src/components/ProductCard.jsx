import React,{useState} from 'react'
import RatingReview from './RatingReview';

const ProductCard = ({prod, index}) => {
    const [rating, setRating] = useState(0)
    console.log(prod)
    function calculateOriginalPrice(discountPercentage, price){
        let d = discountPercentage/100;
        let decimalPercent = (1-d)
        let originalPrice = price / decimalPercent
        return Math.trunc(originalPrice)

    }
  return (
    <div className='product-card' key={index}>
    <img src={prod.images[0]} className='w-full h-[10rem] object-contain'/>
    <div className='p-5 flex flex-col gap-3'>
        <div className='flex items-center'>
            <span className={`${prod.availabilityStatus === "In Stock"? "text-green-700" : "text-red-700"} badge`}>{prod.availabilityStatus}</span>

        </div>
        <h2 className='product-title'>
            {prod.title}
        </h2>

        <div>
            <span className='text-xl font-bold'>
                $ {prod.price}
            </span>
            <div className='flex items-center gap-2 mt-1'>
                <span className='text-sm line-through opacity-50'>
                    $ {calculateOriginalPrice(prod.discountPercentage, prod.price)}
                </span>
                <span className='discount-percent'>
                    save {prod.discountPercentage}%
                </span>
            </div>
        </div>

        <span className='flex items-center mt-1'>
        <RatingReview rating={prod.rating} setRating={setRating}/> 
        <span className='text-xs ml-2 text-gray-500'>
            {prod.reviews.length} reviews
        </span>
        </span>

        <div className='mt-5 flex gap-2'>
            <button className='btn-primary'>View Details</button>
        </div>
    </div>
</div>
  )
}

export default ProductCard