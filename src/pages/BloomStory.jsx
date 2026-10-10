import { useEffect, useRef, useState } from 'react'
import './BloomStory.css'

function useInView(threshold = 0.25) {
  const ref = useRef(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const node = ref.current
    if (!node) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true)
          observer.unobserve(node)
        }
      },
      { threshold, rootMargin: '0px 0px -8% 0px' },
    )

    observer.observe(node)
    return () => observer.disconnect()
  }, [threshold])

  return [ref, inView]
}

const bloomTitle = "What's a Bloom?"
const bloomQuote =
  '"A Bloom is our take on a bouquet, a handmade arrangement of flowers, crafted to last forever."'

export default function BloomStory({ onShop }) {
  const [ref, inView] = useInView()

  return (
    <section className="bloom-about" id="bloom-story" ref={ref}>
      <h2 className={inView ? 'is-in-view' : ''} aria-label={bloomTitle}>
        {bloomTitle.split('').map((char, index) => (
          <span key={index} style={{ transitionDelay: `${index * 45}ms` }}>
            {char === ' ' ? '\u00A0' : char}
          </span>
        ))}
      </h2>
      <p className={inView ? 'is-in-view' : ''} aria-label={bloomQuote}>
        {bloomQuote.split('').map((char, index) => (
          <span key={index} style={{ transitionDelay: `${500 + index * 22}ms` }}>
            {char === ' ' ? '\u00A0' : char}
          </span>
        ))}
      </p>
      <a
        className={inView ? 'shop-btn is-in-view' : 'shop-btn'}
        href="#"
        onClick={(event) => {
          event.preventDefault()
          onShop()
        }}
      >
        Shop the Blooms
      </a>
    </section>
  )
}
