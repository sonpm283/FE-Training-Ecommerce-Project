import Button from '@components/Button'
import { useSelectUser } from '@hooks/useSelectUser'
import { Link } from 'react-router-dom'

export default function Header() {
  const userProfile = useSelectUser()

  return (
    <header className="py-5 lg:py-8 sticky top-0 z-10 bg-white">
      <div className="container flex items-center">
        <h1 className="flex-shrink-0 mr-5">
          <Link to="/" className="block max-w-[130px]">
            <img className="max-w-full" src="/src/assets/logo.webp" alt="Darion" />
          </Link>
        </h1>
        <div className="relative ml-auto lg:mr-20 max-w-[500px] w-full hidden xl:block">
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
        <nav className="mr-28 hidden lg:block ml-auto">
          <ul className="flex items-center gap-10">
            <li className="relative after:absolute after:h-[1.5px] after:bg-black after:left-0 after:bottom-[-2px] after:transition-all after:duration-300 after:w-full after:scale-x-0 hover:after:-scale-x-100">
              <Link to="/">Home</Link>
            </li>
            <li className="relative after:absolute after:h-[1.5px] after:bg-black after:left-0 after:bottom-[-2px] after:transition-all after:duration-300 after:w-full after:scale-x-0 hover:after:-scale-x-100">
              <Link to="/product-list">Shop</Link>
            </li>
            <li className="relative after:absolute after:h-[1.5px] after:bg-black after:left-0 after:bottom-[-2px] after:transition-all after:duration-300 after:w-full after:scale-x-0 hover:after:-scale-x-100">
              <a href="#none">Product</a>
            </li>
            <li className="relative after:absolute after:h-[1.5px] after:bg-black after:left-0 after:bottom-[-2px] after:transition-all after:duration-300 after:w-full after:scale-x-0 hover:after:-scale-x-100">
              <a href="#none">Blog</a>
            </li>
            <li className="relative after:absolute after:h-[1.5px] after:bg-black after:left-0 after:bottom-[-2px] after:transition-all after:duration-300 after:w-full after:scale-x-0 hover:after:-scale-x-100">
              <a href="#none">Fetured</a>
            </li>
          </ul>
        </nav>
        <div className="flex items-center gap-6 ml-auto lg:ml-0 shrink-0">
          <a href="#none" className="lg:hidden">
            <img className="size-5" src="/src/assets/ico_search.png" />
          </a>

          {!userProfile.name && (
            <Link to="/login">
              <img className="size-5" src="/src/assets/ico_user.png" />
            </Link>
          )}

          <a href="#none" className="relative">
            {/* <span className="absolute -top-[8px] -right-[10px] size-[18px] bg-black text-white rounded-full text-xs grid place-items-center">
              10
            </span> */}
            <img className="size-5" src="/src/assets/ico_heart.png" />
          </a>
          <a href="shopping-cart.html" className="relative">
            <span className="absolute -top-[8px] -right-[10px] size-[18px] bg-black text-white rounded-full text-xs grid place-items-center">
              3
            </span>
            <img className="size-5" src="/src/assets/ico_bag.png" />
          </a>

          {userProfile.name && (
            <Button className="size-7 rounded-full bg-lightGray text-white grid place-items-center">
              {userProfile.name[0].toUpperCase()}
            </Button>
          )}
        </div>
      </div>
    </header>
  )
}
