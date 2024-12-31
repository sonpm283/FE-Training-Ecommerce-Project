/* eslint-disable no-unused-vars */
import { useSearchParams } from 'react-router-dom'

export default function useQueryConfig() {
  const [searchParams] = useSearchParams()
  const queryParams = Object.fromEntries([...searchParams])

  const queryConfig = {
    page: queryParams.page || '1',
    limit: queryParams.limit || '12',
    search: queryParams.search,
    maxPrice: queryParams.maxPrice,
    minPrice: queryParams.minPrice,
    category: queryParams.category,
  }

  // remove undefined value
  const filteredQueryConfig = Object.fromEntries(
    Object.entries(queryConfig).filter(([_, value]) => value !== undefined)
  )

  return filteredQueryConfig
}
