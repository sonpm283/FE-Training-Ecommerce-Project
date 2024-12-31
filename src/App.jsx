import AuthLayout from '@components/Layout/AuthLayout'
import MainLayout from '@components/Layout/MainLayout'
import { createBrowserRouter, Navigate, Outlet, RouterProvider } from 'react-router-dom'
import { lazy } from 'react'
import { useAuth } from '@hooks/useAuth'
import { useSelectUser } from '@hooks/useSelectUser'

const ProductList = lazy(() => import('@pages/ProductList'))
const HomePage = lazy(() => import('@pages/HomePage'))
const Register = lazy(() => import('@pages/Auth/Register'))
const Login = lazy(() => import('@pages/Auth/Login'))
const Profile = lazy(() => import('@pages/User/Profile'))
const ChangePassword = lazy(() => import('@pages/User/ChangePassword'))
const OrderHistory = lazy(() => import('@pages/User/OrderHistory'))
const NotFound = lazy(() => import('@pages/404'))

const ProtectedRoute = () => {
  const { isAuthenticated, isLoading } = useAuth()

  if (isLoading) {
    return <p>Loading...</p>
  }

  if (!isAuthenticated) return <Navigate to="/login" replace={true} />

  return <Outlet />
}

const PublicRoute = () => {
  useAuth()
  return <Outlet />
}

const UnauthorizedRoute = () => {
  const currentUser = useSelectUser()

  if (currentUser?._id) return <Navigate to="/" replace={true} />

  return <Outlet />
}

export default function App() {
  const router = createBrowserRouter([
    {
      element: <MainLayout />,
      children: [
        {
          element: <PublicRoute />,
          children: [
            {
              path: '/',
              element: <HomePage />,
            },
            {
              path: '/products',
              element: <ProductList />,
            },
            {
              path: '*',
              element: <NotFound />,
            },
          ],
        },
        {
          element: <ProtectedRoute />,
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
          element: <UnauthorizedRoute />,
          children: [
            {
              path: '/login',
              element: <Login />,
            },
            {
              path: '/register',
              element: <Register />,
            },
          ],
        },
      ],
    },
  ])

  return <RouterProvider router={router} />
}
