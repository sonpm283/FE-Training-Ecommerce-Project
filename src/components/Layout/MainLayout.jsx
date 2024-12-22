import Footer from '@components/Footer/Footer'
import Header from '@components/Header'
import { Outlet } from 'react-router-dom'
import { Suspense } from 'react'

export default function MainLayout() {
  return (
    <div className="wrap">
      <Header />

      <main>
        <Suspense fallback={<p>Loading...</p>}>
          <Outlet />
        </Suspense>
      </main>

      <Footer />
    </div>
  )
}
