import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  filters: {
    page: 1,
    limit: 1,
    sort: '',
    category: '',
    minPrice: '',
    maxPrice: '',
    search: '',
  },
}

const productSlice = createSlice({
  name: 'product',
  initialState,

  reducers: {
    setFilter: (state, action) => {
      if (!('page' in action.payload)) {
        state.filters.page = 1
      }
      state.filters = {
        ...state.filters,
        ...action.payload,
      }
    },
    setFiltersFromUrl: (state, action) => {
      state.filters = {
        ...initialState.filters,
        ...action.payload,
      }
    },
  },
})

export const { setFilter, setFiltersFromUrl } = productSlice.actions
export default productSlice.reducer
