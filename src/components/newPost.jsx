import React from 'react'
import { BsPlusLg } from 'react-icons/bs'

export default function newPost() {
  return (
    <div className='fixed bottom-20 right-60 text-3xl hidden lg:block'>
      <button className="new__btn">
        <BsPlusLg className='btn__svg' />
      </button>
    </div>
  )
}
