import React from 'react'
import ButtonOutline from '../common/ButtonOutline/ButtonOutline'

export default function SingleWork({
  title,
  text,
  langs,
  imgURL,
  isRtl,
  href,
}) {
  return (
    <article className={'work ' + (isRtl ? 'work--rtl' : 'work--ltr')}>
      <div className="work__content">
        <div className="work__desc">
          <h3 className="work__title">{title}</h3>
          <p className="work__text">{text}</p>
          <ButtonOutline text="Visit site" href={href} />
        </div>
        <div className="work__techs">
          <div className="work__tech work__tech--blue">{langs.blue}</div>
          <div className="work__tech work__tech--green">{langs.green}</div>
          <div className="work__tech work__tech--yellow">{langs.yellow}</div>
        </div>
      </div>
      <div className="work__img-area">
        <img src={imgURL} alt={title} className="work__img" />
      </div>
    </article>
  )
}
