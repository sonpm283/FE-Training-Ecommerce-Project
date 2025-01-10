import rootApi from '@/apis/rootApi'
import { logout } from './slices/authSlice'
import { persistor } from './store'

export const logoutMiddleware = (store) => (next) => (action) => {
   // Check if the action type matches the logout action type
  if (action.type === logout.type) {

    // Purge the persisted state, effectively clearing stored data
    persistor.purge()

     // Dispatch an action to reset all API caches, clearing any cached API data
    store.dispatch(rootApi.util.resetApiState())
  }
  return next(action)
}
