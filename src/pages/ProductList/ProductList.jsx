import { Link } from 'react-router-dom'

export default function ProductList() {
  return (
    <main>
      <section className="relative">
        <img src="/src/assets/img_product_list_banner.webp" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
          <h2 className="text-4xl font-semibold">Products</h2>
          <ul className="flex items-center gap-3 justify-center mt-2">
            <li>
              <a href="index.html">Home / </a>
            </li>
            <li>
              <a href="index.html">Products</a>
            </li>
          </ul>
        </div>
      </section>
      <section className="pt-12 pb-12">
        <div className="container">
          <div className="lg:grid grid-cols-5">
            <div className="col-span-1 p-0 lg:p-4">
              <div>
                <h2 className="text-lg font-semibold">Category</h2>
                <ul className="mt-4 space-y-3">
                  <li>
                    <a
                      href="#none"
                      className="font-medium text-black text-sm hover:text-black transition-all"
                    >
                      Bathroom (6)
                    </a>
                  </li>
                  <li>
                    <a
                      href="#none"
                      className="font-medium text-lightGray text-sm hover:text-black transition-all"
                    >
                      Chair (7)
                    </a>
                  </li>
                  <li>
                    <a
                      href="#none"
                      className="font-medium text-lightGray text-sm hover:text-black transition-all"
                    >
                      Decor (17)
                    </a>
                  </li>
                  <li>
                    <a
                      href="#none"
                      className="font-medium text-lightGray text-sm hover:text-black transition-all"
                    >
                      Lamp (3)
                    </a>
                  </li>
                  <li>
                    <a
                      href="#none"
                      className="font-medium text-lightGray text-sm hover:text-black transition-all"
                    >
                      Table (9)
                    </a>
                  </li>
                </ul>
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
                <li className="mt-6 md:mt-0 text-center group relative">
                  <a href="product-detail.html" className="bg-red">
                    <span className="absolute py-1 text-xs px-2 top-3 left-3 bg-black text-white rounded-xl">
                      Out of stock
                    </span>
                    <ul className="absolute bottom-28 left-4 z-10 flex flex-col gap-3">
                      <li className="opacity-0 translate-y-4 duration-200 group-hover:opacity-100 group-hover:translate-y-0 transition-all">
                        <button
                          type="button"
                          className="shadow-lg p-3 rounded-full bg-white block hover:bg-slate-200 transition-all"
                        >
                          <img
                            src="/src/assets/ico_heart.png"
                            className="image size-4 rouded-full"
                          />
                        </button>
                      </li>
                      <li className="opacity-0 translate-y-4 duration-200 group-hover:opacity-100 group-hover:translate-y-0 transition-all delay-100">
                        <button
                          type="button"
                          className="shadow-lg p-3 rounded-full bg-white block hover:bg-slate-200 transition-all"
                        >
                          <img
                            src="/src/assets/ico_reload.png"
                            className="image size-4 rouded-full"
                          />
                        </button>
                      </li>
                      <li className="opacity-0 translate-y-4 duration-200 group-hover:opacity-100 group-hover:translate-y-0 transition-all delay-200">
                        <button
                          type="button"
                          className="shadow-lg p-3 rounded-full bg-white block hover:bg-slate-200 transition-all"
                        >
                          <img
                            src="/src/assets/ico_search.png"
                            className="image size-4 rouded-full"
                          />
                        </button>
                      </li>
                    </ul>
                    <div className="rounded-xl overflow-hidden bg-white lg:h-[385px]">
                      <img
                        className="block size-full object-cover"
                        src="/src/assets/img_product.webp"
                      />
                    </div>
                    <div className="flex justify-center items-center gap-1 mt-5">
                      <img
                        className="size-13 inline-block"
                        src="/src/assets/ico_star_active.png"
                      />
                      <img
                        className="size-13 inline-block"
                        src="/src/assets/ico_star_gray.png"
                      />
                      <img
                        className="size-13 inline-block"
                        src="/src/assets/ico_star_gray.png"
                      />
                      <img
                        className="size-13 inline-block"
                        src="/src/assets/ico_star_gray.png"
                      />
                      <img
                        className="size-13 inline-block"
                        src="/src/assets/ico_star_gray.png"
                      />
                    </div>
                    <h3 className="text-15 mt-2">Egg Dining Table</h3>
                  </a>
                  <div className="mt-2 relative h-5 overflow-hidden">
                    <a href="product-detail.html" className="bg-red"></a>
                    <div className="absolute left-1/2 -translate-x-1/2 group-hover:bottom-0 -bottom-5 transition-all duration-300">
                      <a href="product-detail.html" className="bg-red">
                        <div className="flex items-center justify-center font-bold text-15 text-center">
                          <span>$70.00</span>
                        </div>
                      </a>
                      <a
                        href="#none"
                        className="uppercase text-xs font-medium tracking-widest relative before:absolute before:bottom-0 before:w-0 before:h-[1px] before:bg-black before:left-0 hover:before:w-full before:transition-all before:duration-500"
                      >
                        Add to cart
                      </a>
                    </div>
                  </div>
                </li>
                <li className="mt-6 md:mt-0 text-center group relative">
                  <a href="product-detail.html">
                    <ul className="absolute bottom-28 left-4 z-10 flex flex-col gap-3">
                      <li className="opacity-0 translate-y-4 duration-200 group-hover:opacity-100 group-hover:translate-y-0 transition-all">
                        <button
                          type="button"
                          className="shadow-lg p-3 rounded-full bg-white block hover:bg-slate-200 transition-all"
                        >
                          <img
                            src="/src/assets/ico_heart.png"
                            className="image size-4 rouded-full"
                          />
                        </button>
                      </li>
                      <li className="opacity-0 translate-y-4 duration-200 group-hover:opacity-100 group-hover:translate-y-0 transition-all delay-100">
                        <button
                          type="button"
                          className="shadow-lg p-3 rounded-full bg-white block hover:bg-slate-200 transition-all"
                        >
                          <img
                            src="/src/assets/ico_reload.png"
                            className="image size-4 rouded-full"
                          />
                        </button>
                      </li>
                      <li className="opacity-0 translate-y-4 duration-200 group-hover:opacity-100 group-hover:translate-y-0 transition-all delay-200">
                        <button
                          type="button"
                          className="shadow-lg p-3 rounded-full bg-white block hover:bg-slate-200 transition-all"
                        >
                          <img
                            src="/src/assets/ico_search.png"
                            className="image size-4 rouded-full"
                          />
                        </button>
                      </li>
                    </ul>
                    <div className="rounded-xl overflow-hidden bg-white lg:h-[385px]">
                      <img
                        className="block size-full object-cover"
                        src="/src/assets/img_product2.webp"
                      />
                    </div>
                    <div className="flex justify-center items-center gap-1 mt-5">
                      <img
                        className="size-13 inline-block"
                        src="/src/assets/ico_star_active.png"
                      />
                      <img
                        className="size-13 inline-block"
                        src="/src/assets/ico_star_gray.png"
                      />
                      <img
                        className="size-13 inline-block"
                        src="/src/assets/ico_star_gray.png"
                      />
                      <img
                        className="size-13 inline-block"
                        src="/src/assets/ico_star_gray.png"
                      />
                      <img
                        className="size-13 inline-block"
                        src="/src/assets/ico_star_gray.png"
                      />
                    </div>
                    <h3 className="text-15 mt-2">Century Starburst Clock</h3>
                  </a>
                  <div className="mt-2 relative h-5 overflow-hidden">
                    <a href="product-detail.html"></a>
                    <div className="absolute left-1/2 -translate-x-1/2 group-hover:bottom-0 -bottom-5 transition-all duration-300">
                      <a href="product-detail.html">
                        <div className="flex items-center justify-center font-bold text-15 text-center">
                          <span>$55.00</span>
                        </div>
                      </a>
                      <a
                        href="#none"
                        className="uppercase text-xs font-medium tracking-widest relative before:absolute before:bottom-0 before:w-0 before:h-[1px] before:bg-black before:left-0 hover:before:w-full before:transition-all before:duration-500"
                      >
                        Add to cart
                      </a>
                    </div>
                  </div>
                </li>
                <li className="mt-6 md:mt-0 text-center group relative">
                  <a href="product-detail.html">
                    <div className="rounded-xl overflow-hidden bg-white lg:h-[385px]">
                      <img
                        className="block size-full object-cover"
                        src="/src/assets/img_product3.webp"
                      />
                    </div>
                    <ul className="absolute bottom-28 left-4 z-10 flex flex-col gap-3">
                      <li className="opacity-0 translate-y-4 duration-200 group-hover:opacity-100 group-hover:translate-y-0 transition-all">
                        <button
                          type="button"
                          className="shadow-lg p-3 rounded-full bg-white block hover:bg-slate-200 transition-all"
                        >
                          <img
                            src="/src/assets/ico_heart.png"
                            className="image size-4 rouded-full"
                          />
                        </button>
                      </li>
                      <li className="opacity-0 translate-y-4 duration-200 group-hover:opacity-100 group-hover:translate-y-0 transition-all delay-100">
                        <button
                          type="button"
                          className="shadow-lg p-3 rounded-full bg-white block hover:bg-slate-200 transition-all"
                        >
                          <img
                            src="/src/assets/ico_reload.png"
                            className="image size-4 rouded-full"
                          />
                        </button>
                      </li>
                      <li className="opacity-0 translate-y-4 duration-200 group-hover:opacity-100 group-hover:translate-y-0 transition-all delay-200">
                        <button
                          type="button"
                          className="shadow-lg p-3 rounded-full bg-white block hover:bg-slate-200 transition-all"
                        >
                          <img
                            src="/src/assets/ico_search.png"
                            className="image size-4 rouded-full"
                          />
                        </button>
                      </li>
                    </ul>
                    <div className="flex justify-center items-center gap-1 mt-5">
                      <img
                        className="size-13 inline-block"
                        src="/src/assets/ico_star_active.png"
                      />
                      <img
                        className="size-13 inline-block"
                        src="/src/assets/ico_star_gray.png"
                      />
                      <img
                        className="size-13 inline-block"
                        src="/src/assets/ico_star_gray.png"
                      />
                      <img
                        className="size-13 inline-block"
                        src="/src/assets/ico_star_gray.png"
                      />
                      <img
                        className="size-13 inline-block"
                        src="/src/assets/ico_star_gray.png"
                      />
                    </div>
                    <h3 className="text-15 mt-2">Bouquet Flower Vase</h3>
                  </a>
                  <div className="mt-2 relative h-5 overflow-hidden">
                    <a href="product-detail.html"></a>
                    <div className="absolute left-1/2 -translate-x-1/2 group-hover:bottom-0 -bottom-5 transition-all duration-300">
                      <a href="product-detail.html">
                        <div className="flex items-center justify-center font-bold text-15 text-center">
                          <span>$59.00</span> -<span>$60.00</span>
                        </div>
                      </a>
                      <a
                        href="#none"
                        className="uppercase text-xs font-medium tracking-widest relative before:absolute before:bottom-0 before:w-0 before:h-[1px] before:bg-black before:left-0 hover:before:w-full before:transition-all before:duration-500"
                      >
                        Add to cart
                      </a>
                    </div>
                  </div>
                </li>
                <li className="mt-6 md:mt-0 text-center group relative">
                  <a href="product-detail.html">
                    <span className="absolute py-1 text-xs px-2 top-3 left-3 bg-red-600 text-white rounded-xl">
                      -30%
                    </span>
                    <ul className="absolute bottom-28 left-4 z-10 flex flex-col gap-3">
                      <li className="opacity-0 translate-y-4 duration-200 group-hover:opacity-100 group-hover:translate-y-0 transition-all">
                        <button
                          type="button"
                          className="shadow-lg p-3 rounded-full bg-white block hover:bg-slate-200 transition-all"
                        >
                          <img
                            src="/src/assets/ico_heart.png"
                            className="image size-4 rouded-full"
                          />
                        </button>
                      </li>
                      <li className="opacity-0 translate-y-4 duration-200 group-hover:opacity-100 group-hover:translate-y-0 transition-all delay-100">
                        <button
                          type="button"
                          className="shadow-lg p-3 rounded-full bg-white block hover:bg-slate-200 transition-all"
                        >
                          <img
                            src="/src/assets/ico_reload.png"
                            className="image size-4 rouded-full"
                          />
                        </button>
                      </li>
                      <li className="opacity-0 translate-y-4 duration-200 group-hover:opacity-100 group-hover:translate-y-0 transition-all delay-200">
                        <button
                          type="button"
                          className="shadow-lg p-3 rounded-full bg-white block hover:bg-slate-200 transition-all"
                        >
                          <img
                            src="/src/assets/ico_search.png"
                            className="image size-4 rouded-full"
                          />
                        </button>
                      </li>
                    </ul>
                    <div className="rounded-xl overflow-hidden bg-white lg:h-[385px]">
                      <img
                        className="block size-full object-cover"
                        src="/src/assets/img_product4.webp"
                      />
                    </div>
                    <div className="flex justify-center items-center gap-1 mt-5">
                      <img
                        className="size-13 inline-block"
                        src="/src/assets/ico_star_active.png"
                      />
                      <img
                        className="size-13 inline-block"
                        src="/src/assets/ico_star_gray.png"
                      />
                      <img
                        className="size-13 inline-block"
                        src="/src/assets/ico_star_gray.png"
                      />
                      <img
                        className="size-13 inline-block"
                        src="/src/assets/ico_star_gray.png"
                      />
                      <img
                        className="size-13 inline-block"
                        src="/src/assets/ico_star_gray.png"
                      />
                    </div>
                    <h3 className="text-15 mt-2">Caravaggio Read Wall Light</h3>
                  </a>
                  <div className="mt-2 relative h-5 overflow-hidden">
                    <a href="product-detail.html"></a>
                    <div className="absolute left-1/2 -translate-x-1/2 group-hover:bottom-0 -bottom-5 transition-all duration-300">
                      <a href="product-detail.html">
                        <div className="flex items-center justify-center font-bold text-15 text-center">
                          <span className="line-through text-lightGray">
                            $59.00{' '}
                          </span>{' '}
                          -<span className="text-red-600">$60.00</span>
                        </div>
                      </a>
                      <a
                        href="#none"
                        className="uppercase text-xs font-medium tracking-widest relative before:absolute before:bottom-0 before:w-0 before:h-[1px] before:bg-black before:left-0 hover:before:w-full before:transition-all before:duration-500"
                      >
                        Add to cart
                      </a>
                    </div>
                  </div>
                </li>
                <li className="mt-6 md:mt-0 text-center group relative">
                  <a href="product-detail.html" className="bg-red">
                    <span className="absolute py-1 text-xs px-2 top-3 left-3 bg-black text-white rounded-xl">
                      Out of stock
                    </span>
                    <ul className="absolute bottom-28 left-4 z-10 flex flex-col gap-3">
                      <li className="opacity-0 translate-y-4 duration-200 group-hover:opacity-100 group-hover:translate-y-0 transition-all">
                        <button
                          type="button"
                          className="shadow-lg p-3 rounded-full bg-white block hover:bg-slate-200 transition-all"
                        >
                          <img
                            src="/src/assets/ico_heart.png"
                            className="image size-4 rouded-full"
                          />
                        </button>
                      </li>
                      <li className="opacity-0 translate-y-4 duration-200 group-hover:opacity-100 group-hover:translate-y-0 transition-all delay-100">
                        <button
                          type="button"
                          className="shadow-lg p-3 rounded-full bg-white block hover:bg-slate-200 transition-all"
                        >
                          <img
                            src="/src/assets/ico_reload.png"
                            className="image size-4 rouded-full"
                          />
                        </button>
                      </li>
                      <li className="opacity-0 translate-y-4 duration-200 group-hover:opacity-100 group-hover:translate-y-0 transition-all delay-200">
                        <button
                          type="button"
                          className="shadow-lg p-3 rounded-full bg-white block hover:bg-slate-200 transition-all"
                        >
                          <img
                            src="/src/assets/ico_search.png"
                            className="image size-4 rouded-full"
                          />
                        </button>
                      </li>
                    </ul>
                    <div className="rounded-xl overflow-hidden bg-white lg:h-[385px]">
                      <img
                        className="block size-full object-cover"
                        src="/src/assets/img_product.webp"
                      />
                    </div>
                    <div className="flex justify-center items-center gap-1 mt-5">
                      <img
                        className="size-13 inline-block"
                        src="/src/assets/ico_star_active.png"
                      />
                      <img
                        className="size-13 inline-block"
                        src="/src/assets/ico_star_gray.png"
                      />
                      <img
                        className="size-13 inline-block"
                        src="/src/assets/ico_star_gray.png"
                      />
                      <img
                        className="size-13 inline-block"
                        src="/src/assets/ico_star_gray.png"
                      />
                      <img
                        className="size-13 inline-block"
                        src="/src/assets/ico_star_gray.png"
                      />
                    </div>
                    <h3 className="text-15 mt-2">Egg Dining Table</h3>
                  </a>
                  <div className="mt-2 relative h-5 overflow-hidden">
                    <a href="product-detail.html" className="bg-red"></a>
                    <div className="absolute left-1/2 -translate-x-1/2 group-hover:bottom-0 -bottom-5 transition-all duration-300">
                      <a href="product-detail.html" className="bg-red">
                        <div className="flex items-center justify-center font-bold text-15 text-center">
                          <span>$70.00</span>
                        </div>
                      </a>
                      <a
                        href="#none"
                        className="uppercase text-xs font-medium tracking-widest relative before:absolute before:bottom-0 before:w-0 before:h-[1px] before:bg-black before:left-0 hover:before:w-full before:transition-all before:duration-500"
                      >
                        Add to cart
                      </a>
                    </div>
                  </div>
                </li>
                <li className="mt-6 md:mt-0 text-center group relative">
                  <a href="product-detail.html">
                    <ul className="absolute bottom-28 left-4 z-10 flex flex-col gap-3">
                      <li className="opacity-0 translate-y-4 duration-200 group-hover:opacity-100 group-hover:translate-y-0 transition-all">
                        <button
                          type="button"
                          className="shadow-lg p-3 rounded-full bg-white block hover:bg-slate-200 transition-all"
                        >
                          <img
                            src="/src/assets/ico_heart.png"
                            className="image size-4 rouded-full"
                          />
                        </button>
                      </li>
                      <li className="opacity-0 translate-y-4 duration-200 group-hover:opacity-100 group-hover:translate-y-0 transition-all delay-100">
                        <button
                          type="button"
                          className="shadow-lg p-3 rounded-full bg-white block hover:bg-slate-200 transition-all"
                        >
                          <img
                            src="/src/assets/ico_reload.png"
                            className="image size-4 rouded-full"
                          />
                        </button>
                      </li>
                      <li className="opacity-0 translate-y-4 duration-200 group-hover:opacity-100 group-hover:translate-y-0 transition-all delay-200">
                        <button
                          type="button"
                          className="shadow-lg p-3 rounded-full bg-white block hover:bg-slate-200 transition-all"
                        >
                          <img
                            src="/src/assets/ico_search.png"
                            className="image size-4 rouded-full"
                          />
                        </button>
                      </li>
                    </ul>
                    <div className="rounded-xl overflow-hidden bg-white lg:h-[385px]">
                      <img
                        className="block size-full object-cover"
                        src="/src/assets/img_product2.webp"
                      />
                    </div>
                    <div className="flex justify-center items-center gap-1 mt-5">
                      <img
                        className="size-13 inline-block"
                        src="/src/assets/ico_star_active.png"
                      />
                      <img
                        className="size-13 inline-block"
                        src="/src/assets/ico_star_gray.png"
                      />
                      <img
                        className="size-13 inline-block"
                        src="/src/assets/ico_star_gray.png"
                      />
                      <img
                        className="size-13 inline-block"
                        src="/src/assets/ico_star_gray.png"
                      />
                      <img
                        className="size-13 inline-block"
                        src="/src/assets/ico_star_gray.png"
                      />
                    </div>
                    <h3 className="text-15 mt-2">Century Starburst Clock</h3>
                  </a>
                  <div className="mt-2 relative h-5 overflow-hidden">
                    <a href="product-detail.html"></a>
                    <div className="absolute left-1/2 -translate-x-1/2 group-hover:bottom-0 -bottom-5 transition-all duration-300">
                      <a href="product-detail.html">
                        <div className="flex items-center justify-center font-bold text-15 text-center">
                          <span>$55.00</span>
                        </div>
                      </a>
                      <a
                        href="#none"
                        className="uppercase text-xs font-medium tracking-widest relative before:absolute before:bottom-0 before:w-0 before:h-[1px] before:bg-black before:left-0 hover:before:w-full before:transition-all before:duration-500"
                      >
                        Add to cart
                      </a>
                    </div>
                  </div>
                </li>
                <li className="mt-6 md:mt-0 text-center group relative">
                  <a href="product-detail.html">
                    <div className="rounded-xl overflow-hidden bg-white lg:h-[385px]">
                      <img
                        className="block size-full object-cover"
                        src="/src/assets/img_product3.webp"
                      />
                    </div>
                    <ul className="absolute bottom-28 left-4 z-10 flex flex-col gap-3">
                      <li className="opacity-0 translate-y-4 duration-200 group-hover:opacity-100 group-hover:translate-y-0 transition-all">
                        <button
                          type="button"
                          className="shadow-lg p-3 rounded-full bg-white block hover:bg-slate-200 transition-all"
                        >
                          <img
                            src="/src/assets/ico_heart.png"
                            className="image size-4 rouded-full"
                          />
                        </button>
                      </li>
                      <li className="opacity-0 translate-y-4 duration-200 group-hover:opacity-100 group-hover:translate-y-0 transition-all delay-100">
                        <button
                          type="button"
                          className="shadow-lg p-3 rounded-full bg-white block hover:bg-slate-200 transition-all"
                        >
                          <img
                            src="/src/assets/ico_reload.png"
                            className="image size-4 rouded-full"
                          />
                        </button>
                      </li>
                      <li className="opacity-0 translate-y-4 duration-200 group-hover:opacity-100 group-hover:translate-y-0 transition-all delay-200">
                        <button
                          type="button"
                          className="shadow-lg p-3 rounded-full bg-white block hover:bg-slate-200 transition-all"
                        >
                          <img
                            src="/src/assets/ico_search.png"
                            className="image size-4 rouded-full"
                          />
                        </button>
                      </li>
                    </ul>
                    <div className="flex justify-center items-center gap-1 mt-5">
                      <img
                        className="size-13 inline-block"
                        src="/src/assets/ico_star_active.png"
                      />
                      <img
                        className="size-13 inline-block"
                        src="/src/assets/ico_star_gray.png"
                      />
                      <img
                        className="size-13 inline-block"
                        src="/src/assets/ico_star_gray.png"
                      />
                      <img
                        className="size-13 inline-block"
                        src="/src/assets/ico_star_gray.png"
                      />
                      <img
                        className="size-13 inline-block"
                        src="/src/assets/ico_star_gray.png"
                      />
                    </div>
                    <h3 className="text-15 mt-2">Bouquet Flower Vase</h3>
                  </a>
                  <div className="mt-2 relative h-5 overflow-hidden">
                    <a href="product-detail.html"></a>
                    <div className="absolute left-1/2 -translate-x-1/2 group-hover:bottom-0 -bottom-5 transition-all duration-300">
                      <a href="product-detail.html">
                        <div className="flex items-center justify-center font-bold text-15 text-center">
                          <span>$59.00</span> -<span>$60.00</span>
                        </div>
                      </a>
                      <a
                        href="#none"
                        className="uppercase text-xs font-medium tracking-widest relative before:absolute before:bottom-0 before:w-0 before:h-[1px] before:bg-black before:left-0 hover:before:w-full before:transition-all before:duration-500"
                      >
                        Add to cart
                      </a>
                    </div>
                  </div>
                </li>
                <li className="mt-6 md:mt-0 text-center group relative">
                  <a href="product-detail.html">
                    <span className="absolute py-1 text-xs px-2 top-3 left-3 bg-red-600 text-white rounded-xl">
                      -30%
                    </span>
                    <ul className="absolute bottom-28 left-4 z-10 flex flex-col gap-3">
                      <li className="opacity-0 translate-y-4 duration-200 group-hover:opacity-100 group-hover:translate-y-0 transition-all">
                        <button
                          type="button"
                          className="shadow-lg p-3 rounded-full bg-white block hover:bg-slate-200 transition-all"
                        >
                          <img
                            src="/src/assets/ico_heart.png"
                            className="image size-4 rouded-full"
                          />
                        </button>
                      </li>
                      <li className="opacity-0 translate-y-4 duration-200 group-hover:opacity-100 group-hover:translate-y-0 transition-all delay-100">
                        <button
                          type="button"
                          className="shadow-lg p-3 rounded-full bg-white block hover:bg-slate-200 transition-all"
                        >
                          <img
                            src="/src/assets/ico_reload.png"
                            className="image size-4 rouded-full"
                          />
                        </button>
                      </li>
                      <li className="opacity-0 translate-y-4 duration-200 group-hover:opacity-100 group-hover:translate-y-0 transition-all delay-200">
                        <button
                          type="button"
                          className="shadow-lg p-3 rounded-full bg-white block hover:bg-slate-200 transition-all"
                        >
                          <img
                            src="/src/assets/ico_search.png"
                            className="image size-4 rouded-full"
                          />
                        </button>
                      </li>
                    </ul>
                    <div className="rounded-xl overflow-hidden bg-white lg:h-[385px]">
                      <img
                        className="block size-full object-cover"
                        src="/src/assets/img_product4.webp"
                      />
                    </div>
                    <div className="flex justify-center items-center gap-1 mt-5">
                      <img
                        className="size-13 inline-block"
                        src="/src/assets/ico_star_active.png"
                      />
                      <img
                        className="size-13 inline-block"
                        src="/src/assets/ico_star_gray.png"
                      />
                      <img
                        className="size-13 inline-block"
                        src="/src/assets/ico_star_gray.png"
                      />
                      <img
                        className="size-13 inline-block"
                        src="/src/assets/ico_star_gray.png"
                      />
                      <img
                        className="size-13 inline-block"
                        src="/src/assets/ico_star_gray.png"
                      />
                    </div>
                    <h3 className="text-15 mt-2">Caravaggio Read Wall Light</h3>
                  </a>
                  <div className="mt-2 relative h-5 overflow-hidden">
                    <a href="product-detail.html"></a>
                    <div className="absolute left-1/2 -translate-x-1/2 group-hover:bottom-0 -bottom-5 transition-all duration-300">
                      <a href="product-detail.html">
                        <div className="flex items-center justify-center font-bold text-15 text-center">
                          <span className="line-through text-lightGray">
                            $59.00{' '}
                          </span>{' '}
                          -<span className="text-red-600">$60.00</span>
                        </div>
                      </a>
                      <a
                        href="#none"
                        className="uppercase text-xs font-medium tracking-widest relative before:absolute before:bottom-0 before:w-0 before:h-[1px] before:bg-black before:left-0 hover:before:w-full before:transition-all before:duration-500"
                      >
                        Add to cart
                      </a>
                    </div>
                  </div>
                </li>
                <li className="mt-6 md:mt-0 text-center group relative">
                  <a href="product-detail.html" className="bg-red">
                    <span className="absolute py-1 text-xs px-2 top-3 left-3 bg-black text-white rounded-xl">
                      Out of stock
                    </span>
                    <ul className="absolute bottom-28 left-4 z-10 flex flex-col gap-3">
                      <li className="opacity-0 translate-y-4 duration-200 group-hover:opacity-100 group-hover:translate-y-0 transition-all">
                        <button
                          type="button"
                          className="shadow-lg p-3 rounded-full bg-white block hover:bg-slate-200 transition-all"
                        >
                          <img
                            src="/src/assets/ico_heart.png"
                            className="image size-4 rouded-full"
                          />
                        </button>
                      </li>
                      <li className="opacity-0 translate-y-4 duration-200 group-hover:opacity-100 group-hover:translate-y-0 transition-all delay-100">
                        <button
                          type="button"
                          className="shadow-lg p-3 rounded-full bg-white block hover:bg-slate-200 transition-all"
                        >
                          <img
                            src="/src/assets/ico_reload.png"
                            className="image size-4 rouded-full"
                          />
                        </button>
                      </li>
                      <li className="opacity-0 translate-y-4 duration-200 group-hover:opacity-100 group-hover:translate-y-0 transition-all delay-200">
                        <button
                          type="button"
                          className="shadow-lg p-3 rounded-full bg-white block hover:bg-slate-200 transition-all"
                        >
                          <img
                            src="/src/assets/ico_search.png"
                            className="image size-4 rouded-full"
                          />
                        </button>
                      </li>
                    </ul>
                    <div className="rounded-xl overflow-hidden bg-white lg:h-[385px]">
                      <img
                        className="block size-full object-cover"
                        src="/src/assets/img_product.webp"
                      />
                    </div>
                    <div className="flex justify-center items-center gap-1 mt-5">
                      <img
                        className="size-13 inline-block"
                        src="/src/assets/ico_star_active.png"
                      />
                      <img
                        className="size-13 inline-block"
                        src="/src/assets/ico_star_gray.png"
                      />
                      <img
                        className="size-13 inline-block"
                        src="/src/assets/ico_star_gray.png"
                      />
                      <img
                        className="size-13 inline-block"
                        src="/src/assets/ico_star_gray.png"
                      />
                      <img
                        className="size-13 inline-block"
                        src="/src/assets/ico_star_gray.png"
                      />
                    </div>
                    <h3 className="text-15 mt-2">Egg Dining Table</h3>
                  </a>
                  <div className="mt-2 relative h-5 overflow-hidden">
                    <a href="product-detail.html" className="bg-red"></a>
                    <div className="absolute left-1/2 -translate-x-1/2 group-hover:bottom-0 -bottom-5 transition-all duration-300">
                      <a href="product-detail.html" className="bg-red">
                        <div className="flex items-center justify-center font-bold text-15 text-center">
                          <span>$70.00</span>
                        </div>
                      </a>
                      <a
                        href="#none"
                        className="uppercase text-xs font-medium tracking-widest relative before:absolute before:bottom-0 before:w-0 before:h-[1px] before:bg-black before:left-0 hover:before:w-full before:transition-all before:duration-500"
                      >
                        Add to cart
                      </a>
                    </div>
                  </div>
                </li>
              </ul>
              <div className="mt-10">
                <ul className="flex items-center justify-center gap-2">
                  <li>
                    <button className="grid place-items-center size-10 rounded-full border border-lightGray">
                      <img
                        className="size-4"
                        src="/src/assets/ico_chevron_left.png"
                      />
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
                      <img
                        className="size-4"
                        src="/src/assets/ico_chevron_right.png"
                      />
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
