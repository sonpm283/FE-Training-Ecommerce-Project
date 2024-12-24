import { useGetUserProfileQuery } from '@apis/userApi'
import Footer from '@components/Footer/Footer'
import FullScreenLoading from '@components/FullScreenLoading'
import Header from '@components/Header'
import { saveUserProfile, selectAccessToken } from '@redux/slices/authSlice'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Navigate, Outlet } from 'react-router-dom'

export default function ProtectedLayout() {
  const accessToken = useSelector(selectAccessToken)
  const dispatch = useDispatch()

  const { data, isLoading, isSuccess } = useGetUserProfileQuery(undefined, {
    skip: !accessToken,
  })

  useEffect(() => {
    if (isSuccess) {
      dispatch(saveUserProfile(data.data))
    }
  }, [data, dispatch, isSuccess])

  if (!accessToken) {
    return <Navigate to="/login" />
  }

  if (isLoading) {
    return <FullScreenLoading />
  }

  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  )
}
