import StepperPagination from './StepperPagination'

export default function ProductListControl({ filters, onFilterChange, totalPages }) {
  const handlePageChange = (newPage) => {
    onFilterChange({ page: newPage })
  }

  return (
    <div className="flex items-center justify-between">
      <div className="py-2 px-3 border rounded-full cursor-pointer w-max">
        <select className="w-full text-sm">
          <option value={1}>Price, low to hight</option>
          <option value={2}>Price, hight to low</option>
          <option value={3}>Date, old to new</option>
          <option value={4}>Date, new to old</option>
          <option value={5}>Best selling</option>
        </select>
      </div>

      <div className="flex items-center gap-1">
        <StepperPagination
          currentPage={Number(filters.page)}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      </div>
    </div>
  )
}
