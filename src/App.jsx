import AuthLayout from '@components/Layout/AuthLayout'
import MainLayout from '@components/Layout/MainLayout'
import ROUTES from './constants/route'
import { createBrowserRouter, Navigate, Outlet, RouterProvider } from 'react-router-dom'
import { lazy } from 'react'
import { useAuth } from '@hooks/useAuth'
import { useSelectUser } from '@hooks/useSelectUser'
import { ErrorBoundary } from './components'

const ProductList = lazy(() => import('@pages/ProductList'))
const HomePage = lazy(() => import('@pages/HomePage'))
const Register = lazy(() => import('@pages/Auth/Register'))
const Login = lazy(() => import('@pages/Auth/Login'))
const Profile = lazy(() => import('@pages/User/Profile'))
const ChangePassword = lazy(() => import('@pages/User/ChangePassword'))
const OrderHistory = lazy(() => import('@pages/User/OrderHistory'))
const NotFound = lazy(() => import('@pages/404'))

const ProtectedRoute = () => {
  const { isAuthenticated } = useAuth()
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
          element: (
            <ErrorBoundary>
              <PublicRoute />
            </ErrorBoundary>
          ),
          children: [
            {
              path: ROUTES.HOME,
              element: <HomePage />,
            },
            {
              path: ROUTES.PRODUCT_LIST,
              element: <ProductList />,
            },
            {
              path: '*',
              element: <NotFound />,
            },
          ],
        },
        {
          element: (
            <ErrorBoundary>
              <ProtectedRoute />
            </ErrorBoundary>
          ),
          children: [
            {
              path: ROUTES.PROFILE,
              element: <Profile />,
            },
            {
              path: ROUTES.USER_CHANGE_PASSWORD,
              element: <ChangePassword />,
            },
            {
              path: ROUTES.ORDER_HISTORY,
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
          element: (
            <ErrorBoundary>
              <UnauthorizedRoute />
            </ErrorBoundary>
          ),
          children: [
            {
              path: ROUTES.LOGIN,
              element: <Login />,
            },
            {
              path: ROUTES.REGISTER,
              element: <Register />,
            },
          ],
        },
      ],
    },
  ])

  return <RouterProvider router={router} />
}
