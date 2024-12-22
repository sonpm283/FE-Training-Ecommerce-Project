import Footer from '@components/Footer/Footer'
import Header from '@components/Header'
import { Suspense } from 'react'
import { Outlet } from 'react-router-dom'

export default function AuthLayout() {
  return (
    <div className="wrap">
      <Header />

      <main className='max-w-xl mx-auto pt-20'>
        <Suspense fallback={<p>Loading...</p>}>
          <Outlet />
        </Suspense>
      </main>

      {/* <Footer /> */}
    </div>
  )
}
