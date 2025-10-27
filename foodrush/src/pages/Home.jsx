import React, { useContext, useState } from 'react'
import Nav from '../Components/Nav'
import Categories from '../Category'
import Card  from '../Components/Card'
import { food_items } from '../Food.jsx'
import { dataContext } from '../Context/UserContext.jsx'
import { RxCross2 } from "react-icons/rx";
import Card2 from '../Components/Card2.jsx';
import { useSelector } from 'react-redux'
import { toast } from 'react-toastify'


const Home = () => {
  let { cate,setcate,input,showCart, setshowCart}=useContext(dataContext)    

  function filter(Category){
      if(Category === "All"){
        setcate(food_items)
      }else{
        
       let newlist= food_items.filter((item)=>(
          item.food_category === Category
        ))
        setcate(newlist)
      }

  }

let items=useSelector(state=>state.cart)

let subTotal=items.reduce((total,item)=>total+item.qty*item.price,0)

let deliveryFee=20;
let taxes=subTotal*0.5/100;
let total =Math.floor (subTotal+deliveryFee+taxes)

  return (
    <div className='w-full min-h-screen bg-slate-200 pb-32'>
      <Nav/>
        
        {/* food Categories */}
       
        {input.trim() === "" && (                   // conditional rendering
        <div className='flex flex-wrap justify-center gap-5 w-full'>
          {Categories.map((item) => (
            <div
              key={item.id}
              className='w-[140px] h-[150px] bg-white flex flex-col items-center p-5 gap-1 font-semibold
               text-gray-700 hover:bg-green-300 rounded-lg shadow-lg 
               transition-all duration-300 cursor-pointer'
              onClick={() => filter(item.name)}
            >
              {item.name}
              {item.icon}
            </div>
          ))}
        </div>
      )}
        
          {/* food items */}

        <div className='flex flex-wrap gap-5 px-5 justify-center items-center pt-8 pb-8 '>
          {cate.length>1?cate.map((item)=>(
            <Card 
            key={item.id}
            id={item.id}
            name={item.food_name}
            image={item.food_image}
            price={item.price}
            type={item.food_type}
             />
          )):<div className='text-2xl text-green-500 font-semibold pt-5'>No dish found</div>}         
          

        </div>

        <div className= {`w-full md:w-[40vw] h-[100%] fixed top-0 right-0 bg-white shadow-xl p-6 transition-all duration-500 flex flex-col items-center overflow-auto
          ${showCart?"translate-x-0":"translate-x-full"} `} >

            <header className='w-full flex justify-between items-center p-6 '>

              <span className='text-green-400 font-semibold text-[18px]'>Order item</span>
              <span className='text-green-400 font-semibold text-[30px] cursor-pointer' onClick={()=>setshowCart(false)}><RxCross2 /></span>
              
            </header>
            <div className='w-full mt-9 flex flex-col gap-8 '>
              {items.map((item)=>(
                <Card2 
                  key={item.id}
                  name={item.name} 
                  price={item.price}
                  image={item.image} 
                  id={item.id} 
                  qty={item.qty}/>
              ))}
            </div>
            <div className='w-full border-t-2 border-b-2 border-gray-400 mt-7 flex flex-col gap-2 p-8'>
                <div  className='w-full flex justify-between items-center'>
                  <span className='text-lg text-gray-600 font-semibold'>SubTotal</span>
                  <span className='text-green-400 font-semibold text-lg'>{subTotal}/-</span>
                </div>
                <div  className='w-full flex justify-between items-center'>
                  <span className='text-lg text-gray-600 font-semibold'>Delivery</span>
                  <span className='text-green-400 font-semibold text-lg'>{deliveryFee}/-</span>
                </div>
                <div  className='w-full flex justify-between items-center'>
                  <span className='text-lg text-gray-600 font-semibold'>Taxes</span>
                  <span className='text-green-400 font-semibold text-lg'>{taxes}/-</span>
                </div>
                
            </div>
            <div  className='w-full flex justify-between items-center p-9 text-2xl'>
                  <span className='text-lg text-gray-600 font-semibold'>Total</span>
                  <span className='text-green-400 font-semibold text-lg'>{total}/-</span>
              </div>
              <button className='w-[80%] h-[30px] bg-green-300 text-gray-700 hover:bg-green-400 cursor-pointer rounded-md transition-all duration-200 font-semibold'
              onClick={()=>{
                toast.success("Order placed...")
                }}>
                  Place Order
                  </button>
        </div>

        
    </div>
  ) 
}

export default Home
