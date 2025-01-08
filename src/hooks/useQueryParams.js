// /* eslint-disable no-unused-vars */
// import { useEffect } from 'react'
// import { useSearchParams } from 'react-router-dom'
// import { useDispatch, useSelector } from 'react-redux'
// import { setFiltersFromUrl } from '@/redux/slices/productSlide'

// export const useQueryParams = () => {
//   const [searchParams, setSearchParams] = useSearchParams()
//   const dispatch = useDispatch()
//   const filters = useSelector((state) => state.product.filters)

//   // Sync URL -> Redux when URL changes
//   useEffect(() => {
//     const urlFilters = Object.fromEntries(searchParams.entries())
//     dispatch(setFiltersFromUrl(urlFilters))
//   }, [searchParams, dispatch])

//   // Sync Redux -> URL when filters change
//   useEffect(() => {
//     const params = new URLSearchParams()
//     Object.entries(filters).forEach(([key, value]) => {
//       if (value) params.set(key, value)
//     })
    
//     setSearchParams(params, { replace: true })
//   }, [filters, setSearchParams])

//   const filteredParams = Object.fromEntries(
//     Object.entries(filters).filter(([_, value]) => value !== '')
//   )

//   return { filteredParams }
// }
