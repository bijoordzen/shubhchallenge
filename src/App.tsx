import Hero from './components/Hero'
import TypographySection from './components/TypographySection'
import ColorPalette from './components/ColorPalette'
import bgTexture from './assets/bg-texture.png'

function App() {
  return (
    <main
      className="font-body text-white min-h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${bgTexture})` }}
    >
      <Hero />
      <TypographySection />
      <ColorPalette />
    </main>
  )
}

export default App
