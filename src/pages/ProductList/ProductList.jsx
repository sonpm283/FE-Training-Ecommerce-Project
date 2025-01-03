import { useGetCategoryListQuery } from '@/apis/categoryApi'
import { useGetProductListQuery } from '@/apis/productsApi'
import { Link } from 'react-router-dom'
import ProductFilterSidebar from './components/ProductFilterSidebar'
import { Pagination, PaginationSkeleton, Product, ProductSkeleton } from '@/components'
import ProductListControl from './components/ProductListControl'
// import useGetQueryParams from '@/hooks/useGetQueryParams'
import { useDispatch } from 'react-redux'
import { setFilter } from '@/redux/slices/productSlide'
import { useQueryParams } from '@/hooks/useQueryParams'

export default function ProductList() {
  // const queryParams = useGetQueryParams()
  const { filteredParams } = useQueryParams() 
  const dispatch = useDispatch()

  const { data: productsData, isFetching } = useGetProductListQuery(filteredParams)
  const { data: categoriesData } = useGetCategoryListQuery()
  const SKELETON_COUNT = 3

  const handleFilterChange = (newFilters) => {
    dispatch(setFilter(newFilters))
  }

  return (
    <>
      <section className="relative">
        <img className="w-full" src="/src/assets/img_product_list_banner.webp" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
          <h2 className="text-4xl font-semibold">Shop</h2>
          <ul className="flex items-center gap-3 justify-center mt-2">
            <li>
              <Link to="/">Home / </Link>
            </li>
            <li>
              <span>Shop</span>
            </li>
          </ul>
        </div>
      </section>
      <section className="pt-12 pb-12">
        <div className="container">
          <div className="lg:grid grid-cols-5">
            <div className="col-span-1">
              <ProductFilterSidebar
                queryParams={filteredParams}
                categories={categoriesData?.data || []}
              />
            </div>
            <div className="col-span-4 mt-6 lg:mt-0">
              <ProductListControl
                filters={filteredParams}
                onFilterChange={handleFilterChange}
                totalPages={productsData?.pagination?.totalPages}
              />
              <ul className="lg:grid grid-cols-3 gap-5 mt-9 space-y-3 lg:space-y-0">
                {isFetching
                  ? [...Array(SKELETON_COUNT)].map((_, index) => <ProductSkeleton key={index} />)
                  : (productsData?.data || []).map((product) => (
                      <Product product={product} key={product._id} />
                    ))}

                {productsData?.data?.length === 0 && (
                  <div className="border-t-[2px] border-t-midGray col-span-3 text-center py-5 min-h-[400px]">
                    <p className="mt-2 text-lg text-gray-600">No Result</p>
                  </div>
                )}
              </ul>
              <div className="mt-14">{isFetching ? <PaginationSkeleton /> : <Pagination />}</div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
