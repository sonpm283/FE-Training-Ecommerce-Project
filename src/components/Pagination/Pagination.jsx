import { useProductListQuery } from '@/hooks/useProductListQuery'
import { Link } from 'react-router-dom'

export default function Pagination({ totalPages, filteredParams }) {
  const { buildProductListQuery } = useProductListQuery()
  const currentPage = Number(filteredParams.page) || 1 // get current page from queryParams

  const renderPageNumbers = () => {
    const pageNumbers = []
    const maxPagesToShow = 5

    let startPage = Math.max(1, currentPage - Math.floor(maxPagesToShow / 2))
    let endPage = Math.min(totalPages, startPage + maxPagesToShow - 1)

    /*
     * Ex: currentPage = 1, maxPagesToShow = 5, and totalPages = 10
     * startPage = Math.max(1, 1 - 2) = 1
     * endPage = Math.min(10, 1 + 5 - 1) = 5
     * endPage - startPage + 1 = 5 - 1 + 1 = 5 // đủ 5 item => không cần điều chỉnh số lượng
     */

    /*
     * Ex: currentPage = 9, maxPagesToShow = 5, and totalPages = 10:
     * startPage = Math.max(1, 9 - 2) = 7
     * endPage = Math.min(10, 7 + 5 - 1) = 10
     * endPage - startPage + 1 = 10 - 7 + 1 = 4 // không đủ 5 item => cần điều chỉnh số lượng cho đủ maxPagesToShow
     */

    if (endPage - startPage + 1 < maxPagesToShow) {
      startPage = Math.max(1, endPage - maxPagesToShow + 1)
    }

    for (let page = startPage; page <= endPage; page++) {
      pageNumbers.push(
        <li key={page}>
          <Link
            className={`grid place-items-center size-10 rounded-full border border-lightGray hover:text-white hover:bg-black transition-all ${
              currentPage === page ? 'bg-black text-white' : 'bg-white text-black'
            }`}
            to={buildProductListQuery({ page: page })}
          >
            {page}
          </Link>
        </li>
      )
    }

    return pageNumbers
  }

  return (
    <ul className="flex items-center justify-center gap-2">
      <li>
        <Link
          className={`grid place-items-center size-10 rounded-full border border-lightGray disabled:opacity-50 ${
            currentPage === 1 ? 'cursor-not-allowed opacity-50 pointer-events-none' : ''
          }`}
          to={buildProductListQuery({ page: currentPage - 1 })}
          onClick={(e) => {
            if (currentPage === 1) e.preventDefault()
          }}
          aria-disabled={currentPage === 1}
        >
          <img className="size-4" src="/src/assets/ico_chevron_left.png" alt="Previous" />
        </Link>
      </li>

      {renderPageNumbers()}

      <li>
        <Link
          className={`grid place-items-center size-10 rounded-full border border-lightGray disabled:opacity-50 ${
            currentPage === totalPages ? 'cursor-not-allowed opacity-50 pointer-events-none' : ''
          } `}
          to={buildProductListQuery({ page: currentPage + 1 })}
          onClick={(e) => {
            if (currentPage === totalPages) e.preventDefault()
          }}
          aria-disabled={currentPage === totalPages}
        >
          <img className="size-4" src="/src/assets/ico_chevron_right.png" alt="Next" />
        </Link>
      </li>
    </ul>
  )
}
