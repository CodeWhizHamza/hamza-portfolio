import React from 'react'

export default function HireMe() {
  return (
    <button
      className="nav__btn btn-solid"
      onClick={() =>
        window.open('https://www.fiverr.com/hamza_webdesign', '_blank')
      }
    >
      Hire me
    </button>
  )
}
