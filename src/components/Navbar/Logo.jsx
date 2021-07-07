import React from 'react'

export default function Logo({ handleItemClick, logo }) {
  return (
    <a onClick={handleItemClick} href="#home">
      <img src={logo} alt="Logo" className="nav__logo" />
    </a>
  )
}
