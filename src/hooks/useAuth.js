import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useGetUserProfileQuery } from '@apis/userApi'
import { setUserProfile } from '@redux/slices/authSlice'
import { useSelectUser } from './useSelectUser'

export const useAuth = () => {
  const dispatch = useDispatch()
  const accessToken = useSelector((state) => state.auth.accessToken)
  const userProfile = useSelectUser()

  const { data, isSuccess, isLoading, isError } = useGetUserProfileQuery(undefined, {
    skip: !accessToken,
  })

  useEffect(() => {
    if (isSuccess) {
      dispatch(setUserProfile(data?.data))
    }
  }, [data, isSuccess, dispatch])

  return {
    isAuthenticated: !!accessToken,
    isLoading,
    isError,
    userProfile,
    accessToken,
  }
}
