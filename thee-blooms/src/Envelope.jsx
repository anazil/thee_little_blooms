import { useState } from 'react'
import './Envelope.css'

export default function Envelope({ onComplete }) {
  const [phase, setPhase] = useState('idle')

  const handleTap = () => {
    if (phase !== 'idle') return
    setPhase('opening')
    setTimeout(() => setPhase('names'), 1000)
    setTimeout(() => setPhase('fadeout'), 2800)
    setTimeout(() => onComplete(), 3600)
  }

  return (
    <div className={`env-screen ${phase === 'fadeout' ? 'env-fade' : ''}`} onClick={handleTap}>
      <div className="env-bg" />

      {phase === 'idle' && (
        <p className="env-hint">Tap to open</p>
      )}

      <div className={`env-wrap ${phase !== 'idle' ? 'open' : ''}`}>
        <div className="env-body">
          <div className="env-texture" />
        </div>

        <div className="env-flap" />
        <div className="env-flap-inner" />

        <div className="env-front">
          <div className="env-front-line" />
          <div className="env-front-line env-front-line-2" />
        </div>

        <div className={`env-seal ${phase !== 'idle' ? 'seal-break' : ''}`}>
          <div className="seal-ring" />
          <span className="seal-heart">♥</span>
        </div>

        {phase !== 'idle' && (
          <div className="env-letter">
            <div className="env-letter-inner">
              <span className="env-letter-name">Liya</span>
              <span className="env-letter-heart">♥</span>
              <span className="env-letter-name">Liyan</span>
            </div>
          </div>
        )}

        {phase === 'opening' && (
          <div className="env-particles" aria-hidden="true">
            {[...Array(8)].map((_, i) => (
              <span key={i} className={`particle particle-${i}`} />
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
