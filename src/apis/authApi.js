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
  }),
  // sau này sẽ có nhiều file api như thế này  overrideExisting: false để khi injectEndpoints một api mới (ví dụng productsApi thì sẽ không bị đè authApi)
  overrideExisting: false,
})

export const { useLoginMutation, useRegisterMutation } = authApi
