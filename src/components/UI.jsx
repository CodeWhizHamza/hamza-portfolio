import React from 'react'
import Navbar from './Navbar/Navbar'
import Home from './Home/Home'
import Work from './Work/Work'

// Styles
import '../reset.css'

export default function UI() {
  return (
    <>
      <Navbar />
      <Home id="home" />
      <Work />
    </>
  )
}
