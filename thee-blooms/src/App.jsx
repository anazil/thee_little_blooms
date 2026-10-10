import { useState, useEffect } from 'react'
import Preloader from './Preloader.jsx'
import Envelope from './Envelope.jsx'
import Home from './pages/Home.jsx'

export default function App() {
  const [phase, setPhase] = useState('preloader')
  const [homeKey, setHomeKey] = useState(null)

  useEffect(() => {
    if (phase === 'preloader') {
      const timer = setTimeout(() => setPhase('envelope'), 4000)
      return () => clearTimeout(timer)
    }
  }, [phase])

  if (phase === 'preloader') {
    return <Preloader />
  }

  if (phase === 'envelope') {
    return <Envelope onComplete={() => {
      setHomeKey(Date.now())
      setPhase('home')
    }} />
  }

  return <Home key={homeKey} svgKey={homeKey} />
}
