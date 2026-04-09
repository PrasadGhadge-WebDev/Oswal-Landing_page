import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Brand from './components/Brand'
import Category from './components/Category'
import Features from './components/Features'
import About from './components/About'
import Contact from './components/Contact'
import Spotlight from './components/Spotlight'
import Footer from './components/Footer'

function App() {
  return (
    <div id="top" className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <Spotlight />
        <Brand />
        <Category />
        <About />
        <Features />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
