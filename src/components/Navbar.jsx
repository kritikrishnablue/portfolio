import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'  
import Navbar2 from './navbar2'
const Navbar = () => {
  const openresume = () => {
    window.open(
      "https://drive.google.com/file/d/1PaI1YMoKhoUdXduOBgZISsaEf-4-V5MX/view?usp=sharing",
      "_blank"
    );
  };
  return (
    <>
  <nav  className='flex items-center justify-between text-black px-12 py-5 fixed w-full bg-white shadow-2xl nav'>
    <div className='flex items-center'>
      <img className='h-5 w-5 sm:h-12 sm:w-12 border-black border-2 rounded-full ' src="./logo.ico" alt="logo" />
      <h2 className='text-lg sm:text-2xl font-extrabold '>kritikrishna</h2>
    </div>
    <div className='flex gap-4 text-xl font-bold'>
     <h4 className='hidden sm:block cursor-pointer' onClick={() => document.getElementById("home")?.scrollIntoView({ behavior: "smooth" })}>Home</h4>
  <h4 className='hidden sm:block cursor-pointer' onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}>About</h4>
  <h4 className='hidden sm:block cursor-pointer' onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}>Projects</h4>  
      
    </div>          
    {/* <button onClick={openresume} className='block sm:px-10 sm:py-2 bg-pink-700 border-spacing-1 rounded-full text-white hover:bg-pink-800 transition-colors duration-700'>Resume</button> */}
    <button 
          onClick={openresume} 
          className='px-4 py-2 sm:px-8 sm:py-2 text-sm sm:text-base bg-pink-700 rounded-lg text-white hover:bg-pink-800 transition duration-300 w-auto sm:w-auto'>
          Resume
        </button>
  </nav>
  <Navbar2/>
  </>
  ) 
}
export default Navbar
