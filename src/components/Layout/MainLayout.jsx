import { Outlet } from 'react-router-dom'
import { Suspense } from 'react'
import FullScreenLoading from '@components/FullScreenLoading'
import Header from '@components/Header'
import Footer from '@components/Footer/Footer'

export default function MainLayout() {
  return (
    <Suspense fallback={<FullScreenLoading />}>
      <div className="wrap">
        <Header />
        <main>
          <Outlet />
        </main>
        <Footer />
      </div>
    </Suspense>
  )
}
