import React from 'react'
import Navbar from './Navbar/Navbar'

// Styles
import '../reset.css'

export default function UI() {
  return (
    <>
      <Navbar />
      <div id="home" style={{ height: '1000px' }}></div>
    </>
  )
}
