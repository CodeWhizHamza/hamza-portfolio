import React from 'react'

export default function WorkImage({ imgURL, title }) {
  return (
    <div className="work__img-area">
      <img src={imgURL} alt={title} className="work__img" />
    </div>
  )
}
