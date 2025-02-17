import AuthLayout from '@components/Layout/AuthLayout'
import MainLayout from '@components/Layout/MainLayout'
import { ROUTES } from './constants/routes'
import { createBrowserRouter, Navigate, Outlet, RouterProvider } from 'react-router-dom'
import { lazy } from 'react'
import { useAuth } from '@hooks/useAuth'
import { useSelectUser } from '@hooks/useSelectUser'

const ProductList = lazy(() => import('@pages/ProductList'))
const HomePage = lazy(() => import('@pages/Home/HomePage'))
const Register = lazy(() => import('@pages/Auth/Register'))
const Login = lazy(() => import('@pages/Auth/Login'))
const Profile = lazy(() => import('@pages/User/Profile'))
const ChangePassword = lazy(() => import('@pages/User/ChangePassword'))
const OrderHistory = lazy(() => import('@pages/User/OrderHistory'))
const NotFound = lazy(() => import('@pages/404'))
const Cart = lazy(() => import('@pages/Cart/Cart'))
const ProductDetail = lazy(() => import('@pages/ProductDetail/ProductDetail'))

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
          element: <PublicRoute />,
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
              path: ROUTES.CART,
              element: <Cart />,
            },
            {
              path: ROUTES.PRODUCT_DETAIL,
              element: <ProductDetail />,
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
          element: <UnauthorizedRoute />,
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
