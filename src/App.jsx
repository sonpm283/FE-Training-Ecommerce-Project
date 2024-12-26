import AuthLayout from '@components/Layout/AuthLayout'
import MainLayout from '@components/Layout/MainLayout'
import { createBrowserRouter, Navigate, Outlet, RouterProvider } from 'react-router-dom'
import { lazy } from 'react'
import { useSelector } from 'react-redux'
import { selectCurrentUser } from '@redux/slices/authSlice'

const ProductList = lazy(() => import('@pages/ProductList'))
const HomePage = lazy(() => import('@pages/HomePage'))
const Register = lazy(() => import('@pages/Auth/Register'))
const Login = lazy(() => import('@pages/Auth/Login'))
const Profile = lazy(() => import('@pages/User/Profile'))
const ChangePassword = lazy(() => import('@pages/User/ChangePassword'))
const OrderHistory = lazy(() => import('@pages/User/OrderHistory'))

const ProtectedRoute = ({ user }) => {
  if (!user) return <Navigate to="/login" replace={true} />

  return <Outlet />
}

const UnauthoziedRoute = ({ user }) => {
  if (user) return <Navigate to="/" replace={true} />

  return <Outlet />
}

export default function App() {
  const currentUser = useSelector(selectCurrentUser)

  const router = createBrowserRouter([
    {
      element: <MainLayout />,
      children: [
        {
          element: <ProtectedRoute user={currentUser} />,
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
            {
              path: '/',
              element: <HomePage />,
            },
            {
              path: '/product-list',
              element: <ProductList />,
            },
          ],
        },
      ],
    },
    {
      element: <AuthLayout />,
      children: [
        {
          element: <UnauthoziedRoute user={currentUser} />,
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

  // Trả về RouterProvider
  return <RouterProvider router={router} />
}
