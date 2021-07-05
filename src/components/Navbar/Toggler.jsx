import React from 'react'

export default function Toggler() {
  const toggleNav = ({ target }) => {
    const nav = target.closest('.nav')
    nav.classList.toggle('active')
  }
  return (
    <div onClick={toggleNav} className="nav__toggler">
      <span></span>
      <span></span>
      <span></span>
    </div>
  )
}
