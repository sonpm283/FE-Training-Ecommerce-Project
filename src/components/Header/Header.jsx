import { ROUTES } from '@/constants/routes'
import MenuProfile from '@components/MenuProfile'
import { SearchInput } from '@components/index'
import { useSelectUser } from '@hooks/useSelectUser'
import { Link } from 'react-router-dom'
import { useGetCartQuery } from '@/apis/cartApi'

export default function Header() {
  const currentUser = useSelectUser()
  const { data: cartData } = useGetCartQuery(undefined, {
    skip: !currentUser?.name, // Skip fetching if user is not logged in
    refetchOnMountOrArgChange: true // Refetch when component mounts or currentUser changes
  })

  // Reset cart count when user is not logged in
  const cartItemCount = currentUser?.name 
    ? cartData?.cart?.items?.reduce((total, item) => total + item.quantity, 0) || 0 
    : 0

  return (
    <header className="py-5 lg:py-8 sticky top-0 z-10 bg-white">
      <div className="container flex items-center">
        <h1 className="flex-shrink-0 mr-5">
          <Link to="/" className="block max-w-[130px]">
            <img className="max-w-full" src="/src/assets/logo.webp" alt="Darion" />
          </Link>
        </h1>
        
        <SearchInput />
        <nav className="mr-28 hidden lg:block ml-auto">
          <ul className="flex items-center gap-10">
            <li className="relative after:absolute after:h-[1.5px] after:bg-black after:left-0 after:bottom-[-2px] after:transition-all after:duration-300 after:w-full after:scale-x-0 hover:after:-scale-x-100">
              <Link to="/">Home</Link>
            </li>
            <li className="relative after:absolute after:h-[1.5px] after:bg-black after:left-0 after:bottom-[-2px] after:transition-all after:duration-300 after:w-full after:scale-x-0 hover:after:-scale-x-100">
              <Link to="/products">Shop</Link>
            </li>
            <li className="relative after:absolute after:h-[1.5px] after:bg-black after:left-0 after:bottom-[-2px] after:transition-all after:duration-300 after:w-full after:scale-x-0 hover:after:-scale-x-100">
              <a href="#none">Blog</a>
            </li>
            <li className="relative after:absolute after:h-[1.5px] after:bg-black after:left-0 after:bottom-[-2px] after:transition-all after:duration-300 after:w-full after:scale-x-0 hover:after:-scale-x-100">
              <a href="#none">About</a>
            </li>
            <li className="relative after:absolute after:h-[1.5px] after:bg-black after:left-0 after:bottom-[-2px] after:transition-all after:duration-300 after:w-full after:scale-x-0 hover:after:-scale-x-100">
              <a href="#none">Contact</a>
            </li>
          </ul>
        </nav>
        <div className="flex items-center gap-6 ml-auto lg:ml-0 shrink-0">
          <a href="#none" className="lg:hidden">
            <img className="size-5" src="/src/assets/ico_search.png" />
          </a>

          {!currentUser?.name && (
            <Link to={ROUTES.LOGIN}>
              <img className="size-5" src="/src/assets/ico_user.png" />
            </Link>
          )}

          <a href="#none" className="relative">
            <img className="size-5" src="/src/assets/ico_heart.png" />
          </a>
          <Link to={ROUTES.CART} className="relative">
            {cartItemCount > 0 && (
              <span className="absolute -top-[8px] -right-[10px] size-[18px] bg-black text-white rounded-full text-xs grid place-items-center">
                {cartItemCount}
              </span>
            )}
            <img className="size-5" src="/src/assets/ico_bag.png" />
          </Link>

          {currentUser?.name && <MenuProfile />}
        </div>
      </div>
    </header>
  )
}
