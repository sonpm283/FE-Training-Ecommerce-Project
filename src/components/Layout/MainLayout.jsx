import { Outlet } from 'react-router-dom'
import { Suspense } from 'react'
import FullScreenLoading from '@components/FullScreenLoading'

export default function MainLayout() {
  return (
    <Suspense fallback={<FullScreenLoading />}>
      <div className="wrap">
        <Outlet />
      </div>
    </Suspense>
  )
}
