import { Outlet } from 'react-router-dom'
import Header from './Header'
import BottomNav from './BottomNav'

export default function Layout() {
  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#f3f4f6' }}>
      <Header />
      <main style={{ paddingBottom: '80px', paddingTop: '16px' }}>
        <div style={{ maxWidth: '448px', margin: '0 auto', padding: '0 16px' }}>
          <Outlet />
        </div>
      </main>
      <BottomNav />
    </div>
  )
}
