export default function StarRating({ rating }) {
  const MAX_RATING = 5

  return (
    <div className="flex justify-center items-center gap-1">
      {Array.from({ length: MAX_RATING }, (_, index) => (
        <img
          key={index}
          className="size-13 inline-block"
          src={index < rating ? '/src/assets/ico_star_active.png' : '/src/assets/ico_star_gray.png'}
          alt={`Star ${index + 1}`}
        />
      ))}
    </div>
  )
}
