import rootApi from './rootApi'

export const categoryApi = rootApi.injectEndpoints({
  endpoints: (builder) => ({
    getCategoryList: builder.query({
      query: () => '/categories',
    }),
  }),

  overrideExisting: false,
})

export const { useGetCategoryListQuery } = categoryApi
