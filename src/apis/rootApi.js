import { login, logout } from '@redux/slices/authSlice'
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const API_URL = import.meta.env.VITE_API_URL

const handleRefreshToken = async (refreshToken, baseQuery, args, api, extraOptions) => {
  const refreshResult = await baseQuery(
    {
      url: '/users/refresh-token',
      body: { refreshToken },
      method: 'POST',
    },
    api,
    extraOptions
  )

  const newAccessToken = refreshResult?.data?.data?.accessToken

  if (!newAccessToken) {
    api.dispatch(logout())
    window.location.href = '/login'
    return null
  }

  api.dispatch(login({ accessToken: newAccessToken, refreshToken }))
  return await baseQuery(args, api, extraOptions)
}

const baseQuery = fetchBaseQuery({
  baseUrl: API_URL,
  prepareHeaders: (headers, { getState }) => {
    const accessToken = getState().auth.accessToken
    if (accessToken) {
      headers.set('Authorization', `Bearer ${accessToken}`)
    }
    return headers
  },
})

const authenticatedBaseQuery = async (args, api, extraOptions) => {
  let result = await baseQuery(args, api, extraOptions)

  const isTokenExpired =
    result?.error?.status === 401 && result?.error?.data?.message === 'Token has expired.'

  if (isTokenExpired) {
    const refreshToken = api.getState().auth.refreshToken
    if (refreshToken) {
      const refreshResult = await handleRefreshToken(
        refreshToken,
        baseQuery,
        args,
        api,
        extraOptions
      )
      if (refreshResult) {
        result = refreshResult
      }
    }
  }

  return result
}

export const rootApi = createApi({
  reducerPath: 'api',
  baseQuery: authenticatedBaseQuery,
  endpoints: () => ({}),
})

export default rootApi
