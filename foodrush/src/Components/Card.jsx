import React, { useContext } from 'react'
import { dataContext } from '../Context/UserContext'
import { LuLeafyGreen } from "react-icons/lu";
import { GiChickenOven } from "react-icons/gi";
import { toast } from 'react-toastify';

const Card = ({ name, image, price, id, type }) => {

  const { AddItem } = useContext(dataContext)

  return (
    <div className='w-[300px] h-[380px] bg-white p-4 rounded-lg flex flex-col gap-3 shadow-lg hover:border-4 border-green-200'>
      <div className='w-full h-[60%] overflow-hidden rounded-lg'>
        <img src={image} alt="" className='object-cover' />
      </div>

      <div className='text-2xl font-semibold'>{name}</div>

      <div className='w-full flex justify-between items-center text-green-500 font-bold'>
        <div>{price}/-</div>
        <div className='flex items-center gap-2'>
          {type === "veg" ? <LuLeafyGreen /> : <GiChickenOven />}
          <span>{type}</span>
        </div>
      </div>

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
