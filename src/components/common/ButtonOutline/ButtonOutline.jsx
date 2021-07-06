import React from 'react'
import './ButtonOutline.css'

export default function ButtonOutline({ text, className, href }) {
  const handleClick = e => {
    e.preventDefault()
    if (!href) return

    window.open(href, '_blank')
  }
  return (
    <button className={'btn-outline ' + className} onClick={handleClick}>
      {text}
    </button>
  )
}
