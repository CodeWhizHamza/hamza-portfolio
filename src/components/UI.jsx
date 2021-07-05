import React from 'react'
import Navbar from './Navbar/Navbar'
import Home from './Home/Home'

// Styles
import '../reset.css'

export default function UI() {
  return (
    <>
      <Navbar />
      <Home id="home" />
    </>
  )
}
