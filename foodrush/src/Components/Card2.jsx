import React, { useState } from 'react'
import { RiDeleteBin6Line } from "react-icons/ri";
import { useDispatch } from 'react-redux';
import { DecrementQty, RemoveItem } from '../Redux/cartSlice';
import { IncrementQty } from '../Redux/cartSlice';

const Card2 = ({name,id,price,image,qty}) => {
  let dispatch=useDispatch()



  return (
    <div className="w-full bg-white p-3 rounded-lg shadow-md flex justify-between items-center">
      
      {/* Left Section */}
      <div className="flex gap-3 items-center">
        
        {/* Image */}
        <div className="w-[80px] h-[80px] rounded-lg overflow-hidden">
          <img src={image} alt="food" className="w-full h-full object-cover" />
        </div>

        {/* Name + Qty Counter */}
        <div className="flex flex-col gap-2">
          <h3 className="text-[16px] text-gray-800 font-semibold">{name}</h3>

          <div className="w-[110px] h-[35px] bg-white border rounded-lg flex overflow-hidden shadow-sm">
            <button className="w-[30%] h-full flex justify-center items-center text-green-500 hover:bg-gray-200"
            onClick={()=>{qty>1? dispatch(DecrementQty(id)):1}}>
              -
            </button>
            <span className="w-[40%] h-full flex justify-center items-center font-semibold text-gray-600">
              {qty}
            </span>
            <button className="w-[30%] h-full flex justify-center items-center text-green-500 hover:bg-gray-200"
            onClick={()=>{dispatch(IncrementQty(id))}}>
              +
            </button>
          </div>
        </div>

      </div>

      {/* Right Section */}
      <div className="flex flex-col justify-between items-end gap-2">
        <span className="text-green-500 font-semibold text-lg">{price}/-</span>
        <RiDeleteBin6Line className="text-red-500 cursor-pointer text-[20px] hover:text-red-700 "
         onClick={()=>dispatch(RemoveItem(id))} />
      </div>

    </div>
  )
}

export default Card2;
