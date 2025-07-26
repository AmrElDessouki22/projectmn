export interface User {
  id: string
  name: string
  email: string
  profilePicture: string
}

export interface Post {
  id: string
  userId: string
  content: string
  image?: string
  createdAt: string
}