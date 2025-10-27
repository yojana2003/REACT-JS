import React, { useContext, useEffect } from 'react'
import { MdFastfood } from "react-icons/md";
import { FaSearch } from "react-icons/fa";
import { FiShoppingBag } from "react-icons/fi";
import { dataContext } from '../Context/UserContext';
import { food_items } from '../Food';
import { useSelector } from 'react-redux';

const Nav = () => {

  let{input,setInput,cate,setcate,showCart, setshowCart}=useContext(dataContext)
  useEffect(()=>{
    let newList=food_items.filter((item)=> item.food_name.includes(input) || item.food_name.toLowerCase().includes(input))
    setcate(newList)
  },[input])
   let items=useSelector(state=>state.cart)
   console.log(items)
  

  return (
    <div className='w-full h-[100px] flex justify-between items-center px-8 '>

      <div className='w-[60px] h-[60px] bg-white flex justify-center items-center rounded-md shadow-xl '>

        <MdFastfood className='w-[30px] h-[30px] text-green-500'/>

      </div>
      <form className='w-[60%] h-[60px] bg-white 
      flex items-center px-5 gap-[20px]
       rounded-md shadow-md md:w-[70%]'
       onSubmit={(e)=>e.preventDefault()}>

        <FaSearch className='text-green-500 w-[20px] h-[20px] '/>

        <input type="text" placeholder='search here...'
         className='w-full outline-none text-[16px] md:text-[20px] '
         onChange={(e)=>setInput(e.target.value)} value={input}/>

      </form>

      <div className='w-[60px] h-[60px] bg-white 
      flex justify-center items-center rounded-md shadow-xl relative cursor-pointer '
      onClick={()=>setshowCart(true)}>

        <span className='absolute top-0 right-2 text-green-500 font-bold'>{items.length}</span>

        <FiShoppingBag className='w-[30px] h-[30px] text-green-500 cursor-pointer' />
      </div>

    </div>
  )
}

export default Nav
