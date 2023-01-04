import React from 'react'
import stories from  '../data/stories'

export default function storiesCompo() {
  return (
        <div className='flex justify-center overflow-hidden'>
       {stories.map((story, index) =>(
        <div className="rounded-full mx-2" key={index}>
            <img src={story.img} className="rounded-full h-20 w-20" alt="" />
            <span className='text-sm'>
                {story.username}
            </span>
        </div>
       ))}
        </div>
  )
}
