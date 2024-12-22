import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { ToastContainer } from 'react-toastify';
import MainLayout from '@components/Layout/MainLayout'
import HomePage from '@pages/HomePage'
import ProductList from '@pages/ProductList'
import AuthLayout from '@components/Layout/AuthLayout'
import Login from '@pages/Auth/Login'
import Register from '@pages/Auth/register'
import { Provider } from 'react-redux'
import { store } from '@redux/store'

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
    ],
  },
  {
    element: <AuthLayout />,
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
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
      <ToastContainer position='bottom-right' theme='colored' />
    </Provider>
  </StrictMode>
)
