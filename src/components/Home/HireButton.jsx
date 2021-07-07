import React from 'react'

export default function HireButton() {
  return (
    <button
      onClick={() =>
        window.open('https://www.fiverr.com/hamza_webdesign', '_blank')
      }
      className="home__btn btn-solid"
    >
      Let’s discuss your work
    </button>
  )
}
