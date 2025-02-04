import React from 'react'
import Sidebar1 from './Sidebar1'
const Home = () => {
  return (
    <div className='min-h-screen'>
      <div className='bg-gray-100 flex flex-col text-center items-center justify-center min-h-screen bg-[url("/background.svg")] bg-cover bg-center'>
        <h1 className='text-black text-3xl sm:text-6xl font-bold mb-8'>HEY,I'M KRITI KRISHNA</h1>
        <p className='text-gray-600 text-base sm:text-xl max-w-2xl mb-11'>A Result-Oriented Web Developer building and managing Websites and Web Applications that leads to the success of the overall product.</p>
        <button className='bg-pink-700 px-20 py-4 sm:px-24 sm:py-4 rounded-md text-white font-extrabold text-xl sm:text-2xl hover:bg-pink-800 transition-colors duration-700'>Projects</button>
      </div> 
      <Sidebar1/>
    </div>
  )
}
export default Home
