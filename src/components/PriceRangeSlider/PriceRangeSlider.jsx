import { useCallback, useEffect, useState, useRef } from 'react'

const PriceRangeSlider = ({
  min,
  max,
  trackColor = '#cecece',
  handleRangeChange,
  rangeColor = '#000',
  width = '200px',
  currencyText = '$',
}) => {
  const [minVal, setMinVal] = useState(min)
  const [maxVal, setMaxVal] = useState(max)
  const minValRef = useRef(min)
  const maxValRef = useRef(max)
  const range = useRef(null)

  // convert to percentage
  const getPercent = useCallback(
    (value) => Math.round(((value - min) / (max - min)) * 100),
    [min, max]
  )

  // set width of the range to decrease from the left side
  useEffect(() => {
    const minPercent = getPercent(minVal)
    const maxPercent = getPercent(maxValRef.current)

    if (range.current) {
      range.current.style.left = `${minPercent}%`
      range.current.style.width = `${maxPercent - minPercent}%`
    }
  }, [minVal, getPercent])

  // set the width of the range to decrease from right side
  useEffect(() => {
    const minPercent = getPercent(minValRef.current)
    const maxPercent = getPercent(maxVal)

    if (range.current) {
      range.current.style.width = `${maxPercent - minPercent}%`
    }
  }, [maxVal, getPercent])

  // Get min and max values when their state changes
  useEffect(() => {
    if (minVal != minValRef.current || maxVal != maxValRef.current) {
      handleRangeChange({ minPrice: minVal, maxPrice: maxVal })
      minValRef.current = minVal
      maxValRef.current = maxVal
    }
  }, [minVal, maxVal, handleRangeChange])

  return (
    <div className="w-full flex items-start justify-center flex-col mt-5">
      <div className="multi-slide-input-container" style={{ width }}>
        <input
          type="range"
          min={min}
          max={max}
          value={minVal}
          onChange={(event) => {
            const value = Math.min(Number(event.target.value), maxVal - 1)
            setMinVal(value)
          }}
          className="thumb thumb-left"
          style={{
            width,
            zIndex: minVal > max - 100 || minVal === maxVal ? 5 : undefined,
          }}
        />

        <input
          type="range"
          min={min}
          max={max}
          value={maxVal}
          onChange={(event) => {
            const value = Math.max(Number(event.target.value), minVal + 1)
            setMaxVal(value)
          }}
          className="thumb thumb-right"
          style={{
            width,
            zIndex: minVal > max - 100 || minVal === maxVal ? 4 : undefined,
          }}
        />

        <div className="slider">
          <div style={{ backgroundColor: trackColor }} className="track-slider w-full" />

          <div ref={range} style={{ backgroundColor: rangeColor }} className="range-slider" />
        </div>
      </div>

      <p className="text-sm font-semibold mt-5">
        Range :  {minVal}.00{currencyText} - {maxVal}.00{currencyText}
      </p>
    </div>
  )
}

export default PriceRangeSlider
