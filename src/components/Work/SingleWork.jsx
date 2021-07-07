import React from 'react'
import WorkDesc from './WorkDesc'
import WorkTechs from './WorkTechs'
import WorkImage from './WorkImage'

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
        <WorkDesc {...{ title, href, text }} />
        <WorkTechs langs={langs} />
      </div>
      <WorkImage {...{ title, imgURL }} />
    </article>
  )
}
