import rootApi from './rootApi'

export const productApi = rootApi.injectEndpoints({
  endpoints: (builder) => ({
    getProductList: builder.query({
      query: (queryParams) => ({
        url: 'products',
        params: queryParams,
      }),
    }),
    getProductDetail: builder.query({
      query: (productId) => ({
        url: `products/${productId}`,
      }),
    }),
  }),

  overrideExisting: false,
})

export const { useGetProductListQuery, useGetProductDetailQuery } = productApi
