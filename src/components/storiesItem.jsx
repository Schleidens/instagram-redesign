import React from 'react'

export default function storiesitem({img, username}) {
  return (
    <div>
        <div className="flex flex-col mx-2">
            <div className='w-full'>
            <img src={img} className="rounded-full h-20" alt="" />
            </div>
            <span className='text-sm'>
                {username}
            </span>
        </div>
    </div>
  )
}
