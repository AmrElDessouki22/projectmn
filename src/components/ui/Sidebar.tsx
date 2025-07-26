export default function Sidebar() {
  return (
    <aside className="w-64 bg-gray-100 p-4">
      <nav>
        <ul>
          <li><a href="/" className="block py-2">Home</a></li>
          <li><a href="/explore" className="block py-2">Explore</a></li>
          <li><a href="/notifications" className="block py-2">Notifications</a></li>
        </ul>
      </nav>
    </aside>
  )
}