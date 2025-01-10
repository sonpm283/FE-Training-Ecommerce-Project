import { StarRating } from "@components/index";

export default function Product({ product }) {
  
  return (
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
              <img src="/src/assets/ico_heart.png" className="image size-4 rouded-full" />
            </button>
          </li>
          <li className="opacity-0 translate-y-4 duration-200 group-hover:opacity-100 group-hover:translate-y-0 transition-all delay-100">
            <button
              type="button"
              className="shadow-lg p-3 rounded-full bg-white block hover:bg-slate-200 transition-all"
            >
              <img src="/src/assets/ico_reload.png" className="image size-4 rouded-full" />
            </button>
          </li>
          <li className="opacity-0 translate-y-4 duration-200 group-hover:opacity-100 group-hover:translate-y-0 transition-all delay-200">
            <button
              type="button"
              className="shadow-lg p-3 rounded-full bg-white block hover:bg-slate-200 transition-all"
            >
              <img src="/src/assets/ico_search.png" className="image size-4 rouded-full" />
            </button>
          </li>
        </ul>
        <div className="rounded-xl overflow-hidden bg-white lg:h-[385px]">
          <img className="block size-full object-cover" src={product?.imageUrl} />
        </div>

        <div className="mt-5">
          <StarRating rating={product?.rating || 0} />
        </div>

        <h3 className="text-15 mt-2">{product?.name}</h3>
      </a>
      <div className="mt-2 relative h-5 overflow-hidden">
        <a href="product-detail.html" className="bg-red"></a>
        <div className="absolute left-1/2 -translate-x-1/2 group-hover:bottom-0 -bottom-5 transition-all duration-300">
          <a href="product-detail.html" className="bg-red">
            <div className="flex items-center justify-center gap-1 font-bold text-15 text-center">
              <span className="line-through text-lightGray">{product?.price?.originalPrice}$</span>-
              <span className="text-red-600">{product?.price?.discountedPrice}$</span>
            </div>
          </a>
          <a
            href="#none"
            className="uppercase text-xs font-semibold tracking-widest relative before:absolute before:bottom-0 before:w-0 before:h-[1px] before:bg-black before:left-0 hover:before:w-full before:transition-all before:duration-500"
          >
            Add to cart
          </a>
        </div>
      </div>
    </li>
  )
}
