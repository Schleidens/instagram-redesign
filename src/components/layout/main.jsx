import React from 'react'
import Stories from '../stories'
import Post from '../post'

export default function mainCompo() {
  return (
    <div className="mt-6 mx-2 md:mx-20 lg:mx-96">
        <Stories />
        <Post />
    </div>
  )
}