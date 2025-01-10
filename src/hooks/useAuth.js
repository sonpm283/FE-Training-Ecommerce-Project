import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useGetUserProfileQuery } from '@apis/userApi'
import { setUserProfile } from '@redux/slices/authSlice'

export const useAuth = () => {
  const dispatch = useDispatch()
  const accessToken = useSelector((state) => state.auth.accessToken)

  const { data, isSuccess } = useGetUserProfileQuery(undefined, {
    skip: !accessToken,
  })

  useEffect(() => {
    if (isSuccess) {
      dispatch(setUserProfile(data?.data))
    }
  }, [data, isSuccess, dispatch])

  return {
    isAuthenticated: !!accessToken,
  }
}
