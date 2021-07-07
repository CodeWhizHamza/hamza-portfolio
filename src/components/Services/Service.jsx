import React from 'react'
import blur from './blur.svg'

export default function Service({ title, text, isLtr, imgURL }) {
  return (
    <article className={'service' + (isLtr ? ' service--ltr' : '')}>
      <div
        style={{ backgroundImage: `url(${blur})` }}
        className="service__img-cont"
      >
        <img src={imgURL} alt={title} className="service__img" />
      </div>
      <div className="service__content">
        <h3 className="service__title">{title}</h3>
        <p className="service__text">{text}</p>
      </div>
    </article>
  )
}
