import React from 'react'
import Postcard from './postcard'
import posts from '../data/posts'

export default function post() {
  return (
    <div className='mt-8'>
       {
        posts.map((post, index) => (
            <Postcard key={index} profile={post.profile} username={post.username} img={post.img} caption={post.caption} />
        ))
       }
    </div>
  )
}
