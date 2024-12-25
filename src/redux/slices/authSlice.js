import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  accessToken: null,
  refreshToken: null,
  userProfile: {},
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, action) => {
      state.accessToken = action.payload.accessToken
      state.refreshToken = action.payload.refreshToken
    },
    logout: () => initialState,
    saveUserProfile: (state, action) => {
      state.userProfile = action.payload
    },
  },
})

export const selectAccessToken = (state) => {
  return state.auth.accessToken
}

export const selectCurrentUser = (state) => {
  return state.auth.userProfile
}

export const { login, logout, saveUserProfile } = authSlice.actions
export default authSlice.reducer
