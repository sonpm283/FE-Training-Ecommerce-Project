import rootApi from './rootApi'

export const productApi = rootApi.injectEndpoints({
  endpoints: (builder) => ({
    getProductList: builder.query({
      query: (queryConfig) => {
        const params = new URLSearchParams({
          page: queryConfig.page.toString(),
          limit: queryConfig.limit.toString(),
        })

        if (queryConfig.search) params.append('search', queryConfig.search)
        if (queryConfig.minPrice) params.append('minPrice', queryConfig.minPrice.toString())
        if (queryConfig.maxPrice) params.append('maxPrice', queryConfig.maxPrice.toString())
        if (queryConfig.category) params.append('category', queryConfig.category)
        
        return `/products?${params.toString()}`
      },
    }),
  }),

  overrideExisting: false,
})

export const { useGetProductListQuery } = productApi
