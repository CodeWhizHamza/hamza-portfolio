import React from 'react'

export default function Service({ title, text, isLtr, imgURL }) {
  return (
    <article className={'service' + (isLtr ? ' service--ltr' : '')}>
      <div className="service__img-cont">
        <img src={imgURL} alt={title} className="service__img" />
        <div className="service__blur service__blur--blue"></div>
        <div className="service__blur service__blur--yellow"></div>
        <div className="service__blur service__blur--green"></div>
      </div>
      <div className="service__content">
        <h3 className="service__title">{title}</h3>
        <p className="service__text">{text}</p>
      </div>
    </article>
  )
}
