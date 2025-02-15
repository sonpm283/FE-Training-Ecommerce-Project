import { useState } from 'react'
import { Link, useParams, useNavigate } from 'react-router-dom'
import { useGetProductDetailQuery } from '@/apis/productsApi'
import { useAddToCartMutation } from '@/apis/cartApi'
import { ROUTES } from '@/constants/routes'
import { toast } from 'react-toastify'
import { StarRating } from '@/components'
import { useSelectUser } from '@/hooks/useSelectUser'

export default function ProductDetail() {
  const { productId } = useParams()
  const navigate = useNavigate()
  const currentUser = useSelectUser()
  const [quantity, setQuantity] = useState(1)
  const [selectedImageIndex, setSelectedImageIndex] = useState(0)
  const { data: productData, isLoading } = useGetProductDetailQuery(productId)
  const [addToCart] = useAddToCartMutation()
  const product = productData?.data

  const handleQuantityChange = (value) => {
    const newQuantity = quantity + value
    if (newQuantity >= 1) {
      setQuantity(newQuantity)
    }
  }

  const handleAddToCart = async () => {
    if (!currentUser?.name) {
      navigate(ROUTES.LOGIN)
      return
    }

    try {
      await addToCart({ productId, quantity }).unwrap()
      toast.success('Product added to cart successfully!')
    } catch (error) {
      toast.error(error?.data?.message || 'Failed to add product to cart')
    }
  }

  const handleThumbnailClick = (index) => {
    console.log(index)
    setSelectedImageIndex(index)
  }

  if (isLoading) {
    return (
      <div className="container">
        <div className="flex justify-center items-center min-h-[400px]">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-black"></div>
        </div>
      </div>
    )
  }

  if (!product) {
    return (
      <div className="container">
        <div className="flex flex-col items-center justify-center min-h-[400px]">
          <h2 className="text-2xl font-bold mb-4">Product Not Found</h2>
          <Link to={ROUTES.PRODUCTS} className="text-blue-600 hover:underline">
            Back to Products
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="container">
      <ul className="flex gap-2 items-center py-4">
        <li>
          <Link to={ROUTES.HOME} className="text-sm hover:text-blue-600">
          Home /{' '}
          </Link>
      </li>
      <li>
          <Link to={ROUTES.PRODUCTS} className="text-sm hover:text-blue-600">
            Products /{' '}
          </Link>
      </li>
      <li>
          <span className="text-sm">{product.name}</span>
      </li>
    </ul>

    <div className="lg:grid grid-cols-5 gap-7 mt-4">
      <div className="col-span-3 flex gap-3">
        <ul className="flex flex-col gap-4">
            {product.images?.map((image, index) => (
              <li
                key={index}
                className={`w-[82px] cursor-pointer p-[10px] rounded-md border transition-all ${
                  selectedImageIndex === index ? 'border-black' : 'border-transparent hover:border-black'
                }`}
                onClick={() => handleThumbnailClick(index)}
              >
                <img className="image" src={image} alt={`${product.name} thumbnail ${index + 1}`} />
          </li>
            ))}
        </ul>
        <div className="overflow-hidden">
          <div className="rounded-xl overflow-hidden">
              <img
                src={product.images?.[selectedImageIndex]}
                className="image w-full h-full object-cover"
                alt={product.name}
              />
            </div>
          </div>
        </div>
        <div className="col-span-2 mt-6">
          <h2 className="text-xl lg:text-3xl font-semibold">{product.name}</h2>
          <div className="flex items-center gap-1 mt-4">
            <StarRating rating={product?.rating || 0} />
      </div>

          <p className="mt-3 text-xl font-semibold">${product.price.discountedPrice}</p>

        <div className="mt-2 pt-2 border-t border-gray">
          <p className="flex items-center gap-2 mt-2">
              <img className="w-5 block animate-flicker" src="/src/assets/ico_eye.png" alt="" />
            <span className="font-medium text-sm">35 people are viewing this right now</span>
          </p>
          <p className="flex items-center gap-2 mt-4">
              <img className="w-5 block animate-zoomInOut" src="/src/assets/ico_fire.png" alt="" />
            <span className="text-red-600 font-medium text-sm">35 sold in last 18 hours</span>
          </p>
          <p className="flex items-center gap-2 mt-6">
              <img className="w-5 block" src="/src/assets/ico_checked.png" alt="" />{' '}
              <span className="text-green font-medium text-sm">
                {product.quantity > 0 ? 'In stock' : 'Out of stock'}
              </span>
            </p>

            <p className="mt-5 text-midGray">{product.description}</p>

          <div className="mt-6 flex items-center gap-3">
            <div className="flex items-center w-max relative">
                <button
                  type="button"
                  className="text-lg block text-[0px] absolute left-4"
                  onClick={() => handleQuantityChange(-1)}
                  disabled={quantity <= 1}
                >
                <span className="text-2xl leading-[24px]">-</span>
              </button>
              <input
                type="text"
                className="w-[120px] h-[50px] border px-10 border-gray rounded-full text-center"
                  value={quantity}
                  readOnly
                />
                <button
                  type="button"
                  className="text-lg block text-[0px] absolute right-4"
                  onClick={() => handleQuantityChange(1)}
                >
                <span className="text-2xl leading-[24px]">+</span>
              </button>
            </div>

            <button
              type="button"
                className="h-[50px] bg-black text-white font-semibold text-sm px-4 flex-1 rounded-full hover:bg hover:bg-white border hover:border-black hover:text-black transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                onClick={handleAddToCart}
                disabled={product.stock === 0}
            >
                {product.quantity > 0 ? 'Add To Cart' : 'Out of Stock'}
            </button>
            <button type="button" className="p-4 bg-white border border-[#e6e6e6] rounded-full">
                <img className="w-4" src="/src/assets/ico_heart.png" alt="" />
            </button>
          </div>

          <ul className="flex items-center gap-4 mt-6">
            <li>
              <button type="button" className="flex items-center gap-4 text-sm font-medium">
                  <img className="w-4" src="/src/assets/ico_reload.png" alt="" />
                Compare
              </button>
            </li>
            <li>
              <button type="button" className="flex items-center gap-4 text-sm font-medium">
                  <img className="w-4" src="/src/assets/ico_question.png" alt="" />
                Question
              </button>
            </li>
            <li>
              <button type="button" className="flex items-center gap-4 text-sm font-medium">
                  <img className="w-4" src="/src/assets/ico_shipping.png" alt="" />
                Shipping info
              </button>
            </li>
            <li>
              <button type="button" className="flex items-center gap-4 text-sm font-medium">
                  <img className="w-4" src="/src/assets/ico_share.png" alt="" />
                Share
              </button>
            </li>
          </ul>

          <div className="flex items-center mt-6 mb-6 pt-6 pb-6 border-t border-b border-b-gray border-t-gray">
            <div>
                <img className="block w-9" src="/src/assets/ico_shipping2.png" alt="" />
            </div>
            <p className="flex-1 ml-4 pl-4 border-l border-l-[#d9d9d9] text-sm">
              Order in the next 22 hours 45 minutes to get it between <br />
              <span className="font-semibold underline">Tuesday, Oct 22 </span>{' '}
              <span className="mx-2">and</span>
              <span className="font-semibold underline"> Saturday, Oct 26</span>
            </p>
          </div>

          <div className="p-[15px] rounded-xl border border-[#dedede] flex items-start gap-3">
            <div>
                <img src="/src/assets/ico_check.png" className="w-6 block" alt="" />
            </div>
            <div className="text-sm">
              <p className="text-lightGray">
                Pickup available at <span className="font-semibold text-black"> Akaze store</span>
              </p>
              <p className="text-xs text-lightGray mt-1">Usually ready in 24 hours</p>
              <button type="button" className="underline text-xs mt-4">
                View store information
              </button>
            </div>
          </div>

          <div className="text-center mt-6 p-6 bg-[#f6f6f6] rounded-lg">
            <p className="text-sm tracking-widest">Guaranteed Checkout</p>
              <img className="block mt-3" src="/src/assets/img_payment.avif" alt="" />
            </div>
        </div>
      </div>
    </div>

    <div className="mt-9 lg:mt-24">
      <ul className="flex items-center lg:justify-center gap-6">
        <li>
          <button
            type="button"
            className="text-lg font-semibold py-2 px-4 bg-black text-white rounded-full"
          >
            Description
          </button>
        </li>
        <li>
          <button
            type="button"
            className="lg:block hidden text-lg font-semibold py-2 px-4 text-[#8a8a8a] hover:text-black transition-all"
          >
            Review
          </button>
        </li>
        <li>
          <button
            type="button"
            className="lg:block hidden text-lg font-semibold py-2 px-4 text-[#8a8a8a] hover:text-black transition-all"
          >
            Shipping
          </button>
        </li>
        <li>
          <button
            type="button"
            className="lg:block hidden text-lg font-semibold py-2 px-4 text-[#8a8a8a] hover:text-black transition-all"
          >
            Return
          </button>
        </li>
      </ul>

      <div className="mt-9 lg:mt-20">
          <p className="text-[#8a8a8a] leading-7">{product.description}</p>
        </div>
    </div>
  </div>
  )
}
