import React from 'react'
import ButtonSolid from '../common/ButtonSolid/ButtonSolid'
import Toggler from './Toggler'
import logo from '../../logo.svg'
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
        <a onClick={handleItemClick} href="#home">
          <img src={logo} alt="Logo" className="nav__logo" />
        </a>

        <Toggler />

        <div className="nav__content">
          <ul className="nav__links">
            {links.map((link, i) => {
              return (
                <li
                  key={i}
                  onClick={handleItemClick}
                  className={
                    'nav__item' + (link.isActive ? ' nav__item--active' : '')
                  }
                >
                  <a
                    href={link.path}
                    onClick={handleItemClick}
                    className="nav__link"
                  >
                    {link.content}
                  </a>
                </li>
              )
            })}
          </ul>

          <button
            className="nav__btn btn-solid"
            onClick={() =>
              window.open('https://www.fiverr.com/hamza_webdesign', '_blank')
            }
          >
            Hire me
          </button>
        </div>
      </div>
    </nav>
  )
}
