import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const rootApi = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_API_URL,
  }),
  endpoints: (builder) => {
    return {
      login: builder.mutation({
        query: ({ email, password }) => {
          return {
            url: '/users/login',
            body: { email, password },
            method: 'POST',
          }
        },
      }),
      register: builder.mutation({
        query: ({ name, email, password }) => {
          return {
            url: 'users/register',
            body: { name, email, password },
            method: 'POST',
          }
        },
      }),
    }
  },
})

export const { useLoginMutation, useRegisterMutation } = rootApi
