import { useGetUserProfileQuery } from '@apis/userApi'
import { saveUserProfile } from '@redux/slices/authSlice'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { Navigate, Outlet } from 'react-router-dom'

export default function ProtectedLayout() {
  const { data, isSuccess, isLoading } = useGetUserProfileQuery()

  console.log('isLoading', isLoading)
    console.log('isSuccess', isSuccess)
    console.log('sssssss', data)
  
  const dispatch = useDispatch()

  useEffect(() => {
    console.log('useEffect isLoading', isLoading)
    console.log('useEffect isSuccess', isSuccess)
    console.log('useEffect sssssss', data)

    if (isSuccess) {
      dispatch(saveUserProfile(data?.data))
    }
  }, [isSuccess, data, dispatch])

  if (isLoading) {
    return <p>Loading...</p>
  }

  if (!data?.data?._id) {
    return <Navigate to="/login" replace />
  }

  return <Outlet />
}
