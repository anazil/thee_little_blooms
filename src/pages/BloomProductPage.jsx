import './BloomProductPage.css'
import { useState } from 'react'
import BloomBouquet from '../components/BloomBouquet.jsx'

const bloomColors = [
  { value: '#F8B8C8', name: 'Soft Pink' },
  { value: '#F48FB1', name: 'Pink' },
  { value: '#FF4D88', name: 'Bright Pink' },
  { value: '#D3B5E0', name: 'Light Purple' },
  { value: '#4B2A6E', name: 'Dark Purple' },
  { value: '#9C27B0', name: 'Purple' },
  { value: '#A8A466', name: 'Light Army Green' },
  { value: '#A3BE8A', name: 'Light Moss Green' },
  { value: '#5C8A46', name: 'Stem Green' },
  { value: '#FFD43B', name: 'Yellow' },
  { value: '#E5323C', name: 'Red' },
  { value: '#7A1E2E', name: 'Vine Red' },
  { value: '#1A1A1A', name: 'Black' },
  { value: '#8A5A32', name: 'Brown' },
  { value: '#6F4E37', name: 'Coffee Brown' },
  { value: '#A8CFE5', name: 'Light Blue' },
  { value: '#0047AB', name: 'Cobalt Blue' },
  { value: '#14285E', name: 'Navy Blue' },
]

const bloomThemes = [
  { emoji: '🌻', name: 'Sunflower' },
  { emoji: '🌷', name: 'Lily' },
  { emoji: '🪷', name: 'Lotus' },
  { emoji: '🌺', name: 'Hibiscus' },
  { emoji: '🌸', name: 'Cherry Blossom' },
  { emoji: '💜', name: 'Lavender' },
  { emoji: '🌹', name: 'Rose' },
  { emoji: '🌷', name: 'Tulip' },
]

const DEFAULT_INSIDE = '#FFD6E0'
const DEFAULT_OUTLINE = '#D94F78'

function WhatsAppIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M.057 24l1.687-6.163a11.867 11.867 0 01-1.587-5.946C.157 5.335 5.495 0 12.05 0a11.817 11.817 0 018.413 3.488 11.824 11.824 0 013.48 8.414c-.003 6.557-5.338 11.892-11.893 11.892a11.9 11.9 0 01-5.688-1.448L.057 24zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884a9.86 9.86 0 001.51 5.26l-.999 3.648 3.978-1.043zM17.5 14.382c-.301-.15-1.759-.868-2.029-.967-.27-.099-.467-.15-.663.15-.197.3-.767.967-.94 1.165-.173.198-.346.223-.646.075-.301-.15-1.271-.469-2.419-1.492-.895-.795-1.5-1.78-1.678-2.082-.173-.301-.018-.463.13-.613.134-.134.298-.349.448-.523.15-.174.198-.298.298-.497.099-.198.05-.372-.025-.522-.075-.15-.663-1.619-.922-2.206-.24-.566-.48-.489-.662-.498-.177-.008-.368-.01-.559-.01-.199 0-.514.074-.782.372-.268.298-1.022.998-1.022 2.434 0 1.436 1.045 2.823 1.191 3.018.147.198 2.06 3.145 4.988 4.409.697.301 1.241.481 1.665.616.698.223 1.334.192 1.836.116.561-.084 1.759-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.073-.124-.272-.198-.573-.347z" />
    </svg>
  )
}

export default function BloomProductPage({ product, onBack }) {
  const [theme, setTheme] = useState(null)
  const [inside, setInside] = useState(null)
  const [outline, setOutline] = useState(null)


  const themeName = bloomThemes.find((t) => t.name === theme)?.name
  const themeEmoji = bloomThemes.find((t) => t.name === theme)?.emoji
  const insideName = bloomColors.find((c) => c.value === inside)?.name
  const outlineName = bloomColors.find((c) => c.value === outline)?.name

  const [titleWord, ...titleRest] = product.name.split(' ')

  const handleContinue = () => {
    const message = encodeURIComponent(
      `Hello! I would like to order:\n\nProduct: ${product.name}\nFlowers: ${product.flowers}-flower\nBloom: ${themeName || 'Not selected'}\nInside Colour: ${insideName || 'Not selected'}\nOutline Colour: ${outlineName || 'Not selected'}`
    )
    window.open(`https://wa.me/916309449938?text=${message}`, '_blank')
  }

  return (
    <main className="little-blooms-page">
      <header className="little-blooms-header">
        <button
          className="little-back-button"
          onClick={onBack || (() => window.history.back())}
          aria-label="Go back"
        >
          ←
        </button>

        <div className="little-title">
          <span>{titleWord.toLowerCase()}</span>
          <strong>{titleRest.join(' ')}</strong>
        </div>
      </header>

      <section className="little-product">
        {/* Preview */}
        <div className="little-preview">
          <span className="little-preview-badge">{product.flowers}-flower arrangement</span>
          <BloomBouquet
            className="bloom-preview-svg"
            flowers={product.flowers}
            inside={inside || DEFAULT_INSIDE}
            outline={outline || DEFAULT_OUTLINE}
          />
        </div>

        {/* Product + options */}
        <div className="little-config">
          <div className="little-product-info">
            <span className="little-kicker">{product.tagline}</span>
            <h1>{product.name}</h1>
            <p className="little-description">{product.desc}</p>


          </div>

          <section className="little-themes">
            <div className="little-section-head">
              <h2>
                <span className="step-num">01</span>
                Pick your Bloom
              </h2>
              <span className="little-section-hint">
                {themeEmoji ? `${themeEmoji} ${themeName}` : 'pick one'}
              </span>
            </div>
            <p className="little-section-sub">First, choose the flower theme you'd like:</p>

            <div className="theme-options">
              {bloomThemes.map((bloom) => (
                <button
                  key={bloom.name}
                  className={`theme-option ${theme === bloom.name ? 'is-selected' : ''}`}
                  onClick={() => setTheme(bloom.name)}
                  aria-label={`Bloom theme: ${bloom.name}`}
                  aria-pressed={theme === bloom.name}
                >
                  <span className="theme-emoji">{bloom.emoji}</span>
                  <span className="theme-name">{bloom.name}</span>
                </button>
              ))}
            </div>
          </section>

          <section className="little-colours">
            <h2>
              <span className="step-num">02</span>
              Choose your colours
            </h2>

            <div className="colour-group">
              <div className="colour-group-head">
                <span className="colour-group-label">inside</span>
                <span className="colour-group-hint">{insideName || 'pick one'}</span>
              </div>

              <div className="colour-options">
                {bloomColors.map(
                  (color) => (
                    <button
                      key={color.value}
                      className={`colour-swatch ${inside === color.value ? 'is-selected' : ''}`}
                      style={{ '--colour': color.value }}
                      onClick={() => setInside(color.value)}
                      aria-label={`Inside colour: ${color.name}`}
                      aria-pressed={inside === color.value}
                    >
                      <span className="colour-circle" />
                      <span className="colour-name">{color.name}</span>
                    </button>
                  ),
                )}
              </div>
            </div>

            <div className="colour-group">
              <div className="colour-group-head">
                <span className="colour-group-label">outline</span>
                <span className="colour-group-hint">{outlineName || 'pick one'}</span>
              </div>

              <div className="colour-options">
                {bloomColors.map(
                  (color) => (
                    <button
                      key={color.value}
                      className={`colour-swatch ${outline === color.value ? 'is-selected' : ''}`}
                      style={{ '--colour': color.value }}
                      onClick={() => setOutline(color.value)}
                      aria-label={`Outline colour: ${color.name}`}
                      aria-pressed={outline === color.value}
                    >
                      <span className="colour-circle" />
                      <span className="colour-name">{color.name}</span>
                    </button>
                  ),
                )}
              </div>
            </div>
          </section>

          {/* Order */}
          <div className="little-order">
            <div className="little-order-summary">
              <div className="little-order-head">
                <strong>Your Bloom</strong>
              </div>
              <div className="little-order-colours">
                <span className="order-chip">
                  <span className="order-chip-emoji" aria-hidden="true">
                    {themeEmoji || '🌸'}
                  </span>
                  {themeName || 'Bloom'}
                </span>
                <span className="order-chip">
                  <i style={{ '--chip': inside || '#EFD9E0' }} />
                  {insideName || 'Inside'}
                </span>
                <span className="order-chip">
                  <i style={{ '--chip': outline || '#EFD9E0' }} />
                  {outlineName || 'Outline'}
                </span>
              </div>
            </div>

            <button
              className="little-continue"
              disabled={!theme || !inside || !outline}
              onClick={handleContinue}
            >
              <WhatsAppIcon />
              Continue on WhatsApp
            </button>

            {(!theme || !inside || !outline) && (
              <p className="little-hint">
                Pick your bloom theme and an inside and outline colour to finish.
              </p>
            )}
          </div>
        </div>
      </section>
    </main>
  )
}
