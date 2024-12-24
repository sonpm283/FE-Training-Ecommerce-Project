import rootApi from './rootApi'

export const userApi = rootApi.injectEndpoints({
  endpoints: (builder) => ({
    getUserProfile: builder.query({
      query: () => {
        return {
          url: `/users/get-profile`,
          method: 'GET',
        }
      },
    }),
    updateUserProfile: builder.mutation({
      query: ({ userId, name, email }) => ({
        url: `/users/${userId}`,
        method: 'PUT',
        body: { name, email },
      }),
    }),
  }),
  overrideExisting: false,
})

export const { useGetUserProfileQuery, useUpdateUserProfileMutation } = userApi
