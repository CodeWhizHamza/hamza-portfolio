import React from 'react'

export default function Links({ links, handleItemClick }) {
  return (
    <ul className="nav__links">
      {links.map((link, i) => {
        return (
          <li
            key={i}
            onClick={handleItemClick}
            className={
              'nav__item' + (link.isActive ? ' nav__item--active' : '')
            }
          >
            <a href={link.path} onClick={handleItemClick} className="nav__link">
              {link.content}
            </a>
          </li>
        )
      })}
    </ul>
  )
}
