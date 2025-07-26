'use client'

import { useState } from 'react'

export default function Notifications() {
  const [notifications, setNotifications] = useState<string[]>([
    'You have a new follower!',
    'Your post was liked by John Doe.',
    'You have a new comment on your post.'
  ])

  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-2">Notifications</h2>
      <ul>
        {notifications.map((notification, index) => (
          <li key={index} className="mb-1">{notification}</li>
        ))}
      </ul>
    </div>
  )
}