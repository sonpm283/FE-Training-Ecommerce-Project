import { configureStore } from '@reduxjs/toolkit'
import authReducer from '@redux/slices/authSlice'
import { rootApi } from '@apis/rootApi'

export const store = configureStore({
  reducer: {
    auth: authReducer,
    [rootApi.reducerPath]: rootApi.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }).concat(
      rootApi.middleware
    ),
})
