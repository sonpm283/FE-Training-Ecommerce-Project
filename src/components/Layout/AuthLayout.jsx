import FullScreenLoading from '@components/FullScreenLoading'
import { Suspense } from 'react'
import { Outlet } from 'react-router-dom'

export default function AuthLayout() {
  return (
    <div className="max-w-xl mx-auto pt-20">
      <Suspense fallback={<FullScreenLoading />}>
        <Outlet />
      </Suspense>
    </div>
  )
}
