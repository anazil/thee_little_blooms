import { useState, useEffect } from 'react'
import flowerSvg from '../assets/flower.svg'
import './Home.css'

const petals = [
  { className: 'petal petal-one' },
  { className: 'petal petal-two' },
  { className: 'petal petal-three' },
  { className: 'petal petal-four' },
]

const weddingDate = new Date('2027-10-23T00:00:00')

function getTimeLeft() {
  const now = new Date()
  const diff = weddingDate - now
  if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 }
  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  }
}

export default function Home({ svgKey }) {
  const src = `${flowerSvg}?v=${svgKey}`
  const [time, setTime] = useState(getTimeLeft)

  useEffect(() => {
    const id = setInterval(() => setTime(getTimeLeft()), 1000)
    return () => clearInterval(id)
  }, [])

  return (
    <>
      <main className="bloom-page" aria-label="thee little bloom Co.">
        <div className="silk silk-top" aria-hidden="true" />
        <div className="silk silk-bottom" aria-hidden="true" />

        <img
          className="bouquet bouquet-left"
          src={src}
          alt=""
          aria-hidden="true"
        />
        <img
          className="bouquet bouquet-right"
          src={src}
          alt=""
          aria-hidden="true"
        />

        {petals.map((petal) => (
          <span key={petal.className} className={petal.className} aria-hidden="true" />
        ))}

        <section className="brand-panel">
          <h1>
            Liya <span className="heart">♥</span> Liyan
          </h1>
          <p className="date-text">23 · 10 · 27</p>
        </section>
      </main>

      <section className="countdown-section">
        <p className="countdown-title">Counting Down To</p>
        <h2 className="countdown-date">23 · 10 · 27</h2>
        <div className="countdown">
          <div className="countdown-item">
            <span className="countdown-num">{time.days}</span>
            <span className="countdown-label">Days</span>
          </div>
          <span className="countdown-sep">:</span>
          <div className="countdown-item">
            <span className="countdown-num">{String(time.hours).padStart(2, '0')}</span>
            <span className="countdown-label">Hours</span>
          </div>
          <span className="countdown-sep">:</span>
          <div className="countdown-item">
            <span className="countdown-num">{String(time.minutes).padStart(2, '0')}</span>
            <span className="countdown-label">Minutes</span>
          </div>
          <span className="countdown-sep">:</span>
          <div className="countdown-item">
            <span className="countdown-num">{String(time.seconds).padStart(2, '0')}</span>
            <span className="countdown-label">Seconds</span>
          </div>
        </div>

        <div className="venue-divider" aria-hidden="true">
          <span /><span className="venue-diamond">♦</span><span />
        </div>

        <p className="section-tag">The Venue</p>
        <h3 className="venue-name">Grand Ballroom</h3>
        <p className="venue-address">123 Blossom Street, Kochi, Kerala</p>
        <p className="venue-time">Saturday, 23rd October 2027</p>
        <p className="venue-hour">Evening 6:00 PM Onwards</p>

        <div className="invite-card">
          <p className="invite-text">
            Together with their families, <strong>Liya</strong> and <strong>Liyan</strong> request the honour of your presence
            as they begin their new life together.
          </p>
          <p className="invite-foot">Your blessings mean the world to us</p>
        </div>
      </section>
    </>
  )
}
