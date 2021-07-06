import React from 'react'

export default function Input({ label, id, placeholder, type, icon }) {
  return (
    <div className="form__input-el">
      <label className="form__label" htmlFor={id}>
        {label}
      </label>
      <img src={icon} alt={label} className="form__img" />
      <input
        type={type}
        id={id}
        placeholder={placeholder}
        className="form__input"
        required
      />
    </div>
  )
}
