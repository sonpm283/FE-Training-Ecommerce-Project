import { useProductListQuery } from '@/hooks/useProductListQuery'
import { Link } from 'react-router-dom'

export default function ProductListControl({ filters, totalPages }) {
  const { buildProductListQuery, navigateToProductList } = useProductListQuery()
  const { sort, page } = filters
  const currentPage = +page
  const isFirstPage = currentPage === 1
  const isLastPage = currentPage === totalPages || totalPages === 0

  const baseButtonClass = 'py-1 px-3 border text-sm rounded-md transition-colors'
  const activeButtonClass = 'bg-black text-white hover:bg-white hover:text-black hover:border-black'
  const disabledButtonClass = 'bg-midGray text-white cursor-not-allowed pointer-events-none'

  const handleSortChange = (event) => {
    const newSort = event.target.value
    navigateToProductList({ sort: newSort, page: '1' })
  }

  return (
    <div className="flex items-center justify-between">
      <div className="py-2 px-3 border rounded-full cursor-pointer w-max">
        <select
          className="w-full text-sm outline-none"
          value={sort || 'default'}
          onChange={handleSortChange}
        >
          <option value="default">Default sorting</option>
          <option value="price_asc">Price, low to high</option>
          <option value="price_desc">Price, high to low</option>
          <option value="newest">Date, new to old</option>
          <option value="oldest">Date, old to new</option>
        </select>
      </div>

      <div className="flex items-center gap-1">
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-1">
            <span>{currentPage}</span>
            <span>/</span>
            <span className="text-midGray">{totalPages}</span>
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
