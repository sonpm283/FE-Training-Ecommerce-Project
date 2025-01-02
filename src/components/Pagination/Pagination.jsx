export default function Pagination() {
  return (
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
  )
}
