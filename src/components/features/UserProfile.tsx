'use client'

import { useUser } from '@/contexts/UserContext'

export default function UserProfile() {
  const { user } = useUser()

  if (!user) {
    return <div>Loading...</div>
  }

  return (
    <div className="text-center">
      <img src={user.profilePicture} alt={`${user.name}'s profile picture`} className="w-24 h-24 rounded-full mx-auto" />
      <h2 className="text-2xl font-bold mt-2">{user.name}</h2>
      <p className="text-gray-600">{user.email}</p>
    </div>
  )
}