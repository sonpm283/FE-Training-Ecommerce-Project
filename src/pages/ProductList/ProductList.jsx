import { useGetCategoryListQuery } from '@/apis/categoryApi'
import { useGetProductListQuery } from '@/apis/productsApi'
import Product from '@/components/Product'
import { Link } from 'react-router-dom'
import ProductFilterSidebar from './components/ProductFilterSidebar'
import useQueryConfig from '@/hooks/useQueryConfig'

export default function ProductList() {
  const queryConfig = useQueryConfig()
  const { data: productsData } = useGetProductListQuery(queryConfig)
  const { data: categoriesData } = useGetCategoryListQuery()

  return (
    <main>
      <section className="relative">
        <img src="/src/assets/img_product_list_banner.webp" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
          <h2 className="text-4xl font-semibold">Shop</h2>
          <ul className="flex items-center gap-3 justify-center mt-2">
            <li>
              <span>Shop</span>
            </li>
            <li>
              <Link to="/">Home / </Link>
            </li>
          </ul>
        </div>
      </section>
      <section className="pt-12 pb-12">
        <div className="container">
          <div className="lg:grid grid-cols-5">
            <div className="col-span-1">
              <ProductFilterSidebar
                queryConfig={queryConfig}
                categories={categoriesData?.data || []}
              />
            </div>
            <div className="col-span-4 mt-6 lg:mt-0">
              <div className="py-2 px-3 border rounded-full cursor-pointer w-max">
                <select className="w-full text-sm">
                  <option value={1}>Price, low to hight</option>
                  <option value={2}>Price, hight to low</option>
                  <option value={3}>Date, old to new</option>
                  <option value={4}>Date, new to old</option>
                  <option value={5}>Best selling</option>
                </select>
              </div>
              <ul className="lg:grid grid-cols-3 gap-5 mt-9 space-y-3 lg:space-y-0">
                {(productsData?.data || []).map((product) => {
                  return <Product key={product._id} product={product} />
                })}
              </ul>
              <div className="mt-10">
                <ul className="flex items-center justify-center gap-2">
                  <li>
                    <button className="grid place-items-center size-10 rounded-full border border-lightGray">
                      <img className="size-4" src="/src/assets/ico_chevron_left.png" />
                    </button>
                  </li>
                  <li>
                    <a className="grid place-items-center size-10 rounded-full border border-lightGray hover:text-white hover:bg-black transition-all bg-black text-white">
                      1
                    </a>
                  </li>
                  <li>
                    <a
                      className="grid place-items-center size-10 rounded-full border border-lightGray hover:text-white hover:bg-black transition-all"
                      href="#none"
                    >
                      2
                    </a>
                  </li>
                  <li>
                    <a
                      className="grid place-items-center size-10 rounded-full border border-lightGray hover:text-white hover:bg-black transition-all"
                      href="#none"
                    >
                      3
                    </a>
                  </li>
                  <li>
                    <a
                      className="grid place-items-center size-10 rounded-full border border-lightGray hover:text-white hover:bg-black transition-all"
                      href="#none"
                    >
                      4
                    </a>
                  </li>
                  <li>
                    <button className="grid place-items-center size-10 rounded-full border border-lightGray">
                      <img className="size-4" src="/src/assets/ico_chevron_right.png" />
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
