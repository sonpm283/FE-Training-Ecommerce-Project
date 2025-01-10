
import { useNavigate } from 'react-router-dom'
import ROUTES from '@/constants/route'
import { createSearchParams } from 'react-router-dom'
import useGetQueryParams from './useGetQueryParams'

export const useProductListQuery = () => {
  const navigate = useNavigate()
  const queryParams = useGetQueryParams()

  const buildProductListQuery = (newParams = {}) => {
    const params = {
      ...queryParams,
      ...newParams,
    }

    return {
      pathname: ROUTES.PRODUCT_LIST,
      search: createSearchParams(params).toString(),
    }
  }

  const navigateToProductList = (newParams = {}) => {
    const { pathname, search } = buildProductListQuery(newParams)
    navigate({ pathname, search })
  }

  return {
    queryParams,
    buildProductListQuery,
    navigateToProductList,
  }
}
