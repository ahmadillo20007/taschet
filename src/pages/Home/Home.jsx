import React from 'react'
import Footer from '../../components/Footer/Footer'
import Header from '../../components/Header/Header'
import Hero from '../../components/Hero/Hero'
import Hero2 from '../../components/Hero2/Hero2'
import Kontakt from '../../components/Kontakt/Kontakt'
import Servis from '../../components/Servis/Servis'

function Home() {
  return (
    <div>
        <Header/>
        <Hero/>
        <Hero2/>
        <Servis/>
        <Kontakt/>
        <Footer/>
    </div>
  )
}

export default Home