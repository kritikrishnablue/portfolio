import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'  
import Navbar2 from './navbar2'
const Navbar = () => {
  return (
    <>
  <nav  className='flex items-center justify-between text-black px-12 py-5 fixed w-full bg-white shadow-2xl nav'>
    <div className='flex items-center'>
      <img className='h-5 w-5 sm:h-12 sm:w-12 border-black border-2 rounded-full ' src="./logo.ico" alt="logo" />
      <h2 className='text-lg sm:text-2xl font-extrabold '>kritikrishna</h2>
    </div>
    <div className='flex gap-4 text-xl font-bold'>
      <h4 className='hidden sm:block'>Home</h4>
      <h4 className='hidden sm:block'>About</h4>
      <h4 className='hidden sm:block'>Projects</h4> 
      <FontAwesomeIcon className='block sm:hidden ' icon={faBars}></FontAwesomeIcon>
    </div>          
    <button className=' hidden sm:block px-10 py-2 bg-pink-700 border-spacing-1 rounded-full text-white hover:bg-pink-800 transition-colors duration-700'>contact me</button>
  </nav>
  <Navbar2/>
  </>
  ) 
}
export default Navbar
