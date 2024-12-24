import { useSelector } from 'react-redux'
import { selectCurrentUser } from '@redux/slices/authSlice'
import { Navigate, Outlet } from 'react-router-dom'

export default function UnauthorizedLayout() {
  const userProfile = useSelector(selectCurrentUser)

  console.log('userProfile', userProfile);
  
  if (userProfile?._id) {
    return <Navigate to="/" replace />
  }

  // Nếu chưa đăng nhập, hiển thị child routes
  return <Outlet />
}
