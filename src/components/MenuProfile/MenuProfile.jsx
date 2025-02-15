import { useState, useRef, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { logout } from '@redux/slices/authSlice'
import Button from '@components/Button'
import { useSelectUser } from '@hooks/useSelectUser'
import { ROUTES } from '@/constants/routes'

export default function MenuProfile() {
  const [isOpen, setIsOpen] = useState(false)
  const menuRef = useRef(null)
  const userProfile = useSelectUser()
  const navigate = useNavigate()
  const dispatch = useDispatch()

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false)
      }
    }

    document.addEventListener('click', handleClickOutside)
    return () => document.removeEventListener('click', handleClickOutside)
  }, [])

  const menuItems = [
    { icon: 'User', label: 'Thông tin cá nhân', action: () => navigate(ROUTES.PROFILE) },
    {
      icon: 'ShoppingBag',
      label: 'Lịch sử đơn hàng',
      action: () => navigate(ROUTES.ORDER_HISTORY),
    },
    { icon: 'Key', label: 'Đổi mật khẩu', action: () => navigate(ROUTES.USER_CHANGE_PASSWORD) },
    { icon: 'LogOut', label: 'Đăng xuất', action: () => dispatch(logout()) },
  ]

  return (
    <div className="relative" ref={menuRef}>
      <Button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-2 focus:outline-none"
      >
        <div className="w-9 h-9 bg-lightGray rounded-full overflow-hidden flex items-center justify-center">
          {userProfile?.avatar ? (
            <img src={userProfile.avatar} alt="Avatar" className="w-full h-full object-cover" />
          ) : (
            <p className="text-white text-lg font-medium grid place-items-center">
              {userProfile?.name[0].toUpperCase()}
            </p>
          )}
        </div>
      </Button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 rounded-md shadow-2xl bg-white ring-1 ring-black ring-opacity-5">
          <div className="py-1">
            <div className="px-4 py-2 border-b border-gray">
              <p className="text-sm font-medium text-gray-900">{userProfile?.name}</p>
              <p className="text-sm text-gray-500">{userProfile?.email}</p>
            </div>
            {menuItems.map((item, index) => (
              <Button
                key={index}
                onClick={() => {
                  item.action()
                  setIsOpen(false)
                }}
                className="w-full flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
              >
                {item.label}
              </Button>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
