import React from 'react'
import './Home.css'
import Image from './Image'

export default function Home() {
  return (
    <section id="home" className="home container">
      <div className="home__left">
        <h1 className="home__title">Hi! I'm Hamza.</h1>
        <h3 className="home__subtitle">UI/UX Desinger &amp; Developer</h3>
        <p className="home__text">
          I will create clean, modern, attractive and clean websites &amp;
          mockups.
        </p>
        <button
          onClick={() =>
            window.open('https://www.fiverr.com/hamza_webdesign', '_blank')
          }
          className="home__btn btn-solid"
        >
          Let’s discuss your work
        </button>
      </div>
      <div className="home__right">
        <Image />
      </div>
    </section>
  )
}
