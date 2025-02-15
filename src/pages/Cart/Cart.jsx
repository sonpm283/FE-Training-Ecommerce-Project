import { Link } from 'react-router-dom'
import {
  useGetCartQuery,
  useUpdateCartItemMutation,
  useRemoveCartItemMutation,
  useClearCartMutation,
} from '@/apis/cartApi'
import { ROUTES } from '@/constants/routes'
import { toast } from 'react-toastify'
import { useState } from 'react'

export default function Cart() {
  const { data: cartData, isLoading } = useGetCartQuery()
  const [updateCartItem] = useUpdateCartItemMutation()
  const [removeCartItem] = useRemoveCartItemMutation()
  const [clearCart] = useClearCartMutation()
  const [isUpdating, setIsUpdating] = useState(false)

  const handleQuantityChange = async (productId, newQuantity) => {
    if (isUpdating) return;
    setIsUpdating(true);
    try {
      await updateCartItem({ productId, quantity: newQuantity }).unwrap()
      toast.success('Cart updated successfully')
    } catch (error) {
      toast.error(error?.data?.message || 'Failed to update cart')
    } finally {
      setIsUpdating(false);
    }
  }

  const handleRemoveItem = async (productId) => {
    try {
      await removeCartItem(productId).unwrap()
      toast.success('Item removed from cart')
    } catch (error) {
      toast.error(error?.data?.message || 'Failed to remove item')
    }
  }

  const handleClearCart = async () => {
    try {
      await clearCart().unwrap()
      toast.success('Cart cleared successfully')
    } catch (error) {
      toast.error(error?.data?.message || 'Failed to clear cart')
    }
  }

  if (isLoading) {
    return (
      <div className="container py-16">
        <div className="animate-pulse">
          <div className="h-8 bg-gray-200 rounded w-1/4 mb-8"></div>
          <div className="space-y-4">
            {[1, 2, 3].map((index) => (
              <div key={index} className="h-32 bg-gray-200 rounded"></div>
            ))}
          </div>
        </div>
      </div>
    )
  }

  const cartItems = cartData?.cart?.items || []
  const totalAmount = cartItems.reduce(
    (sum, item) => sum + item.product.price.discountedPrice * item.quantity,
    0
  )

  if (cartItems.length === 0) {
    return (
      <div className="container py-16 text-center">
        <h2 className="text-2xl font-semibold mb-4">Your Cart is Empty</h2>
        <p className="text-gray-600 mb-8">
          Looks like you haven&apos;t added anything to your cart yet.
        </p>
        <Link
          to={ROUTES.PRODUCT_LIST}
          className="inline-block bg-black text-white px-8 py-3 rounded-full hover:bg-gray-800 transition-colors"
        >
          Continue Shopping
        </Link>
      </div>
    )
  }

  return (
    <div className="container py-16">
      <h1 className="text-3xl font-bold mb-8">Shopping Cart</h1>
      <div className="lg:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <div className="bg-white rounded-xl shadow-sm">
            <div className="p-6 space-y-6">
              {cartItems.map((item) => (
                <div key={item._id} className="flex gap-6 pb-6 border-b last:border-b-0">
                  <div className="w-24 h-24 flex-shrink-0">
                    <img
                      src={item.product.imageUrl}
                      alt={item.product.name}
                      className="w-full h-full object-cover rounded-lg"
                    />
                  </div>
                  <div className="flex-grow">
                    <div className="flex justify-between">
                      <h3 className="font-semibold">{item.product.name}</h3>
                      <button
                        onClick={() => handleRemoveItem(item.product._id)}
                        className="text-gray-400 hover:text-red-500"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </button>
                    </div>
                    <div className="mt-2 text-gray-600">
                      ${item.product.price.discountedPrice}
                      {item.product.price.originalPrice > item.product.price.discountedPrice && (
                        <span className="ml-2 line-through text-gray-400">
                          ${item.product.price.originalPrice}
                        </span>
                      )}
                    </div>
                    <div className="mt-4 flex items-center gap-4">
                      <div className="flex items-center border rounded-full">
                        <button
                          onClick={() =>
                            handleQuantityChange(item.product._id, Math.max(1, item.quantity - 1))
                          }
                          className="w-8 h-8 flex items-center justify-center hover:bg-gray-100 rounded-l-full"
                        >
                          -
                        </button>
                        <span className="w-12 text-center">{item.quantity}</span>
                        <button
                          onClick={() => handleQuantityChange(item.product._id, item.quantity + 1)}
                          className="w-8 h-8 flex items-center justify-center hover:bg-gray-100 rounded-r-full"
                        >
                          +
                        </button>
                      </div>
                      <div className="ml-auto font-semibold">
                        ${(item.product.price.discountedPrice * item.quantity).toFixed(2)}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-6 flex justify-between items-center">
            <button
              onClick={handleClearCart}
              className="text-red-500 hover:text-red-600 font-medium"
            >
              Clear Cart
            </button>
            <Link to={ROUTES.PRODUCT_LIST} className="text-black hover:text-gray-700 font-medium">
              Continue Shopping
            </Link>
          </div>
        </div>
        <div className="mt-8 lg:mt-0">
          <div className="bg-white rounded-xl shadow-sm p-6">
            <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
            <div className="space-y-4">
              <div className="flex justify-between">
                <span className="text-gray-600">Subtotal</span>
                <span className="font-semibold">${totalAmount.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Shipping</span>
                <span className="font-semibold">Free</span>
              </div>
              <div className="border-t pt-4">
                <div className="flex justify-between">
                  <span className="font-semibold">Total</span>
                  <span className="font-semibold">${totalAmount.toFixed(2)}</span>
                </div>
              </div>
            </div>
            <Link
              to={ROUTES.CHECKOUT}
              className="mt-6 w-full bg-black text-white py-3 rounded-full flex items-center justify-center hover:bg-gray-800 transition-colors"
            >
              Proceed to Checkout
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
