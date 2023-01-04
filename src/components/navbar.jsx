import React from 'react'
import { AiOutlineInstagram } from 'react-icons/ai'
import { AiOutlineHome } from 'react-icons/ai'
import { AiOutlineHeart } from 'react-icons/ai'
import { FiSend } from 'react-icons/fi'

export default function navbar() {
  return (
    <div className='flex justify-between px-12 py-4 border-b-2 border-gray-300'>
        <div className='flex'> 
          <AiOutlineInstagram />
        </div>

        <div className='flex'>
          <AiOutlineHome/>
          <input type="text" placeholder='Search' className='bg-gray-300 rounded mx-4 w-full text-center text-base outline-none' />
          <AiOutlineHeart />
        </div>

        <div className='flex'>
          <FiSend />
          <div className="rounded">
            <img src="https://avatars.githubusercontent.com/u/53914451?v=4" className='h-6 rounded-full ml-4' alt="" />
          </div>
        </div>
    </div>
  )
}
