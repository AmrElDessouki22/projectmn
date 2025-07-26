import Header from '@/components/ui/Header'
import Sidebar from '@/components/ui/Sidebar'
import PostCard from '@/components/ui/PostCard'

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <div className="flex">
        <Sidebar />
        <main className="flex-1 p-6">
          <h1 className="text-3xl font-bold">Feed</h1>
          <PostCard />
          {/* Additional posts can be mapped here */}
        </main>
      </div>
    </div>
  )
}