import React from 'react'
import './ButtonSolid.css'

export default function ButtonSolid({ text, className }) {
  return <button className={'btn-solid ' + className}>{text}</button>
}
