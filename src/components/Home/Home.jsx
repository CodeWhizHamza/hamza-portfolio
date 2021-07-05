import React from 'react'
import ButtonSolid from '../common/ButtonSolid/ButtonSolid'
import Image from './Image'
import './Home.css'

export default function Home({ id }) {
  return (
    <section id={id} className="home container">
      <div className="home__left">
        <h1 className="home__title">Hi! I'm Hamza.</h1>
        <h3 className="home__subtitle">UI/UX Desinger & Developer</h3>
        <p className="home__text">
          I will create clean, modern, attractive and clean websites &amp;
          mockups
        </p>
        <ButtonSolid text="Let’s discuss your work" className="home__btn" />
      </div>
      <div className="home__right">
        <Image />
      </div>
      <div className="blur blur--blue"></div>
      <div className="blur blur--green"></div>
      <div className="blur blur--yellow"></div>
    </section>
  )
}
