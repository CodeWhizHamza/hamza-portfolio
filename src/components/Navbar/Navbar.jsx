import React from 'react'
import NavList from './NavList'
import ButtonSolid from '../common/ButtonSolid/ButtonSolid'
import Toggler from './Toggler'
import './Navbar.css'

export default function Navbar() {
  const clearActiveClass = items =>
    items.forEach(i => i.classList.remove('nav__item--active'))

  const setActiveClass = element => {
    const navContainer = element.closest('.nav__links')
    const navLinks = navContainer.querySelectorAll('.nav__item')

    clearActiveClass(navLinks)
    element.closest('.nav__item').classList.add('nav__item--active')
  }

  const handleScroll = (element, hashContent) => {
    const containerHashed = element.closest('#root').querySelector(hashContent)

    containerHashed.scrollIntoView({ behavior: 'smooth' })
  }

  const handleItemClick = e => {
    e.preventDefault()
    const { target: elem } = e

    setActiveClass(elem)
    const hashContent = elem.hash
    handleScroll(elem, hashContent)
    elem.closest('.nav').classList.remove('active')
  }

  const links = [
    { content: 'Home', hash: '#home', isActive: true },
    { content: 'My Work', hash: '#work' },
    { content: 'Services', hash: '#services' },
    { content: 'Social', hash: '#social' },
    { content: 'Contact me', hash: '#contact' },
  ]

  return (
    <nav className="nav">
      <div className="container nav__navbar">
        <img
          onClick={e => handleScroll(e.target, '#home')}
          src="/img/logo.svg"
          alt="Logo"
          className="nav__logo"
        />

        <Toggler />

        <div className="nav__content">
          <NavList links={links} handleClick={handleItemClick} />
          <ButtonSolid className="nav__btn" text="Hire me" />
        </div>
      </div>
    </nav>
  )
}
