import React from 'react'
import Navbar from './components/Navbar'
import Header from './components/Header'
import Feature from './components/Feature'
import About from './components/About'
import Offer from './components/Offer'
import Contact from './components/Contact'
function App () {
  return (
    <div className='App'>
      <Navbar />
      <Header />
      <Feature />
      <Offer />
      <About />
      <Contact />
    </div>
  )
}

export default App
