import { rootApi } from './rootApi'

const cartApi = rootApi.injectEndpoints({
  endpoints: (builder) => ({
    getCart: builder.query({
      query: () => '/cart',
      providesTags: ['Cart']
    }),
    addToCart: builder.mutation({
      query: ({ productId, quantity }) => ({
        url: '/cart/add-to-cart',
        method: 'POST',
        body: { productId, quantity }
      }),
      invalidatesTags: ['Cart']
    }),
    updateCartItem: builder.mutation({
      query: ({ productId, quantity }) => ({
        url: `/cart/update-cart`,
        method: 'PATCH',
        body: { productId, quantity }
      }),
      invalidatesTags: ['Cart']
    }),
    removeCartItem: builder.mutation({
      query: (productId) => ({
        url: `/cart/remove`,
        method: 'DELETE',
        body: { productId }
      }),
      invalidatesTags: ['Cart']
    }),
    clearCart: builder.mutation({
      query: () => ({
        url: '/cart/clear-cart',
        method: 'DELETE'
      }),
      invalidatesTags: ['Cart']
    })
  })
})

export const {
  useGetCartQuery,
  useAddToCartMutation,
  useUpdateCartItemMutation,
  useRemoveCartItemMutation,
  useClearCartMutation
} = cartApi
