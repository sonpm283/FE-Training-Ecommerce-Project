import { useProductListQuery } from '@/hooks/useProductListQuery'
import { Link } from 'react-router-dom'

export default function ProductListControl({ filters, totalPages }) {
  const { buildProductListQuery, navigateToProductList } = useProductListQuery()
  const { sort, page } = filters
  const currentPage = +page
  const isFirstPage = currentPage === 1
  const isLastPage = currentPage === totalPages

  const baseButtonClass = 'py-1 px-3 border text-sm rounded-md transition-colors'
  const activeButtonClass = 'bg-black text-white hover:bg-white hover:text-black hover:border-black'
  const disabledButtonClass = 'bg-midGray text-white cursor-not-allowed pointer-events-none'

  const handleSortChange = (event) => {
    const { value: newSort } = event.target
    navigateToProductList({ sort: newSort, page: '1' })
  }

  return (
    <div className="flex items-center justify-between">
      <div className="py-2 px-3 border rounded-full cursor-pointer w-max">
        <select
          className="w-full text-sm outline-none cursor-pointer"
          value={sort || 'default'}
          onChange={handleSortChange}
        >
          <option value="default">Default Sorting</option>
          <option value="price_asc">Price, Low to High</option>
          <option value="price_desc">Price, High to Low</option>
          <option value="newest">Date, New to Old</option>
          <option value="oldest">Date, Old to New</option>
        </select>
      </div>

      <div className="flex items-center gap-1">
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1">
            <span>{currentPage}</span>
            <span>/</span>
            <span className="text-midGray">{totalPages == 0 ? 1 : totalPages}</span>
          </div>
          <div className="flex items-center gap-1">
            <Link
              className={`${baseButtonClass} ${
                isFirstPage ? disabledButtonClass : activeButtonClass
              }`}
              to={buildProductListQuery({ page: currentPage - 1 })}
            >
              Prev
            </Link>
            <Link
              className={`${baseButtonClass} ${
                isLastPage ? disabledButtonClass : activeButtonClass
              }`}
              to={buildProductListQuery({ page: currentPage + 1 })}
            >
              Next
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
