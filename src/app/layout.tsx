import './globals.css'
import { UserProvider } from '@/contexts/UserContext'

export const metadata = {
  title: 'Instagram Clone',
  description: 'A simplified Instagram clone built with Next.js',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <UserProvider>
          {children}
        </UserProvider>
      </body>
    </html>
  )
}