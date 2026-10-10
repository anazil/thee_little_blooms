import flowerSvg from '../assets/flower.svg'
import './Home.css'

const petals = [
  { className: 'petal petal-one' },
  { className: 'petal petal-two' },
  { className: 'petal petal-three' },
  { className: 'petal petal-four' },
]

export default function Home() {
  return (
    <main className="bloom-page" aria-label="thee little bloom Co.">
      <div className="silk silk-top" aria-hidden="true" />
      <div className="silk silk-bottom" aria-hidden="true" />

      <img
        className="bouquet bouquet-left"
        src={flowerSvg}
        alt=""
        aria-hidden="true"
      />
      <img
        className="bouquet bouquet-right"
        src={flowerSvg}
        alt=""
        aria-hidden="true"
      />

      {petals.map((petal) => (
        <span key={petal.className} className={petal.className} aria-hidden="true" />
      ))}

      <section className="brand-panel">
        <h1>
          theee.<wbr />little.<wbr />bloom.<wbr />Co.
        </h1>

        <div className="divider" aria-hidden="true">
          <span />
          <strong>♥</strong>
          <span />
        </div>

        <p>Little blooms, made to last a little longer.</p>
      </section>
    </main>
  )
}
