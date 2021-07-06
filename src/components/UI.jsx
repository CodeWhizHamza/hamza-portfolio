import React from 'react'
import Navbar from './Navbar/Navbar'
import Home from './Home/Home'
import Work from './Work/Work'
import Services from './Services/Services'
import Socials from './Socials/Socials'
import Contact from './Contact/Contact'
import Footer from './Footer/Footer'

// Styles
import '../reset.css'

export default function UI() {
  return (
    <>
      <Navbar />
      <Home id="home" />
      <Work />
      <Services />
      <Socials />
      <Contact />
      <Footer />
    </>
  )
}
