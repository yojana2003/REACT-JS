import React, { useContext, useState } from 'react'  // Added useState here
import { dataContext } from '../Context/UserContext'
import { LuLeafyGreen } from "react-icons/lu";
import { GiChickenOven } from "react-icons/gi";
import { FaStar } from "react-icons/fa"; //  Added icon import
import { toast } from 'react-toastify';

const Card = ({ name, image, price, id, type }) => {

  const { AddItem } = useContext(dataContext)

  //  Added rating state
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(null);

  return (
    <div className='w-[300px] h-[420px] bg-white p-4 rounded-lg flex flex-col gap-3 shadow-lg hover:border-4 border-green-200'>
      <div className='w-full h-[60%] overflow-hidden rounded-lg'>
        <img src={image} alt="" className='w-full h-full object-cover' />
      </div>

      <div className='text-2xl font-semibold'>{name}</div>

      <div className='w-full flex justify-between items-center text-green-500 font-bold'>
        <div>{price}/-</div>
        <div className='flex items-center gap-2'>
          {type === "veg" ? <LuLeafyGreen /> : <GiChickenOven />}
          <span>{type}</span>
        </div>
      </div>

      {/* Added Star Rating UI */}
      <div className='flex gap-1 items-center'>
        {[1,2,3,4,5].map((star) => (
          <FaStar 
            key={star}
            size={22}
            onClick={() => setRating(star)
            }
            
            onMouseEnter={() => setHover(star)}
            onMouseLeave={() => setHover(null)}
            className={
              (hover || rating) >= star 
              ? "text-yellow-500 cursor-pointer transition"
              : "text-gray-300 cursor-pointer transition"
            }
          />
        ))}
        {/*  Rating Display */}
        <span className='ml-2 text-sm font-semibold text-gray-600'>
          {rating}/5
        </span>
      </div>

      {/*  Your ORIGINAL Button — untouched! */}
      <button
        className='w-full h-[30px] bg-green-300 text-gray-700 hover:bg-green-400 cursor-pointer rounded-md transition-all duration-200 font-semibold'
        onClick={() => {
          AddItem({ id, name, price, image, qty: 1 })
          toast.success("Item added")
        }}
      >
        Add to Dish
      </button>
    </div>
  )
}

export default Card
