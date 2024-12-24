import AuthLayout from '@components/Layout/AuthLayout'
import MainLayout from '@components/Layout/MainLayout'
import ProtectedLayout from '@components/Layout/ProtectedLayout'
import UnauthorizedLayout from '@components/Layout/UnauthorizedLayout'
import Login from '@pages/Auth/Login'
import Register from '@pages/Auth/Register'
import HomePage from '@pages/HomePage'
import ProductList from '@pages/ProductList'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

export default function App() {
  const router = createBrowserRouter([
    {
      element: <MainLayout />,
      children: [
        {
          element: <ProtectedLayout />,
          children: [
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
          element: <UnauthorizedLayout />,
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
