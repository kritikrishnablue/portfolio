import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'

const Navbar2 = () => {
  return (
    <div className='block sm:hidden fixed top-24 left-0  bg-white  z-50 px-4 py-3 border rounded-xl'>
      <div className='flex justify-center gap-8'>
        <a href="https://linkedin.com/in/kritikrishna079" target='_blank' className='text-2xl hover:text-pink-700 transition-colors duration-600'>
          <FontAwesomeIcon icon={faLinkedinIn} />
        </a>
        <a href="https://github.com/kritikrishnablue" target='_blank' className='text-2xl hover:text-pink-700 transition-colors duration-600'>
          <FontAwesomeIcon icon={faGithub} />
        </a>
      </div>
    </div>
  )
}

export default Navbar2