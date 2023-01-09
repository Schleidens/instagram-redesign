import React from 'react'
import { AiOutlineInstagram } from 'react-icons/ai'
import { AiOutlineHome } from 'react-icons/ai'
import { AiOutlineHeart } from 'react-icons/ai'
import { FiSend } from 'react-icons/fi'

export default function navbar() {
  return (
    <div className='flex justify-between md:px-12 px-4 py-4 border-b-2 border-gray-300 text-3xl sticky top-0 bg-white'>
        <div className='flex'> 
          <AiOutlineInstagram />
        </div>

        <div className='hidden md:flex w-full lg:mx-72 md:mx-20'>
          <AiOutlineHome/>
          <input type="text" placeholder='Search' className='bg-gray-300 rounded mx-4 w-full text-center text-base outline-none' />
          <AiOutlineHeart />
        </div>

        <div className='flex'>
          <FiSend />
          <div className="rounded">
            <a href="https://github.com/Schleidens" target="_blank">
              <img src="https://avatars.githubusercontent.com/u/53914451?v=4" className='h-7 rounded-full ml-4' alt="" />
            </a>
          </div>
        </div>
    </div>
  )
}
