export default function ProductSkeleton() {
  return (
    <div className="animate-pulse flex items-center flex-col">
      <div className="bg-gray h-[305px] w-full rounded-lg"></div>
      <div className="mt-2 bg-gray h-4 w-24 rounded"></div>
      <div className="mt-2 bg-gray h-4 w-2/4 rounded"></div>
      <div className="mt-2 bg-gray h-4 w-24 rounded"></div>
    </div>
  )
}
