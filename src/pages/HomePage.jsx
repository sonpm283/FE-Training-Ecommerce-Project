import React from 'react'
import { Link } from 'react-router-dom'

export default function HomePage() {
  return (
    <main>
      <section className="relative overflow-hidden">
        <img className="animate-zoomIn" src="/src/assets/img_banner.webp" alt />
        <div className="absolute w-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
          <h2 className="text-xl lg:text-4xl font-bold text-white lg:leading-10 animate-slideInLeft">
            Harmony in Design: <br />
            Blending Form and Function
          </h2>
          <a
            style={{ animationDelay: '0.3s' }}
            href="#none"
            className="animate-slideInLeft mt-4 lg:mt-8 h-9 border border-white px-7 inline-flex items-center font-semibold text-white rounded-full text-[15px] hover:bg-white hover:text-black transition-all duration-300"
          >
            Shop now
          </a>
        </div>
      </section>
      <section className="bg-gray">
        <div className="container">
          <ul className="grid grid-cols-2 lg:grid-cols-4 gap-5 items-center py-14">
            <li className="flex items-center lg:justify-center lg:flex-1 gap-[15px]">
              <img src="/src/assets/ico_freeship.svg" alt />
              <span className="text-sm lg:text-base font-semibold">
                Free Shipping Over $50
              </span>
            </li>
            <li className="flex items-center lg:justify-center lg:flex-1 gap-[15px]">
              <img src="/src/assets/ico_quality.svg" alt />
              <span className="text-sm lg:text-base font-semibold">
                Quality Assurance
              </span>
            </li>
            <li className="flex items-center lg:justify-center lg:flex-1 gap-[15px]">
              <img src="/src/assets/ico_return.svg" alt />
              <span className="text-sm lg:text-base font-semibold">
                Return within 14 days
              </span>
            </li>
            <li className="flex items-center lg:justify-center lg:flex-1 gap-[15px]">
              <img src="/src/assets/ico_support.svg" />
              <span className="text-sm lg:text-base font-semibold">
                Support 24/7
              </span>
            </li>
          </ul>
        </div>
      </section>
      <section className="mt-8 lg:mt-24">
        <div className="container">
          <div className="lg:flex justify-between items-center">
            <h2 className="text-3xl font-bold">Our Categories</h2>
            <a
              href="#none"
              className="mt-6 lg:mt-0 h-9 border border-black px-7 inline-flex items-center font-semibold text-black rounded-full text-[15px] hover:bg-black hover:text-white transition-all duration-300"
            >
              View All
            </a>
          </div>
          <ul className="mt-10 md:grid grid-cols-3 gap-10 cursor-pointer">
            <li>
              <div className="rounded-[20px] overflow-hidden relative group">
                <img className="image" src="/src/assets/img_collection.jpg" alt />
                <a
                  href="#none"
                  className="absolute group-hover:bottom-10 left-1/2 -translate-x-1/2 -bottom-10 mt-8 h-9 bg-white px-7 inline-flex items-center font-semibold text-black rounded-full text-[15px] hover:bg-black hover:text-white transition-all duration-300"
                >
                  Living Room
                </a>
              </div>
            </li>
            <li className="mt-6 md:mt-0">
              <div className="rounded-[20px] overflow-hidden relative group">
                <img className="image" src="/src/assets/img_collection2.webp" alt />
                <a
                  href="#none"
                  className="absolute group-hover:bottom-10 left-1/2 -translate-x-1/2 -bottom-10 mt-8 h-9 bg-white px-7 inline-flex items-center font-semibold text-black rounded-full text-[15px] hover:bg-black hover:text-white transition-all duration-300"
                >
                  Lamp
                </a>
              </div>
            </li>
            <li className="mt-6 md:mt-0">
              <div className="rounded-[20px] overflow-hidden relative group">
                <img className="image" src="/src/assets/img_collection3.webp" alt />
                <a
                  href="#none"
                  className="absolute group-hover:bottom-10 left-1/2 -translate-x-1/2 -bottom-10 mt-8 h-9 bg-white px-7 inline-flex items-center font-semibold text-black rounded-full text-[15px] hover:bg-black hover:text-white transition-all duration-300"
                >
                  Deco
                </a>
              </div>
            </li>
          </ul>
        </div>
      </section>
      <section className="mt-9 lg:mt-24 pt-16 pb-8 bg-gray">
        <div className="container">
          <div className="lg:flex justify-between items-end">
            <div>
              <h2 className="text-3xl font-bold">Bestseller</h2>
              <p className="mt-2 text-lightGray">
                Experience the best products at our store!
              </p>
            </div>
            <a
              href="#none"
              className="mt-6 lg:mt-0 h-9 border border-black px-7 inline-flex items-center font-semibold text-black rounded-full text-[15px] hover:bg-black hover:text-white transition-all duration-300"
            >
              View All
            </a>
          </div>
          <ul className="mt-8 lg:grid grid-cols-4 gap-7">
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
                        src=".//src/assets/ico_heart.png"
                        className="image size-4 rouded-full"
                        alt
                      />
                    </button>
                  </li>
                  <li className="opacity-0 translate-y-4 duration-200 group-hover:opacity-100 group-hover:translate-y-0 transition-all delay-100">
                    <button
                      type="button"
                      className="shadow-lg p-3 rounded-full bg-white block hover:bg-slate-200 transition-all"
                    >
                      <img
                        src=".//src/assets/ico_reload.png"
                        className="image size-4 rouded-full"
                        alt
                      />
                    </button>
                  </li>
                  <li className="opacity-0 translate-y-4 duration-200 group-hover:opacity-100 group-hover:translate-y-0 transition-all delay-200">
                    <button
                      type="button"
                      className="shadow-lg p-3 rounded-full bg-white block hover:bg-slate-200 transition-all"
                    >
                      <img
                        src=".//src/assets/ico_search.png"
                        className="image size-4 rouded-full"
                        alt
                      />
                    </button>
                  </li>
                </ul>
                <div className="rounded-xl overflow-hidden bg-white lg:h-[385px]">
                  <img
                    className="block size-full object-cover"
                    src=".//src/assets/img_product.webp"
                    alt
                  />
                </div>
                <div className="flex justify-center items-center gap-1 mt-5">
                  <img
                    className="size-13 inline-block"
                    src=".//src/assets/ico_star_active.png"
                    alt
                  />
                  <img
                    className="size-13 inline-block"
                    src=".//src/assets/ico_star_gray.png"
                    alt
                  />
                  <img
                    className="size-13 inline-block"
                    src=".//src/assets/ico_star_gray.png"
                    alt
                  />
                  <img
                    className="size-13 inline-block"
                    src=".//src/assets/ico_star_gray.png"
                    alt
                  />
                  <img
                    className="size-13 inline-block"
                    src=".//src/assets/ico_star_gray.png"
                    alt
                  />
                </div>
                <h3 className="text-15 mt-2">Egg Dining Table</h3>
              </a>
              <div className="mt-2 relative h-5 overflow-hidden">
                <a href="product-detail.html" className="bg-red"></a>
                <div className="absolute left-1/2 -translate-x-1/2 group-hover:bottom-0 -bottom-5 transition-all duration-300">
                  <a href="product-detail.html" className="bg-red">
                    <div className="flex items-center justify-center font-bold text-15 text-center">
                      <span className>$70.00</span>
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
                        src=".//src/assets/ico_heart.png"
                        className="image size-4 rouded-full"
                        alt
                      />
                    </button>
                  </li>
                  <li className="opacity-0 translate-y-4 duration-200 group-hover:opacity-100 group-hover:translate-y-0 transition-all delay-100">
                    <button
                      type="button"
                      className="shadow-lg p-3 rounded-full bg-white block hover:bg-slate-200 transition-all"
                    >
                      <img
                        src=".//src/assets/ico_reload.png"
                        className="image size-4 rouded-full"
                        alt
                      />
                    </button>
                  </li>
                  <li className="opacity-0 translate-y-4 duration-200 group-hover:opacity-100 group-hover:translate-y-0 transition-all delay-200">
                    <button
                      type="button"
                      className="shadow-lg p-3 rounded-full bg-white block hover:bg-slate-200 transition-all"
                    >
                      <img
                        src=".//src/assets/ico_search.png"
                        className="image size-4 rouded-full"
                        alt
                      />
                    </button>
                  </li>
                </ul>
                <div className="rounded-xl overflow-hidden bg-white lg:h-[385px]">
                  <img
                    className="block size-full object-cover"
                    src=".//src/assets/img_product2.webp"
                    alt
                  />
                </div>
                <div className="flex justify-center items-center gap-1 mt-5">
                  <img
                    className="size-13 inline-block"
                    src=".//src/assets/ico_star_active.png"
                    alt
                  />
                  <img
                    className="size-13 inline-block"
                    src=".//src/assets/ico_star_gray.png"
                    alt
                  />
                  <img
                    className="size-13 inline-block"
                    src=".//src/assets/ico_star_gray.png"
                    alt
                  />
                  <img
                    className="size-13 inline-block"
                    src=".//src/assets/ico_star_gray.png"
                    alt
                  />
                  <img
                    className="size-13 inline-block"
                    src=".//src/assets/ico_star_gray.png"
                    alt
                  />
                </div>
                <h3 className="text-15 mt-2">Century Starburst Clock</h3>
              </a>
              <div className="mt-2 relative h-5 overflow-hidden">
                <a href="product-detail.html"></a>
                <div className="absolute left-1/2 -translate-x-1/2 group-hover:bottom-0 -bottom-5 transition-all duration-300">
                  <a href="product-detail.html">
                    <div className="flex items-center justify-center font-bold text-15 text-center">
                      <span className>$55.00</span>
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
                    src=".//src/assets/img_product3.webp"
                    alt
                  />
                </div>
                <ul className="absolute bottom-28 left-4 z-10 flex flex-col gap-3">
                  <li className="opacity-0 translate-y-4 duration-200 group-hover:opacity-100 group-hover:translate-y-0 transition-all">
                    <button
                      type="button"
                      className="shadow-lg p-3 rounded-full bg-white block hover:bg-slate-200 transition-all"
                    >
                      <img
                        src=".//src/assets/ico_heart.png"
                        className="image size-4 rouded-full"
                        alt
                      />
                    </button>
                  </li>
                  <li className="opacity-0 translate-y-4 duration-200 group-hover:opacity-100 group-hover:translate-y-0 transition-all delay-100">
                    <button
                      type="button"
                      className="shadow-lg p-3 rounded-full bg-white block hover:bg-slate-200 transition-all"
                    >
                      <img
                        src=".//src/assets/ico_reload.png"
                        className="image size-4 rouded-full"
                        alt
                      />
                    </button>
                  </li>
                  <li className="opacity-0 translate-y-4 duration-200 group-hover:opacity-100 group-hover:translate-y-0 transition-all delay-200">
                    <button
                      type="button"
                      className="shadow-lg p-3 rounded-full bg-white block hover:bg-slate-200 transition-all"
                    >
                      <img
                        src=".//src/assets/ico_search.png"
                        className="image size-4 rouded-full"
                        alt
                      />
                    </button>
                  </li>
                </ul>
                <div className="flex justify-center items-center gap-1 mt-5">
                  <img
                    className="size-13 inline-block"
                    src=".//src/assets/ico_star_active.png"
                    alt
                  />
                  <img
                    className="size-13 inline-block"
                    src=".//src/assets/ico_star_gray.png"
                    alt
                  />
                  <img
                    className="size-13 inline-block"
                    src=".//src/assets/ico_star_gray.png"
                    alt
                  />
                  <img
                    className="size-13 inline-block"
                    src=".//src/assets/ico_star_gray.png"
                    alt
                  />
                  <img
                    className="size-13 inline-block"
                    src=".//src/assets/ico_star_gray.png"
                    alt
                  />
                </div>
                <h3 className="text-15 mt-2">Bouquet Flower Vase</h3>
              </a>
              <div className="mt-2 relative h-5 overflow-hidden">
                <a href="product-detail.html"></a>
                <div className="absolute left-1/2 -translate-x-1/2 group-hover:bottom-0 -bottom-5 transition-all duration-300">
                  <a href="product-detail.html">
                    <div className="flex items-center justify-center font-bold text-15 text-center">
                      <span className>$59.00</span> -
                      <span className>$60.00</span>
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
                        src=".//src/assets/ico_heart.png"
                        className="image size-4 rouded-full"
                        alt
                      />
                    </button>
                  </li>
                  <li className="opacity-0 translate-y-4 duration-200 group-hover:opacity-100 group-hover:translate-y-0 transition-all delay-100">
                    <button
                      type="button"
                      className="shadow-lg p-3 rounded-full bg-white block hover:bg-slate-200 transition-all"
                    >
                      <img
                        src=".//src/assets/ico_reload.png"
                        className="image size-4 rouded-full"
                        alt
                      />
                    </button>
                  </li>
                  <li className="opacity-0 translate-y-4 duration-200 group-hover:opacity-100 group-hover:translate-y-0 transition-all delay-200">
                    <button
                      type="button"
                      className="shadow-lg p-3 rounded-full bg-white block hover:bg-slate-200 transition-all"
                    >
                      <img
                        src=".//src/assets/ico_search.png"
                        className="image size-4 rouded-full"
                        alt
                      />
                    </button>
                  </li>
                </ul>
                <div className="rounded-xl overflow-hidden bg-white lg:h-[385px]">
                  <img
                    className="block size-full object-cover"
                    src=".//src/assets/img_product4.webp"
                    alt
                  />
                </div>
                <div className="flex justify-center items-center gap-1 mt-5">
                  <img
                    className="size-13 inline-block"
                    src=".//src/assets/ico_star_active.png"
                    alt
                  />
                  <img
                    className="size-13 inline-block"
                    src=".//src/assets/ico_star_gray.png"
                    alt
                  />
                  <img
                    className="size-13 inline-block"
                    src=".//src/assets/ico_star_gray.png"
                    alt
                  />
                  <img
                    className="size-13 inline-block"
                    src=".//src/assets/ico_star_gray.png"
                    alt
                  />
                  <img
                    className="size-13 inline-block"
                    src=".//src/assets/ico_star_gray.png"
                    alt
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
          </ul>
        </div>
      </section>
      <section className="mt-9 lg:mt-24">
        <div className="container">
          <h2 className="text-3xl font-bold text-center">Our Categories</h2>
          <ul className="md:grid grid-cols-4 gap-10 mt-11">
            <li className="mt-6 md:mt-0">
              <a href="#none">
                <div className="rounded-lg overflow-hidden">
                  <img className="image" src=".//src/assets/img_category.webp" alt />
                </div>
                <h3 className="mt-4 font-semibold">Bathroom</h3>
              </a>
            </li>
            <li className="mt-6 md:mt-0">
              <a href="#none">
                <div className="rounded-lg overflow-hidden">
                  <img
                    className="image"
                    src=".//src/assets/img_category2.webp"
                    alt
                  />
                </div>
                <h3 className="mt-4 font-semibold">Chair</h3>
              </a>
            </li>
            <li className="mt-6 md:mt-0">
              <a href="#none">
                <div className="rounded-lg overflow-hidden">
                  <img
                    className="image"
                    src=".//src/assets/img_category3.webp"
                    alt
                  />
                </div>
                <h3 className="mt-4 font-semibold">Decor</h3>
              </a>
            </li>
            <li className="mt-6 md:mt-0">
              <a href="#none">
                <div className="rounded-lg overflow-hidden">
                  <img
                    className="image"
                    src=".//src/assets/img_category4.webp"
                    alt
                  />
                </div>
                <h3 className="mt-4 font-semibold">Lamp</h3>
              </a>
            </li>
          </ul>
        </div>
      </section>
      <section className="pt-20 pb-20 mt-20 mb-9 lg:mb-20 bg-gray">
        <div className="container">
          <div className="lg:flex items-center justify-between">
            <div>
              <p className="text-[14px] uppercase">EXPERIENCE THE BEST</p>
              <h2 className="text-3xl font-semibold py-5 lg:py-10 leading-[1.4]">
                Tailored Comfort: <br />
                Customized Interior <br />
                Styling
              </h2>
              <a
                href="#none"
                className="h-9 border border-black px-7 inline-flex items-center font-semibold text-black rounded-full text-[15px] hover:bg-black hover:text-white transition-all duration-300"
              >
                View All
              </a>
            </div>
            <div className="rounded-2xl overflow-hidden mt-6 lg:mt-0">
              <img className="image" src="/src/assets/img_experience.webp" alt />
            </div>
          </div>
        </div>
      </section>
      <section className="pt-16 pb-8 bg-gray">
        <div className="container">
          <div className="lg:flex justify-between items-end">
            <div>
              <h2 className="text-3xl font-bold">New Arrivals</h2>
              <p className="mt-2 text-lightGray">
                Experience the best products at our store!
              </p>
            </div>
            <a
              href="#none"
              className="mt-6 lg:mt-0 h-9 border border-black px-7 inline-flex items-center font-semibold text-black rounded-full text-[15px] hover:bg-black hover:text-white transition-all duration-300"
            >
              View All
            </a>
          </div>
          <ul className="mt-8 lg:grid grid-cols-4 gap-7">
            <li className="mt-6 md:mt-0 text-center group relative">
              <a href="product-detail.html">
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
                        src=".//src/assets/ico_heart.png"
                        className="image size-4 rouded-full"
                        alt
                      />
                    </button>
                  </li>
                  <li className="opacity-0 translate-y-4 duration-200 group-hover:opacity-100 group-hover:translate-y-0 transition-all delay-100">
                    <button
                      type="button"
                      className="shadow-lg p-3 rounded-full bg-white block hover:bg-slate-200 transition-all"
                    >
                      <img
                        src=".//src/assets/ico_reload.png"
                        className="image size-4 rouded-full"
                        alt
                      />
                    </button>
                  </li>
                  <li className="opacity-0 translate-y-4 duration-200 group-hover:opacity-100 group-hover:translate-y-0 transition-all delay-200">
                    <button
                      type="button"
                      className="shadow-lg p-3 rounded-full bg-white block hover:bg-slate-200 transition-all"
                    >
                      <img
                        src=".//src/assets/ico_search.png"
                        className="image size-4 rouded-full"
                        alt
                      />
                    </button>
                  </li>
                </ul>
                <div className="rounded-xl overflow-hidden bg-white lg:h-[385px]">
                  <img
                    className="block size-full object-cover"
                    src=".//src/assets/img_product.webp"
                    alt
                  />
                </div>
                <div className="flex justify-center items-center gap-1 mt-5">
                  <img
                    className="size-13 inline-block"
                    src=".//src/assets/ico_star_active.png"
                    alt
                  />
                  <img
                    className="size-13 inline-block"
                    src=".//src/assets/ico_star_gray.png"
                    alt
                  />
                  <img
                    className="size-13 inline-block"
                    src=".//src/assets/ico_star_gray.png"
                    alt
                  />
                  <img
                    className="size-13 inline-block"
                    src=".//src/assets/ico_star_gray.png"
                    alt
                  />
                  <img
                    className="size-13 inline-block"
                    src=".//src/assets/ico_star_gray.png"
                    alt
                  />
                </div>
                <h3 className="text-15 mt-2">Egg Dining Table</h3>
              </a>
              <div className="mt-2 relative h-5 overflow-hidden">
                <a href="product-detail.html"></a>
                <div className="absolute left-1/2 -translate-x-1/2 group-hover:bottom-0 -bottom-5 transition-all duration-300">
                  <a href="product-detail.html">
                    <div className="flex items-center justify-center font-bold text-15 text-center">
                      <span className>$70.00</span>
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
                        src=".//src/assets/ico_heart.png"
                        className="image size-4 rouded-full"
                        alt
                      />
                    </button>
                  </li>
                  <li className="opacity-0 translate-y-4 duration-200 group-hover:opacity-100 group-hover:translate-y-0 transition-all delay-100">
                    <button
                      type="button"
                      className="shadow-lg p-3 rounded-full bg-white block hover:bg-slate-200 transition-all"
                    >
                      <img
                        src=".//src/assets/ico_reload.png"
                        className="image size-4 rouded-full"
                        alt
                      />
                    </button>
                  </li>
                  <li className="opacity-0 translate-y-4 duration-200 group-hover:opacity-100 group-hover:translate-y-0 transition-all delay-200">
                    <button
                      type="button"
                      className="shadow-lg p-3 rounded-full bg-white block hover:bg-slate-200 transition-all"
                    >
                      <img
                        src=".//src/assets/ico_search.png"
                        className="image size-4 rouded-full"
                        alt
                      />
                    </button>
                  </li>
                </ul>
                <div className="rounded-xl overflow-hidden bg-white lg:h-[385px]">
                  <img
                    className="block size-full object-cover"
                    src=".//src/assets/img_product2.webp"
                    alt
                  />
                </div>
                <div className="flex justify-center items-center gap-1 mt-5">
                  <img
                    className="size-13 inline-block"
                    src=".//src/assets/ico_star_active.png"
                    alt
                  />
                  <img
                    className="size-13 inline-block"
                    src=".//src/assets/ico_star_gray.png"
                    alt
                  />
                  <img
                    className="size-13 inline-block"
                    src=".//src/assets/ico_star_gray.png"
                    alt
                  />
                  <img
                    className="size-13 inline-block"
                    src=".//src/assets/ico_star_gray.png"
                    alt
                  />
                  <img
                    className="size-13 inline-block"
                    src=".//src/assets/ico_star_gray.png"
                    alt
                  />
                </div>
                <h3 className="text-15 mt-2">Century Starburst Clock</h3>
              </a>
              <div className="mt-2 relative h-5 overflow-hidden">
                <a href="product-detail.html"></a>
                <div className="absolute left-1/2 -translate-x-1/2 group-hover:bottom-0 -bottom-5 transition-all duration-300">
                  <a href="product-detail.html">
                    <div className="flex items-center justify-center font-bold text-15 text-center">
                      <span className>$55.00</span>
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
                    src=".//src/assets/img_product3.webp"
                    alt
                  />
                </div>
                <ul className="absolute bottom-28 left-4 z-10 flex flex-col gap-3">
                  <li className="opacity-0 translate-y-4 duration-200 group-hover:opacity-100 group-hover:translate-y-0 transition-all">
                    <button
                      type="button"
                      className="shadow-lg p-3 rounded-full bg-white block hover:bg-slate-200 transition-all"
                    >
                      <img
                        src=".//src/assets/ico_heart.png"
                        className="image size-4 rouded-full"
                        alt
                      />
                    </button>
                  </li>
                  <li className="opacity-0 translate-y-4 duration-200 group-hover:opacity-100 group-hover:translate-y-0 transition-all delay-100">
                    <button
                      type="button"
                      className="shadow-lg p-3 rounded-full bg-white block hover:bg-slate-200 transition-all"
                    >
                      <img
                        src=".//src/assets/ico_reload.png"
                        className="image size-4 rouded-full"
                        alt
                      />
                    </button>
                  </li>
                  <li className="opacity-0 translate-y-4 duration-200 group-hover:opacity-100 group-hover:translate-y-0 transition-all delay-200">
                    <button
                      type="button"
                      className="shadow-lg p-3 rounded-full bg-white block hover:bg-slate-200 transition-all"
                    >
                      <img
                        src=".//src/assets/ico_search.png"
                        className="image size-4 rouded-full"
                        alt
                      />
                    </button>
                  </li>
                </ul>
                <div className="flex justify-center items-center gap-1 mt-5">
                  <img
                    className="size-13 inline-block"
                    src=".//src/assets/ico_star_active.png"
                    alt
                  />
                  <img
                    className="size-13 inline-block"
                    src=".//src/assets/ico_star_gray.png"
                    alt
                  />
                  <img
                    className="size-13 inline-block"
                    src=".//src/assets/ico_star_gray.png"
                    alt
                  />
                  <img
                    className="size-13 inline-block"
                    src=".//src/assets/ico_star_gray.png"
                    alt
                  />
                  <img
                    className="size-13 inline-block"
                    src=".//src/assets/ico_star_gray.png"
                    alt
                  />
                </div>
                <h3 className="text-15 mt-2">Bouquet Flower Vase</h3>
              </a>
              <div className="mt-2 relative h-5 overflow-hidden">
                <a href="product-detail.html"></a>
                <div className="absolute left-1/2 -translate-x-1/2 group-hover:bottom-0 -bottom-5 transition-all duration-300">
                  <a href="product-detail.html">
                    <div className="flex items-center justify-center font-bold text-15 text-center">
                      <span className>$59.00</span> -
                      <span className>$60.00</span>
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
                        src=".//src/assets/ico_heart.png"
                        className="image size-4 rouded-full"
                        alt
                      />
                    </button>
                  </li>
                  <li className="opacity-0 translate-y-4 duration-200 group-hover:opacity-100 group-hover:translate-y-0 transition-all delay-100">
                    <button
                      type="button"
                      className="shadow-lg p-3 rounded-full bg-white block hover:bg-slate-200 transition-all"
                    >
                      <img
                        src=".//src/assets/ico_reload.png"
                        className="image size-4 rouded-full"
                        alt
                      />
                    </button>
                  </li>
                  <li className="opacity-0 translate-y-4 duration-200 group-hover:opacity-100 group-hover:translate-y-0 transition-all delay-200">
                    <button
                      type="button"
                      className="shadow-lg p-3 rounded-full bg-white block hover:bg-slate-200 transition-all"
                    >
                      <img
                        src=".//src/assets/ico_search.png"
                        className="image size-4 rouded-full"
                        alt
                      />
                    </button>
                  </li>
                </ul>
                <div className="rounded-xl overflow-hidden bg-white lg:h-[385px]">
                  <img
                    className="block size-full object-cover"
                    src=".//src/assets/img_product4.webp"
                    alt
                  />
                </div>
                <div className="flex justify-center items-center gap-1 mt-5">
                  <img
                    className="size-13 inline-block"
                    src=".//src/assets/ico_star_active.png"
                    alt
                  />
                  <img
                    className="size-13 inline-block"
                    src=".//src/assets/ico_star_gray.png"
                    alt
                  />
                  <img
                    className="size-13 inline-block"
                    src=".//src/assets/ico_star_gray.png"
                    alt
                  />
                  <img
                    className="size-13 inline-block"
                    src=".//src/assets/ico_star_gray.png"
                    alt
                  />
                  <img
                    className="size-13 inline-block"
                    src=".//src/assets/ico_star_gray.png"
                    alt
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
          </ul>
        </div>
      </section>
    </main>
  )
}
