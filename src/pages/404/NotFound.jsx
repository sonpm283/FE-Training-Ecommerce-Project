export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-gray-800">404</h1>
        <p className="text-xl text-gray-600 mt-4">Trang không tồn tại</p>
        <a
          href="/"
          className="mt-6 inline-block px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Về trang chủ
        </a>
      </div>
    </div>
  )
}
