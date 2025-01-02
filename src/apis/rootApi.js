import ROUTES from '@/constants/route'
import { logout, setUserData } from '@redux/slices/authSlice'
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const API_URL = import.meta.env.VITE_API_URL

// Configure base query with authorization header
const baseQuery = fetchBaseQuery({
  baseUrl: API_URL,
  prepareHeaders: (headers, { getState }) => {
    // Get access token from redux store
    const accessToken = getState().auth.accessToken
    if (accessToken) {
      headers.set('Authorization', `Bearer ${accessToken}`)
    }
    return headers
  },
})

// Custom base query with refresh token handling
const baseQueryWithReauth = async (args, api, extraOptions) => {
  // Make initial request with current access token
  let result = await baseQuery(args, api, extraOptions)

  // Check if token has expired (401 + specific message)
  const isTokenExpired =
    result?.error?.status === 401 && result?.error?.data?.message === 'Token has expired.'

  // Check if there is any other 401 error
  const isUnauthorized = result?.error?.status === 401

  if (isTokenExpired) {
    // Get refresh token from redux store
    const refreshToken = api.getState().auth.refreshToken

    if (refreshToken) {
      // Call refresh token API
      const refreshResult = await baseQuery(
        {
          url: '/users/refresh-token',
          method: 'POST',
          body: { refreshToken },
        },
        api,
        extraOptions
      )

      // Get new AccessToken from response
      const newAccessToken = refreshResult?.data?.data.accessToken

      // Handle refresh token failure
      if (!newAccessToken) {
        api.dispatch(logout())
        window.location.href = ROUTES.LOGIN
        return result
      }

      // Store new new AccessToken in redux store
      api.dispatch(setUserData({ accessToken: newAccessToken, refreshToken }))

      // Retry original request with new access token
      result = await baseQuery(args, api, extraOptions)
    }
  } else if (isUnauthorized) {
    // Handle other 401 errors by logging out and redirecting to login
    // api.dispatch(logout())
    // window.location.href = '/login'
    // return result
  }

  return result
}

// Initialize root API with custom base query
export const rootApi = createApi({
  reducerPath: 'api',
  baseQuery: baseQueryWithReauth,
  endpoints: () => ({}),
})

export default rootApi
