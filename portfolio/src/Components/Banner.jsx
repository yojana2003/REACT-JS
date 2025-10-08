import React from 'react'
import img1 from '../assets/img1.jpg'


const Banner = () => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-center min-h-screen text-center bg-gradient-to-br dark:from-gray-900 dark:to-gray-800 transition-colors duration-500 gap-x-20">
      <div className="space-y-4 pb-10 ">
        
       
        <p className="text-gray-600 dark:text-gray-300 text-lg sm:-mb-0">
           Hi, my name is
        </p>

        
        <h1 className="text-4xl sm:text-6xl font-extrabold bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent animate-pulse">
          Yojana Chaudhari
        </h1>

        
        <h2 className="text-xl sm:text-2xl ml-4 text-gray-700 dark:text-gray-300 mt-2 animate-typing overflow-hidden whitespace-nowrap  pr-5">
          Junior Web Developer Building Modern Sites
        </h2>

        
        <a href="https://drive.google.com/file/d/1uhdOoW5WLfIeyzz4HNvUsBwpuwHQEfI5/view?usp=sharing"
        target='_blank'
        className='inline-block text-white py-3 px-8 mt-5 rounded-full text-lg font-bold '
        style={{
            //   background: 'linear-gradient(90deg, #8245ec, #a855f7)',
              boxShadow: '0 0 2px #8245ec, 0 0 2px #8245ec, 0 0 40px #8245ec',
            }}
        >DOWNLOAD CV</a>
      </div>
        
        <div className=' flex justify-center md:justify-end mt-6 rounded-full '
        style={{
              boxShadow: '0 0 1px #8245ec, 0 0 1px #8245ec, 0 0 20px #8245ec',
            }}
        >


          {/* temporary image */}
            <img src={img1} 
            alt="yojana chaudhari"
            className=' w-72 h-72 md:w-96 md:h-96 rounded-full object-cover' />



        </div>


    </section>
  )
}

export default Banner
