import { combineReducers, configureStore } from '@reduxjs/toolkit'
import authReducer from '@redux/slices/authSlice'
import { rootApi } from '@apis/rootApi'
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import persistStore from 'redux-persist/es/persistStore'

const rootPersistConfig = {
  key: 'root',
  storage: storage,
  whitelist: ['auth'], 
}

const reducers = combineReducers({
  auth: authReducer,
  [rootApi.reducerPath]: rootApi.reducer,
})

const persistedReducers = persistReducer(rootPersistConfig, reducers)

export const store = configureStore({
  reducer: persistedReducers,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }).concat(rootApi.middleware),
})


export const persistor = persistStore(store);