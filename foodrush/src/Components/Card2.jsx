import React, { useContext } from 'react'
import { dataContext } from '../Context/UserContext'
import { RiDeleteBin6Line } from "react-icons/ri";

const Card2 = ({ name, id, price, image, qty }) => {

  const { RemoveItem, IncrementQty, DecrementQty } = useContext(dataContext)

  return (
    <div className="w-full bg-white p-3 rounded-lg shadow-md flex justify-between items-center">
      
      <div className="flex gap-3 items-center">
        <div className="w-[80px] h-[80px] rounded-lg overflow-hidden">
          <img src={image} alt="food" className="w-full h-full object-cover" />
        </div>

        <div className="flex flex-col gap-2">
          <h3 className="text-[16px] text-gray-800 font-semibold">{name}</h3>

          <div className="w-[110px] h-[35px] bg-white border rounded-lg flex overflow-hidden shadow-sm">
            <button
              className="w-[30%] h-full flex justify-center items-center text-green-500 hover:bg-gray-200"
              onClick={() => DecrementQty(id)}
            >
              -
            </button>
            <span className="w-[40%] h-full flex justify-center items-center font-semibold text-gray-600">
              {qty}
            </span>
            <button
              className="w-[30%] h-full flex justify-center items-center text-green-500 hover:bg-gray-200"
              onClick={() => IncrementQty(id)}
            >
              +
            </button>
          </div>
        </div>
      </div>

      <div className="flex flex-col justify-between items-end gap-2">
        <span className="text-green-500 font-semibold text-lg">{price}/-</span>
        <RiDeleteBin6Line
          className="text-red-500 cursor-pointer text-[20px] hover:text-red-700"
          onClick={() => RemoveItem(id)}
        />
      </div>

    </div>
  )
}

export default Card2
