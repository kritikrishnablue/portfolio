import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'

const Sidebar1 = () => {
  return (
    <div className='fixed hidden sm:block sm:flex-col sm:gap-20 bg-white p-4 sm:-mt-96 rounded-r-lg shadow-2xl  sm:w-16 sm:h-28'>
        <a href="https://linkedin.com/in/kritikrishna079" target='_blank'  className=' text-3xl hover:text-pink-700 transition-colors duration-600 mb-4'><FontAwesomeIcon icon={faLinkedinIn}></FontAwesomeIcon></a>
        <a href="https://github.com/kritikrishnablue" target='_blank' className=' text-3xl hover:text-pink-700 transition-colors duration-600'><FontAwesomeIcon icon={faGithub}></FontAwesomeIcon></a>
    </div>
  )
}
export default Sidebar1