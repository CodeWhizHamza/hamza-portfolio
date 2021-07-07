import React from 'react'

export default function WorkDesc({ title, text, href }) {
  return (
    <div className="work__desc">
      <h3 className="work__title">{title}</h3>
      <p className="work__text">{text}</p>
      <button className="btn-solid" onClick={window.open(href, '_blank')}>
        Visit site
      </button>
    </div>
  )
}
