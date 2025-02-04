import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
const Contact = () => {
const[name,setname]=useState('');
const[email,setemail]=useState('');
const[message,setmessage]=useState('');
const submitHandler=(e)=>{
  e.preventDefault();
  console.log('Form submitted');
  console.log(name);
  console.log(email);
  setname('');
  setemail('');
  setmessage('');
}
  return (
    <div className='flex flex-col items-center bg-gray-100'>
      <h1 className='text-black text-2xl sm:text-4xl font-bold '>CONTACT</h1>
      <div className='mt-2 w-16 h-[6px] border rounded bg-red-700 mb-2'></div>
      <p className='text-gray-500 text-lg sm:text-xl mb-8 sm:mb-16 max-w-2xl text-center px-4'>Feel free to Contact me by submitting the form below and I will get back to you as soon as possible</p>
      <form onSubmit={
        (e)=>submitHandler(e)
      } 
      action="" className='flex flex-col bg-white text-gray-500 shadow-2xl p-6 sm:p-12 mb-16 sm:mb-28 w-[90%] max-w-3xl mx-4'>
        <label htmlFor="name" className='text-gray-600 font-bold text-sm'>Name</label>
        <input value={name} onChange={(e)=>{setname(e.target.value)}} type="text" id="name" placeholder='Enter your name' className='w-full h-12 rounded-sm bg-gray-200 mb-8 placeholder:text-base p-2'/>
        <label htmlFor="email" className='text-gray-600 font-bold text-sm'>Email</label>
        <input value={email} onChange={(e)=>{setemail(e.target.value)}} type="email" id="email" placeholder='Enter your email' className='w-full h-12 rounded-sm bg-gray-200 mb-8 placeholder:text-base p-2'/>
        <label htmlFor="message" className='text-gray-600 font-bold text-sm'>Message</label>
        <textarea value={message}  onChange={(e)=>{setmessage(e.target.value)}} id="message" placeholder='Enter your message' className='w-full h-52 rounded-sm bg-gray-200 mb-8 placeholder:text-base p-2 resize-none'/>
        <button className='text-lg sm:text-2xl w-24 h-10 sm:w-28 sm:h-14 bg-pink-700 text-white rounded-lg hover:bg-pink-800 transition-colors duration-300'>Submit</button>
      </form>
      <div className='bg-black text-white flex flex-col sm:flex-row justify-between w-full px-6 sm:px-20 py-8 sm:py-16 space-y-8 sm:space-y-0'>
        <div className='sm:w-96'>
          <h5 className='mb-2 sm:mb-4 text-lg sm:text-xl '>Kriti Krishna</h5>
          <p className='text-xs sm:text-sm'>A Frontend focused Web Developer building the Frontend of Websites and Web Applications that leads to the success of the overall product</p>
        </div>
        <div className='sm:w-96 sm:text-center text-lg sm:text-xl'>
          <h4 className='mb-1 sm:mb-4'>Social</h4>
          <a href="https://linkedin.com/in/kritikrishna079" target='_blank'  className='text-white hover:text-pink-700 transition-colors duration-600 p-2'><FontAwesomeIcon icon={faLinkedinIn}></FontAwesomeIcon></a>
        <a href="https://github.com/kritikrishnablue" target='_blank' className='text-white hover:text-pink-700 transition-colors duration-600 p-2'><FontAwesomeIcon icon={faGithub}></FontAwesomeIcon></a>
        </div> 
      </div>
    </div> 
  )
}
 
export default Contact