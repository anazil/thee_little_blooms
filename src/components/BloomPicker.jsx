import { useEffect, useRef } from 'react'
import './BloomPicker.css'
import BloomBouquet from './BloomBouquet.jsx'

const bloomOptions = [
  {
    id: 'little-blooms',
    name: 'Little Blooms',
    desc: 'A dainty, charming handful for a quiet little moment.',
    size: 'Small',
    flowers: 2,
    price: 449,
  },
  {
    id: 'sweet-blooms',
    name: 'Sweet Blooms',
    desc: 'Soft petals and pastel tones for someone sweet.',
    size: 'Medium',
    flowers: 4,
    price: 749,
  },
  {
    id: 'full-blooms',
    name: 'Full Blooms',
    desc: 'An abundant, generous arrangement to fill the room.',
    size: 'Large',
    flowers: 6,
    price: 999,
  },
  {
    id: 'custom-blooms',
    name: 'Custom Blooms',
    desc: 'Tell us your story — we will design it just for you.',
    size: 'Yours',
    flowers: 0,
    price: null,
  },
]

const BOUQUET_INSIDE = '#FFD6E0'
const BOUQUET_OUTLINE = '#D94F78'

export default function BloomPicker({ onClose, onSelectProduct }) {
  const dialogRef = useRef(null)

  useEffect(() => {
    dialogRef.current?.focus()

    const onKey = (event) => {
      if (event.key === 'Escape') onClose()
    }

    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [onClose])

  const handleSelect = (id) => {
    if (id === 'custom-blooms') {
      const message = encodeURIComponent(
        "Hello! I would like to order a Custom Bloom.\n\nI'd like to design my own arrangement — let me tell you my story!",
      )
      window.open(`https://wa.me/916309449938?text=${message}`, '_blank')
    } else {
      onSelectProduct(id)
    }
  }

  return (
    <div
      className="picker-backdrop"
      role="presentation"
      onClick={onClose}
    >
      <div
        className="picker-dialog"
        role="dialog"
        aria-modal="true"
        aria-labelledby="picker-title"
        tabIndex={-1}
        ref={dialogRef}
        onClick={(event) => event.stopPropagation()}
      >
        <button className="picker-close" onClick={onClose} aria-label="Close">
          ×
        </button>

        <header className="picker-head">
          <h2 id="picker-title">Choose your Blooms</h2>
          <p className="picker-sub">Pick a bloom, make it yours.</p>
        </header>

        <div className="picker-grid">
          {bloomOptions.map((option, index) => (
            <button
              key={option.id}
              type="button"
              className="bloom-option"
              style={{ '--delay': `${index * 70}ms` }}
              onClick={() => handleSelect(option.id)}
            >
              <span className="bloom-option-top">
                <span className="bloom-option-size">{option.size}</span>
                {!option.price && (
                  <span className="bloom-option-price">made for you</span>
                )}
              </span>

              <span className="bloom-option-bouquet" aria-hidden="true">
                {option.flowers > 0 ? (
                  <BloomBouquet
                    className="bloom-option-bouquet-svg"
                    flowers={option.flowers}
                    inside={BOUQUET_INSIDE}
                    outline={BOUQUET_OUTLINE}
                  />
                ) : (
                  <span className="bloom-option-heart">♥</span>
                )}
              </span>

              <span className="bloom-option-name">{option.name}</span>
              <span className="bloom-option-desc">{option.desc}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}
