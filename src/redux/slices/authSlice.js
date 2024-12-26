import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  currentUser: null,
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setUserData: (state, action) => {
      state.currentUser = action.payload
    },
    logout: () => initialState,
  },
})

export const selectCurrentUser = (state) => {
  return state.auth.currentUser
}

export const { setUserData, logout } = authSlice.actions
export default authSlice.reducer
