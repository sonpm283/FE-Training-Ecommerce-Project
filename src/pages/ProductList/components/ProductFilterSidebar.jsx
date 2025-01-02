import { PriceRangeSlider } from '@/components'
import Button from '@/components/Button'
import ROUTES from '@/constants/route'
import { useState } from 'react'
import { createSearchParams, Link, useNavigate } from 'react-router-dom'

export default function ProductFilterSidebar({ queryConfig, categories }) {
  const navigate = useNavigate()
  const { category: categoryName, minPrice, maxPrice } = queryConfig

  const [rangeValues, setRangeValues] = useState({
    minPrice: Number(minPrice) || 0,
    maxPrice: Number(maxPrice) || 100,
  })

  const handleApplyPrice = () => {
    navigate({
      pathname: ROUTES.PRODUCT_LIST,
      search: createSearchParams({
        ...queryConfig,
        minPrice: rangeValues.minPrice.toString(),
        maxPrice: rangeValues.maxPrice.toString(),
      }).toString(),
    })
  }

  const handleRangeChange = (values) => {
    setRangeValues(values)
  }

  return (
    <div className="p-0 lg:p-4">
      <Link to="/products" className="text-lg font-semibold hover:underline underline-offset-4">
        All Category
      </Link>
      <ul className="mt-4 space-y-3">
        {categories.map((category) => {
          const isActive = categoryName === category.slug

          return (
            <li key={category._id}>
              <Link
                to={{
                  pathname: ROUTES.PRODUCT_LIST,
                  search: createSearchParams({
                    ...queryConfig,
                    category: category.slug,
                  }).toString(),
                }}
                className={`font-medium text-sm hover:text-black transition-all ${
                  isActive ? 'text-black' : 'text-lightGray'
                }`}
              >
                {category.name}
              </Link>
            </li>
          )
        })}
      </ul>
      <div className="mt-5">
        <h2 className="text-lg font-semibold">Price</h2>
        <PriceRangeSlider min={20} max={250} onChange={handleRangeChange} />

        <Button
          onClick={handleApplyPrice}
          className="mt-3 w-full bg-black text-xs text-white py-2 px-4 rounded hover:bg-white border hover:border hover:text-black transition-colors"
        >
          Apply Price Filter
        </Button>
      </div>
      <div className="mt-5">
        <h2 className="text-lg font-semibold">Availability</h2>
        <ul className="mt-4 space-y-3">
          <li>
            <a
              href="#none"
              className="font-medium text-black text-sm hover:text-black transition-all"
            >
              In stock (16)
            </a>
          </li>
          <li>
            <a
              href="#none"
              className="font-medium text-lightGray text-sm hover:text-black transition-all"
            >
              Out of stock (1)
            </a>
          </li>
        </ul>
      </div>
    </div>
  )
}
