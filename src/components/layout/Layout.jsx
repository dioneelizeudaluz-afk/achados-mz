import { Outlet } from 'react-router-dom'
import Header from './Header'
import BottomNav from './BottomNav'

export default function Layout() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="pb-20 pt-4">
        <div className="max-w-md mx-auto px-4">
          <Outlet />
        </div>
      </main>
      <BottomNav />
    </div>
  )
}
