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
    setUserData: (state, action) => {
      state.accessToken = action.payload.accessToken
      state.refreshToken = action.payload.refreshToken
    },
    setUserProfile: (state, action) => {
      state.userProfile = action.payload
    },
    logout: () => initialState,
  },
})

export const selectUserProfile = (state) => {
  return state.auth.userProfile
}


export const { setUserData, setUserProfile, logout } = authSlice.actions
export default authSlice.reducer
