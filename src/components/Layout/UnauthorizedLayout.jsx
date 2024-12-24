import { useSelectUser } from '@hooks/useSelectUser'
import { Navigate, Outlet } from 'react-router-dom'

export default function UnauthorizedLayout() {
  const userProfile = useSelectUser()

  if (userProfile?._id) {
    return <Navigate to="/" replace />
  }

  return <Outlet />
}
