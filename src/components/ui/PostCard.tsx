'use client'

import { useState } from 'react'

interface PostCardProps {
  username?: string
  content: string
  imageSrc?: string
}

export default function PostCard({ username = 'User', content, imageSrc }: PostCardProps) {
  const [liked, setLiked] = useState(false)

  return (
    <div className="bg-white shadow rounded-lg p-4 mb-4">
      <div className="flex items-center mb-2">
        <img src="/default-avatar.png" alt="avatar" className="w-10 h-10 rounded-full" />
        <span className="ml-2 font-bold">{username}</span>
      </div>
      {imageSrc && <img src={imageSrc} alt="post image" className="w-full h-64 object-cover mb-2" />}
      <p>{content}</p>
      <button 
        onClick={() => setLiked(!liked)} 
        className={`mt-2 ${liked ? 'text-red-500' : 'text-gray-500'}`}
      >
        {liked ? 'Unlike' : 'Like'}
      </button>
    </div>
  )
}