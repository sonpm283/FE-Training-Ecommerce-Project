import { useGetUserProfileQuery } from '@apis/userApi'
import FullScreenLoading from '@components/FullScreenLoading'
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

  if (isLoading) {
    return <FullScreenLoading />
  }

  if (!accessToken) {
    return <Navigate to="/login" replace />
  }

  return <Outlet />
}
