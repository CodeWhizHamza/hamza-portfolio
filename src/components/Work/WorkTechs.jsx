import React from 'react'

export default function WorkTechs({ langs }) {
  return (
    <div className="work__techs">
      <div className="work__tech work__tech--blue">{langs.blue}</div>
      <div className="work__tech work__tech--green">{langs.green}</div>
      <div className="work__tech work__tech--yellow">{langs.yellow}</div>
    </div>
  )
}
