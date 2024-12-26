import AuthLayout from '@components/Layout/AuthLayout'
import MainLayout from '@components/Layout/MainLayout'
import { createBrowserRouter, Navigate, Outlet, RouterProvider } from 'react-router-dom'
import { lazy, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { selectUserProfile, setUserProfile } from '@redux/slices/authSlice'
import { useGetUserProfileQuery } from '@apis/userApi'

const ProductList = lazy(() => import('@pages/ProductList'))
const HomePage = lazy(() => import('@pages/HomePage'))
const Register = lazy(() => import('@pages/Auth/Register'))
const Login = lazy(() => import('@pages/Auth/Login'))
const Profile = lazy(() => import('@pages/User/Profile'))
const ChangePassword = lazy(() => import('@pages/User/ChangePassword'))
const OrderHistory = lazy(() => import('@pages/User/OrderHistory'))

const ProtectedRoute = () => {
  const accessToken = useSelector(state => state.auth.accessToken)
  const dispatch = useDispatch()

  const { data, isSuccess, isLoading } = useGetUserProfileQuery(undefined, {
    skip: !accessToken
  })

  useEffect(() => {
    if (isSuccess) {
      dispatch(setUserProfile(data?.data))
    }
  }, [data, isSuccess])

  if (isLoading) {
    return <p>Loading...</p>
  }

  if (!accessToken) return <Navigate to="/login" replace={true} />

  return <Outlet />
}

const UnauthoziedRoute = () => {
  const currentUser = useSelector(selectUserProfile)

  if (currentUser?._id) return <Navigate to="/" replace={true} />

  return <Outlet />
}

export default function App() {
  const router = createBrowserRouter([
    {
      element: <MainLayout />,
      children: [
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
          element: <UnauthoziedRoute />,
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
