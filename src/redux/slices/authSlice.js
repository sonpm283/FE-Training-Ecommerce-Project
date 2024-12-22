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
      state.accessToken = action.payload.token.accessToken
      state.refreshToken = action.payload.token.refreshToken
    },
  },
})

export const { login } = authSlice.actions
export default authSlice.reducer
