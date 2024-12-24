const FullScreenLoading = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white bg-opacity-90 z-50">
      <div className="flex flex-col items-center">
        <div
          className="loader rounded-full border-4 border-t-4 border-gray-100 h-12 w-12 mb-4 animate-spin"
          style={{ borderTopColor: '#c5a880' }}
        ></div>
        <p className="text-gray-600 text-sm font-medium">Loading, please wait...</p>
      </div>
    </div>
  )
}

export default FullScreenLoading
