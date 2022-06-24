import { ChartBarIcon, ChatIcon, DotsHorizontalIcon, HeartIcon, ShareIcon, TrashIcon } from '@heroicons/react/outline'
import React from 'react'

export default function Post({post}) {
  return (
    <div className='flex p-3 cursor-pointer border-b border-gray-200'>
        {/* User Image */}
        <img src={post.userImage} alt={post.name} className='h-11 w-11 rounded-full xl:mr-2 cursor-pointer hover:brightness-95'/>
        {/* Right Side */}
        <div className=''>
            {/* Header */}
            <div className='flex items-center justify-between'>
                {/* Post user info */}
                <div className='flex items-center space-x-1 whitespace-nowrap'>
                    <h4 className='font-bold text-[15px] sm:text-[16px] hover:underline'>{post.name}</h4>
                    <span className='text-sm sm:text-[15px]'>@{post.username} - </span>
                    <span className='text-sm sm:text-[15px] hover:underline'>{post.timestamp}</span>
                </div>
                {/* Dot Icon */}
                <DotsHorizontalIcon className='h-10 w-10 hoverEffect hover:bg-sky-100 hover:text-sky-500 p-2'/>

            </div>
            {/* Text */}
            <p className='text-gray-800 text-[15px] sm:text[16px] mb-2'>{post.text}</p>

            {/* Post Image */}
            <img className='rounded-2xl mr-2' src={post.img} alt={post.text}/>

            {/* Icons */}
            <div className='flex justify-between p-2 text-gray-500'>
                <ChatIcon className='h-9 w-9 hoverEffect p-2  hover:text-sky-500 hover:bg-sky-100'/>
                <TrashIcon className='h-9 w-9 hoverEffect p-2 hover:text-red-600 hover:bg-red-100'/>
                <HeartIcon className='h-9 w-9 hoverEffect p-2 hover:text-red-600 hover:bg-red-100'/>
                <ShareIcon className='h-9 w-9 hoverEffect p-2 hover:text-sky-500 hover:bg-sky-100'/>
                <ChartBarIcon className='w-9 hoverEffect h-9 p-2 hover:text-sky-500 hover:bg-sky-100'/>
            </div>
        </div>
    </div>
  )
}
