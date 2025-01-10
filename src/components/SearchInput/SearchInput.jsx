export default function SearchInput() {
  return (
    <div className="relative ml-auto lg:mr-20 max-w-[500px] w-full hidden xl:block">
      <div>
        <input
          type="text"
          placeholder="Search..."
          className="w-full px-4 py-2 pl-10 pr-4 text-gray-700 bg-white border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          <span>
            <img className="size-5" src="/src/assets/ico_search.png" />
          </span>
        </div>
      </div>

      {/* <div className="absolute w-full bg-white p-4 top-full rounded-md">
        <ul>
          <li>Product 01</li>
          <li>Product 01</li>
          <li>Product 01</li>
          <li>Product 01</li>
          <li>Product 01</li>
          <li>Product 01</li>
        </ul>
      </div> */}
    </div>
  )
}
