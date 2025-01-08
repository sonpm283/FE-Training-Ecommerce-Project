/* eslint-disable no-unused-vars */
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

    const filteredParams = Object.fromEntries(
      Object.entries(params).filter(([_, value]) => value !== '' && value !== undefined)
    )

    return {
      pathname: ROUTES.PRODUCT_LIST,
      search: createSearchParams(filteredParams).toString(),
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
