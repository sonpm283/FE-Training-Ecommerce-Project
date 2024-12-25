import AuthLayout from '@components/Layout/AuthLayout'
import MainLayout from '@components/Layout/MainLayout'
import ProtectedLayout from '@components/Layout/ProtectedLayout'
import UnauthorizedLayout from '@components/Layout/UnauthorizedLayout'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { lazy, Suspense } from 'react'

const ProductList = lazy(() => import('@pages/ProductList'))
const HomePage = lazy(() => import('@pages/HomePage'))
const Register = lazy(() => import('@pages/Auth/Register'))
const Login = lazy(() => import('@pages/Auth/Login'))
const Profile = lazy(() => import('@pages/User/Profile'))
const ChangePassword = lazy(() => import('@pages/User/ChangePassword'))
const OrderHistory = lazy(() => import('@pages/User/OrderHistory'))

export default function App() {
  const router = createBrowserRouter([
    {
      element: <MainLayout />,
      children: [
        {
          path: '/',
          element: <HomePage />,
        },
        {
          path: '/product-list',
          element: <ProductList />,
        },
        {
          element: <ProtectedLayout />,
          children: [
            {
              path: '/user/profile',
              element: <Profile />,
            },
            {
              path: '/user/change-password',
              element: <ChangePassword />,
            },
            {
              path: '/user/order-history',
              element: <OrderHistory />,
            },
          ],
        },
      ],
    },
    {
      element: <AuthLayout />,
      children: [
        {
          element: <UnauthorizedLayout />,
          children: [
            {
              path: '/login',
              element: (
                <Suspense fallback={<div>Loading Login...</div>}>
                  <Login />
                </Suspense>
              ),
            },
            {
              path: '/register',
              element: (
                <Suspense fallback={<div>Loading Register...</div>}>
                  <Register />
                </Suspense>
              ),
            },
          ],
        },
      ],
    },
  ])

  // Trả về RouterProvider
  return <RouterProvider router={router} />
}
