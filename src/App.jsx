import { useState } from 'react'
import Home from './pages/Home.jsx'
import BloomStory from './pages/BloomStory.jsx'
import BloomPicker from './components/BloomPicker.jsx'
import BloomProductPage from './pages/BloomProductPage.jsx'
import Footer from './components/Footer.jsx'
import { products } from './data/products.js'

export default function App() {
  const [pickerOpen, setPickerOpen] = useState(false)
  const [activeProduct, setActiveProduct] = useState(null)

  const openProduct = (id) => {
    setPickerOpen(false)
    setActiveProduct(id)
    window.scrollTo(0, 0)
  }

  const closeProduct = () => {
    setActiveProduct(null)
    requestAnimationFrame(() => {
      document.getElementById('bloom-story')?.scrollIntoView({ behavior: 'smooth' })
    })
  }

  if (activeProduct) {
    return <BloomProductPage product={products[activeProduct]} onBack={closeProduct} />
  }

  return (
    <>
      <Home />
      <BloomStory onShop={() => setPickerOpen(true)} />
      <Footer />
      {pickerOpen && <BloomPicker onClose={() => setPickerOpen(false)} onSelectProduct={openProduct} />}
    </>
  )
}
