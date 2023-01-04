import React from 'react'
import { FiMoreHorizontal } from 'react-icons/fi'
import { AiOutlineHeart } from 'react-icons/ai'
import  { TbMessageCircle2 } from 'react-icons/tb'
import { FiSend } from 'react-icons/fi'
import { BsBookmark } from 'react-icons/bs'
import { BsEmojiSmile } from 'react-icons/bs'

export default function postcard({profile, username, img, caption}) {
  return (
    <div className='flex flex-col border-2 border-gray-300 rounded-lg my-4'>
            <div className="flex justify-between px-2 py-2">
                <span className='flex font-bold'>
                   <img src={profile} alt="" className='h-8 w-8 rounded-full mr-2' /> {username}
                </span>
                <span>
                    <FiMoreHorizontal className='text-2xl' />
                </span>
            </div>

            <img src={img} alt="" />

            <div className="flex flex-col">
                <div className='py-2 px-2'>
                    <div className="flex justify-between">
                        <span className='flex text-2xl'>
                            <AiOutlineHeart />
                            <TbMessageCircle2 className='mx-2'/>
                            <FiSend />
                        </span>
                        <span className='text-2xl'>
                            <BsBookmark />
                        </span>
                    </div>

                    <div className="font-semibold my-2">
                        347 likes
                    </div>
                    <div>
                        <span className="font-semibold">
                            {username}
                        </span>
                        <span className='ml-2'>
                        {caption}
                        </span>
                    </div>

                    <div className="font-normal text-sm text-gray-400">
                        view all 34 comments
                    </div>
                    <div className="uppercase font-normal text-sm text-gray-400 my-1">
                        2 days ago
                    </div>
                </div>

                <div className="flex justify-between py-2 px-2 border-t border-gray-300">
                    <BsEmojiSmile className='text-2xl mr-2'/>
                    <input type="text" placeholder='Add a comment...' className='w-full outline-none' />
                    <span className='font-bold text-sky-400'>
                        Post
                    </span>
                </div>
            </div>
    </div>
  )
}
