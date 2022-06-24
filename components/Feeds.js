import { SparklesIcon } from '@heroicons/react/outline'
import React from 'react'
import Input from './Input'
import Post from './Post'

export default function Feeds() {

  const posts = [
    {
        id : 1,
        name : "Thet Paing Soe",
        username : "thetpaing9891",
        userImage : "https://media-exp2.licdn.com/dms/image/C4E03AQGWqLtRAsyHFg/profile-displayphoto-shrink_800_800/0/1520306545958?e=1661385600&v=beta&t=ECKp5kxHRnrReuXx9rLQyLnSwxpFWIlovuO8JiM2Spg",
        img : "https://images.unsplash.com/photo-1648737155328-0c0012cf2f20?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
        text : "Nice view",
        timestamp : "2 hours ago"
    },
    {
        id : 2,
        name : "Thet Paing Soe",
        username : "thetpaing9891",
        userImage : "https://media-exp2.licdn.com/dms/image/C4E03AQGWqLtRAsyHFg/profile-displayphoto-shrink_800_800/0/1520306545958?e=1661385600&v=beta&t=ECKp5kxHRnrReuXx9rLQyLnSwxpFWIlovuO8JiM2Spg",
        img : "https://images.unsplash.com/photo-1655432960599-931eeab4c735?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
        text : "Woo!",
        timestamp : "2 hours ago"
    }
  ]
  return (
    <div className="xl:ml-[370px] border-l border-r border-gray-200 xl:min-w-[576px] sm:ml-[73px] flex-grow max-w-xl">
        {/* Header */}
        <div className='flex py-2 px-3 sticky top-0 z-50 bg-white border-b border-gray-200'>
            <h2 className='text-lg sm:text-xl font-bold cursor-pointer'>Home</h2>
            <div className='hoverEffect flex items-center justify-center px-0 ml-auto w-9 h-9'>
                <SparklesIcon className='h-5'/>
            </div>
        </div>
        {/* Input */}
        <Input />
        {
            posts.map((post) => 
                <Post key={post.id} post={post}/>
            )
        }
    </div>
  )
}
