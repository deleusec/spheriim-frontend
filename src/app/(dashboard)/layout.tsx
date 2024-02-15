'use client'

import Sidebar from '@/components/Sidebar'
import getUserSession from '@/lib/getUserSessions'
import { useEffect, useState } from 'react'

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  useEffect(() => {
    const auth = async () => {
      const {
        data: { session },
      } = await getUserSession()

      setIsAuthenticated(!!session)
    }
    auth()
  }, [])

  return (
    <div className="flex">
      {isAuthenticated && <Sidebar />}
      <main className="w-full h-screen bg-light-background overflow-y-auto">
        {children}
      </main>
    </div>
  )
}
