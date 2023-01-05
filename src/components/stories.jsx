import React from 'react'
import stories from  '../data/stories'
import StoriesItem from './storiesItem'

export default function storiesCompo() {
  return (
        <div className='flex justify-center overflow-auto'>
          {stories.map((story, index) =>(
            <StoriesItem key={index} img={story.img} username={story.username} />
          ))}
        </div>
  )
}
