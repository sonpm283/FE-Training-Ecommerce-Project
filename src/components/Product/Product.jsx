import { StarRating } from "@components/index";
import { useAddToCartMutation } from "@/apis/cartApi";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";

export default function Product({ product }) {
  const [addToCart, { isLoading }] = useAddToCartMutation();

  const handleAddToCart = async () => {
    try {
      await addToCart({ productId: product._id, quantity: 1 }).unwrap();
      toast.success("Product added to cart");
    } catch (error) {
      toast.error(error?.data?.message || "Failed to add product to cart");
    }
  };

  return (
    <li className="mt-6 md:mt-0 text-center group relative">
      <Link to={`/products/${product._id}`} className="block">
        {product.stock === 0 && (
          <span className="absolute py-1 text-xs px-2 top-3 left-3 bg-black text-white rounded-xl">
            Out of stock
          </span>
        )}
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
          <img className="block size-full object-cover" src={product?.imageUrl} alt={product?.name} />
        </div>

        <div className="mt-5">
          <StarRating rating={product?.rating || 0} />
        </div>

        <h3 className="text-15 mt-2">{product?.name}</h3>
      </Link>
      <div className="mt-2 relative h-5 overflow-hidden">
        <div className="absolute left-1/2 -translate-x-1/2 group-hover:bottom-0 -bottom-5 transition-all duration-300">
          <div className="flex items-center justify-center gap-1 font-bold text-15 text-center">
            {product?.price?.originalPrice > product?.price?.discountedPrice && (
              <span className="line-through text-lightGray">${product?.price?.originalPrice}</span>
            )}
            <span className={product?.price?.originalPrice > product?.price?.discountedPrice ? "text-red-600" : ""}>
              ${product?.price?.discountedPrice}
            </span>
          </div>
          <button
            onClick={handleAddToCart}
            disabled={isLoading || product.stock === 0}
            className={`uppercase text-xs font-semibold tracking-widest relative before:absolute before:bottom-0 before:w-0 before:h-[1px] before:bg-black before:left-0 hover:before:w-full before:transition-all before:duration-500 ${
              product.stock === 0 ? 'opacity-50 cursor-not-allowed' : ''
            }`}
          >
            {isLoading ? 'Adding...' : product.stock === 0 ? 'Out of Stock' : 'Add to cart'}
          </button>
        </div>
      </div>
    </li>
  );
}
