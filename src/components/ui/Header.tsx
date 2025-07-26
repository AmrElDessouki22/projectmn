import Link from 'next/link'

export default function Header() {
  return (
    <header className="bg-white shadow p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/">
          <a className="text-xl font-bold">Instagram Clone</a>
        </Link>
        <nav>
          <Link href="/profile">
            <a className="mr-4">Profile</a>
          </Link>
          <Link href="/settings">
            <a>Settings</a>
          </Link>
        </nav>
      </div>
    </header>
  )
}