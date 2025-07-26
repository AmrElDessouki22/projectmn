'use client'

import { useState } from 'react'
import Button from '@/components/ui/Button'
import Input from '@/components/ui/Input'

export default function PostForm() {
  const [content, setContent] = useState('')
  const [image, setImage] = useState<File | null>(null)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle post submission logic
    console.log('Post submitted:', { content, image })
  }

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <Input 
        value={content}
        onChange={(e) => setContent(e.target.value)}
        placeholder="What's on your mind?"
        className="w-full mb-2"
      />
      <input 
        type="file" 
        onChange={(e) => setImage(e.target.files ? e.target.files[0] : null)}
        className="mb-2"
      />
      <Button type="submit" variant="primary" size="md">Post</Button>
    </form>
  )
}