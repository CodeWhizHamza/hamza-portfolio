import React from 'react'
import './Home.css'
import HomeContent from './HomeContent'
import HomeImage from './HomeImage'

export default function Home() {
  return (
    <section id="home" className="home container">
      <HomeContent />
      <HomeImage />
    </section>
  )
}
