import React from 'react'
import './ButtonOutline.css'

export default function ButtonOutline({ text, className }) {
  return <button className={'btn-outline ' + className}>{text}</button>
}
