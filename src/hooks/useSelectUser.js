import { selectUserProfile } from '@redux/slices/authSlice'
import { useSelector } from 'react-redux'

export const useSelectUser = () => {
  return useSelector(selectUserProfile)
}
