import React, { createContext, useState } from 'react'
import { food_items } from '../Food'
export const dataContext =createContext()


const UserContext = ({children}) => {
  let [cate,setcate]= useState(food_items)
  let [input,setInput]=useState(" ")
  let [showCart, setshowCart]=useState(false)

  let data={
    input,
    setInput,
    cate,
    setcate,
    showCart,
    setshowCart
  }
  return (
    <div>
      <dataContext.Provider value={data}>
        {children}
      </dataContext.Provider> 
    </div>
  )
}

export default UserContext
