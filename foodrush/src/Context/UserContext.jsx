import React, { createContext, useState } from 'react'
import { food_items } from '../Food'

export const dataContext = createContext()

const UserContext = ({ children }) => {
  let [cate, setcate] = useState(food_items)
  let [input, setInput] = useState("")
  let [showCart, setshowCart] = useState(false)
  let [cart, setCart] = useState([])

  // Add item to cart
  const AddItem = (product) => {
    const exist = cart.find(item => item.id === product.id)
    if (exist) {
      setCart(cart.map(item =>
        item.id === product.id ? { ...item, qty: item.qty + 1 } : item
      ))
    } else {
      setCart([...cart, product])
    }
  }

  // Remove item
  const RemoveItem = (id) => {
    setCart(cart.filter(item => item.id !== id))
  }

  // Increment
  const IncrementQty = (id) => {
    setCart(cart.map(item =>
      item.id === id ? { ...item, qty: item.qty + 1 } : item
    ))
  }

  // Decrement
  const DecrementQty = (id) => {
    setCart(cart.map(item =>
      item.id === id && item.qty > 1 ? { ...item, qty: item.qty - 1 } : item
    ))
  }

  let data = {
    input, setInput,
    cate, setcate,
    showCart, setshowCart,
    cart, AddItem, RemoveItem, IncrementQty, DecrementQty
  }

  return (
    <dataContext.Provider value={data}>
      {children}
    </dataContext.Provider>
  )
}

export default UserContext
