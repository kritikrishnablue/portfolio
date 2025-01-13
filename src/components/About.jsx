import React from 'react'

const About = () => {
  return (

    <div className='p-10 sm:p-20  sm:mt-48 min-h-screen bg-gray-100 '>
      <div className='flex flex-col items-center'>
        <h1 className='text-black text-2xl sm:text-4xl font-bold '>ABOUT ME</h1>
        <div className='mt-2 w-16 h-[6px] border rounded bg-red-700 mb-1 sm:mb-2'></div>
        <p className='text-gray-500 text-base sm:text-xl mb-8 sm:mb-16 max-w-2xl text-center'>Here you will find more information about me, what I do, and my current skills mostly in terms of programming and technology</p>
      </div>
      <div className='flex flex-col sm:flex-row justify-between px-4 gap-8 ' >
        <div className='flex flex-col p-0 sm:p-4 md:w-1/2'>
          <h2 className='text-xl sm:text-2xl font-bold mb-4 sm:mb-8'>Get to know me!</h2>
          <p className='text-sm sm:text-lg text-gray-500 mb-2 sm:mb-4'>I'm a Frontend Focused Web Developer building and managing the Front-end of Websites and Web Applications that leads to the success of the overall product. Check out some of my work in the Projects section.</p>
          <p className='text-sm sm:text-lg text-gray-500 mb-2 sm:mb-4'>I also like sharing content related to the stuff that I have learned over the years in Web Development so it can help other people of the Dev Community. Feel free to Connect or Follow me on my Linkedin and Instagram where I post useful content related to Web Development and Programming.</p>
          <p className='text-sm sm:text-lg text-gray-500 mb-2 sm:mb-4'>I'm open to Job opportunities where I can contribute, learn and grow. If you have a good opportunity that matches my skills and experience then don't hesitate to contact me.</p>
          <button className='bg-pink-700 text-lg w-34 h-12 rounded-lg sm:w-40 sm:h-16 sm:rounded-xl sm:text-xl m-10 text-white hover:bg-pink-800 transition-colors duration-300' onClick={'Contact.jsx'}>CONTACT</button>
        </div>
        <div className='p-4 sm:w-1/2'>
          <h2 className='text-xl sm:text-2xl font-bold mb-4 sm:mb-8'>My Skills</h2>
          <ul className='flex flex-row flex-wrap gap-3 sm:gap-6 '>
            <div className='items-center text-center w-12 h-8 mb-1 text-xs sm:w-20 sm:h-10 p-2 border-2 rounded sm:rounded-lg sm:mb-2 bg-gray-200 text-gray-700 font-medium sm:text-base'>HTML</div>
            <div className='items-center text-center w-10 h-8 mb-1 text-xs sm:w-20 sm:h-10 p-2 border-2 rounded sm:rounded-lg sm:mb-2 bg-gray-200 text-gray-700 font-medium sm:text-base'>CSS</div>
            <div className='items-center text-center w-15 h-8 mb-1 text-xs sm:w-24 sm:h-10 p-2 border-2 rounded sm:rounded-lg sm:mb-2 bg-gray-200 text-gray-700 font-medium sm:text-base'>Javascript</div>
            <div className='items-center text-center w-12 h-8 mb-1 text-xs sm:w-20 sm:h-10 p-2 border-2 rounded sm:rounded-lg sm:mb-2 bg-gray-200 text-gray-700 font-medium sm:text-base'>React</div>
            <div className='items-center text-center w-20 h-8 mb-1 text-xs sm:w-28 sm:h-10 p-2 border-2 rounded sm:rounded-lg sm:mb-2 bg-gray-200 text-gray-700 font-medium sm:text-base'>Tailwind css</div>
            <div className='items-center text-center w-30 h-8 mb-1 text-xs sm:w-40 sm:h-10 p-2 border-2 rounded sm:rounded-lg sm:mb-2 bg-gray-200 text-gray-700 font-medium sm:text-base'>Responsive design</div>
            <div className='items-center text-center w-10 h-8 mb-1 text-xs sm:w-20 sm:h-10 p-2 border-2 rounded sm:rounded-lg sm:mb-2 bg-gray-200 text-gray-700 font-medium sm:text-base'>DSA</div>
            <div className='items-center text-center w-8 h-8 mb-1 text-xs sm:w-20 sm:h-10 p-2 border-2 rounded sm:rounded-lg sm:mb-2 bg-gray-200 text-gray-700 font-medium sm:text-base'>C</div>
            <div className='items-center text-center w-10 h-8 mb-1 text-xs sm:w-20 sm:h-10 p-2 border-2 rounded sm:rounded-lg sm:mb-2 bg-gray-200 text-gray-700 font-medium sm:text-base'>CPP</div>
            <div className='items-center text-center w-12 h-8 mb-1 text-xs sm:w-20 sm:h-10 p-2 border-2 rounded sm:rounded-lg sm:mb-2 bg-gray-200 text-gray-700 font-medium sm:text-base'>JAVA</div>
            <div className='items-center text-center w-30 h-8 mb-1 text-xs sm:w-40 sm:h-10 p-2 border-2 rounded sm:rounded-lg sm:mb-2 bg-gray-200 text-gray-700 font-medium sm:text-base'>Problem solving</div>
            <div className='items-center text-center w-10 h-8 mb-1 text-xs sm:w-20 sm:h-10 p-2 border-2 rounded sm:rounded-lg sm:mb-2 bg-gray-200 text-gray-700 font-medium sm:text-base'>Git</div>
            <div className='items-center text-center w-12 h-8 mb-1 text-xs sm:w-24 sm:h-10 p-2 border-2 rounded sm:rounded-lg sm:mb-2 bg-gray-200 text-gray-700 font-medium sm:text-base'>Github</div>

          </ul>
        </div>
      </div>
    </div>
  )
}

export default About