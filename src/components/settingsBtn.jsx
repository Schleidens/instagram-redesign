import React from 'react'
import { RxHamburgerMenu } from 'react-icons/rx'

export default function settingsBtn() {
  return (
    <div className='fixed bottom-5 left-12 text-3xl hidden lg:block'>
        <RxHamburgerMenu  className='text-gray-600'/>
    </div>
  )
}
