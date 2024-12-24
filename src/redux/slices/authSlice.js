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
      console.log(action.payload.token.accessToken);
      
      state.accessToken = action.payload.token.accessToken
      state.refreshToken = action.payload.token.refreshToken
    },
    saveUserProfile: (state, action) => {
      state.userProfile = action.payload
    },
  },
})


export const selectToken = (state) => {
  return state.auth.accessToken
}

export const selectCurrentUser = (state) => {
  return state.auth.userProfile
}

export const { login, saveUserProfile } = authSlice.actions
export default authSlice.reducer
