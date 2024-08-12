import React from 'react'
import { QuoteSection } from './components/QuoteSection'
import Header from './components/Header'
import Footer from './components/Footer'
import HeroSection from './components/HeroSection'

const App: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <HeroSection />
        <QuoteSection />
      </main>
      <Footer />
    </div>
  )
}

export default App
