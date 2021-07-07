import React from 'react'
import Toggler from './Toggler'
import logo from '../../logo.svg'
import './Navbar.css'
import Logo from './Logo'
import NavContent from './NavContent'

export default function Navbar() {
  const clearActiveClass = items =>
    items.forEach(i => i.classList.remove('nav__item--active'))
  const setActiveClass = element => {
    const navContainer = element.closest('.nav__links')
    const navLinks = navContainer.querySelectorAll('.nav__item')

    clearActiveClass(navLinks)
    element.closest('.nav__item').classList.add('nav__item--active')
  }
  const scrollToElement = elem => {
    if (!elem) return
    elem
      .closest('#root')
      .querySelector(elem.getAttribute('href'))
      .scrollIntoView({ behavior: 'smooth' })
  }
  const handleItemClick = e => {
    e.preventDefault()
    const { target: elem } = e

    setActiveClass(elem)
    scrollToElement(elem)
    elem.closest('.nav').classList.remove('active')
  }

  const links = [
    { content: 'Home', path: '#home', isActive: true },
    { content: 'My Work', path: '#work' },
    { content: 'Services', path: '#services' },
    { content: 'Social', path: '#social' },
    { content: 'Contact me', path: '#contact' },
  ]

  return (
    <nav className="nav">
      <div className="container nav__navbar">
        <Logo {...{ handleItemClick, logo }} />
        <Toggler />
        <NavContent {...{ links, handleItemClick }} />
      </div>
    </nav>
  )
}
