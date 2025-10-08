import React, { useEffect, useState } from 'react'
import { FiMenu, FiX } from "react-icons/fi";
import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";



const Bar = () => {
  const [isOpen, setIsOpen]=useState(false)
  const [activeSection, setActiveSection] =useState() ;
  const [isScrolled, setIsScrolled]= useState(false)

  useEffect(()=>{
    const handleScroll =()=>{
      setIsScrolled(window.scrollY >50);
    };
    window.addEventListener("scroll",handleScroll);
    return () => window.removeEventListener("scroll",handleScroll)

  },[]);


    const handleMenuItemClick =(sectionId)=>{
      setActiveSection(sectionId);
      setIsOpen(false);
      const scroll =document.getElementById(sectionId);
      if(scroll) scroll.scrollIntoView({behavior:'smooth'})
    }


  const menuBar =[
    {id:"about", label:"About"},
    {id:"experience", label:"Experience"},
    {id:"skill", label:"Skill"},
    {id:"Project", label:"Project"},
    {id:"education", label:"Education"},

  ];



  return (
    <nav className= {`fixed top-0 w-full z-50 transition duration-300 px-[7vw] md:px-[7vw] lg:px-[20vw]  ${
        isScrolled ?  "bg-transparent backdrop-blur-2xl ":"bg-[#050414] bg-opacity-50 backdrop-blur-md shadow-md"
      }`}>

      <div className='text-white py-7 flex justify-between items-center '>


        {/* logo */}
        <div className='text-lg font-semibold cursor-pointer '>
          <span className='text-[#8245ec]'>&lt;</span>
          <span className='text-white'>Yojana</span>
          <span className='text-[#8245ec]'>/</span>
          <span className='text-white'>Chaudhari</span>
          <span className='text-[#8245ec]'>&gt;</span>
        </div>

        {/* MenuBar */}


          <ul className=' hidden md:flex space-x-3 text-gray-300 gap-3.5'>
            {menuBar.map((item)=>(
             <li key={item.id} className={` hover:text-[#8245ec] 
             ${activeSection === item.id? "text-[#8245ec] border-b-2 border-purple-500 transition-all duration-300 animate-bounce":""
             
             
             }`}>
                <button 
                onClick={()=> handleMenuItemClick(item.id)}
                
                className='cursor-pointer'>
                  {item.label}
                </button>
             </li> 

              
            ))}
          </ul>

            {/* Icons */}

            <div className='hidden md:flex space-x-5 gap-2'>

              <a href="https://github.com/"
               target='_blank '
                className='text-gray-300 hover:text-[#8245ec]'
                >
                  <FaGithub size={26}/>
                </a>

              <a href=""
              target='_blank'
              className='text-gray-300 hover:text-[#8245ec]'
              >
                <FaLinkedinIn size={26}/>
              </a>

            </div>

            <div className='md:hidden'>
              {
                isOpen?(
                  <FiX className='text-3xl text-[#8245ec] cursor-pointer'
                  onClick={()=> setIsOpen(false)}
                  />
                ):(
                  <FiMenu className ='text-3xl text-[#8342ec] cursor-pointer'
                  onClick={()=> setIsOpen(true)}/>
                )
              }

            </div>
            
            {isOpen && (
              <div className='absolute top-16 left-1/2 w-4/4 bg-[#050414] bg-opacity-50 backdrop:-filter backdrop-blur-lg z-50 rounded-lg shodow-lg md:hidden'>
                <ul className='flex flex-col item-center space-y-4 py-6 text-gray-300 '>

                {menuBar.map((item)=>(
                  <li key={item.id}
                  className={`cursor-pointer hover:text-white ${
                    activeSection === item.id? "text-[#8245ec]":""
                  }`}
                  >
                    <button className='relative left-20' onClick={()=> handleMenuItemClick(item.id)}>
                      {item.label}
                    </button>



                  </li>



                ))}
                  <div className='flex space-x-4 absolute bottom-2 left-20   '>

                    <a href="https://github.com/"
                    target='_blank '
                    className='text-gray-300 hover:text-white'
                    >
                      <FaGithub size={26}/>
                    </a>

                  <a href=""
                  target='_blank'
                  className='text-gray-300 hover:text-white'
                  >
                    <FaLinkedinIn size={26}/>
                  </a>
                  
                  </div>
                </ul>
              </div>


            )}
      </div>
    </nav>
  )
}

export default Bar
