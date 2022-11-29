import React from 'react'
import Footer from './components/Footer'
import Header from './components/Header'
import Hero from './components/Hero'
import Indexbar from './components/Indexbar'
import Socialbar from './components/Socialbar'
import Main from './components/Main'
import { IndexContextProvider } from './context/IndexContext'

const Mntn = () => {
  return (
    <IndexContextProvider>
      <div className="gral__container">
        <Header />
        <Hero /> 
        <Socialbar />
        <Indexbar />  
        <Main />
        <Footer />
      </div>
    </IndexContextProvider>
  )
}

export default Mntn
