import { logout } from './slices/authSlice'
import { persistor } from './store'

export const logoutMiddleware = () => (next) => (action) => {
  if (action.type === logout.type) {
    persistor.purge()
  }
  return next(action)
}
