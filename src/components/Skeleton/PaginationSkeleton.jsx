export default function PaginationSkeleton() {
  return (
    <div className="animate-pulse flex items-center justify-center gap-2">
      {[...Array(6)].map((_, index) => (
        <div key={index} className="bg-gray size-10 rounded-full"></div>
      ))}
    </div>
  )
}
