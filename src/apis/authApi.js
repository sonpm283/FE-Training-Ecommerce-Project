import rootApi from './rootApi'

export const authApi = rootApi.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: ({ email, password }) => ({
        url: '/users/login',
        method: 'POST',
        body: { email, password },
      }),
    }),
    register: builder.mutation({
      query: ({ name, email, password }) => ({
        url: '/users/register',
        method: 'POST',
        body: { name, email, password },
      }),
    }),
    refreshToken: builder.mutation({
      query: (refreshToken) => {
        return {
          url: 'users/refresh-token',
          body: { refreshToken },
          method: 'POST',
        }
      },
    }),
  }),
  overrideExisting: false,
})

export const { useLoginMutation, useRegisterMutation } = authApi
