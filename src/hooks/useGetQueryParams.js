/* eslint-disable no-unused-vars */
import { useSearchParams } from 'react-router-dom'

export default function useGetQueryParams() {
  const [searchParams] = useSearchParams()
  const queryParams = Object.fromEntries([...searchParams])

  const queries = {
    page: queryParams.page || '1',
    limit: queryParams.limit || '3',
    search: queryParams.search,
    maxPrice: queryParams.maxPrice,
    minPrice: queryParams.minPrice,
    category: queryParams.category,
    sort: queryParams.sort,
  }

  // remove undefined value
  return Object.fromEntries(Object.entries(queries).filter(([_, value]) => value !== undefined))
}
