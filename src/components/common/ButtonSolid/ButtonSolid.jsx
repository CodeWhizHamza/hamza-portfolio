import React from 'react'
import './ButtonSolid.css'

export default function Button({ text, className }) {
  return <button className={'btn btn--solid ' + className}>{text}</button>
}
