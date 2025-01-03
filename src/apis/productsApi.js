import rootApi from './rootApi'

export const productApi = rootApi.injectEndpoints({
  endpoints: (builder) => ({
    getProductList: builder.query({
      query: (queryParams) => ({
        url: 'products',
        params: queryParams,
      }),
    }),
  }),

  overrideExisting: false,
})

export const { useGetProductListQuery } = productApi
