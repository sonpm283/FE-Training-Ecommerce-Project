import Button from '@/components/Button'

export default function StepperPagination({ currentPage, totalPages = 1, onPageChange }) {
  const isFirstPage = currentPage === 1
  const isLastPage = currentPage === totalPages

  const baseButtonClass = 'py-1 px-3 border text-sm rounded-md transition-colors'
  const activeButtonClass = 'bg-black text-white hover:bg-white hover:text-black hover:border-black'
  const disabledButtonClass = 'bg-midGray text-white cursor-not-allowed pointer-events-none'

  return (
    <div className="flex items-center gap-2">
      <div className="flex items-center gap-1">
        <span>{currentPage}</span>
        <span>/</span>
        <span className="text-midGray">{totalPages}</span>
      </div>
      <div className="flex items-center gap-1">
        <Button
          onClick={() => onPageChange(currentPage - 1)}
          disabled={isFirstPage}
          className={`${baseButtonClass} ${isFirstPage ? disabledButtonClass : activeButtonClass}`}
        >
          Prev
        </Button>
        <Button
          onClick={() => onPageChange(currentPage + 1)}
          disabled={isLastPage}
          className={`${baseButtonClass} ${isLastPage ? disabledButtonClass : activeButtonClass}`}
        >
          Next
        </Button>
      </div>
    </div>
  )
}
