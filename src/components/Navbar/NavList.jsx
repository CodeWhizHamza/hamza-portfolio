import React from 'react'

export default function NavList({ handleClick, links }) {
  return (
    <ul className="nav__links">
      {links.map((link, i) => {
        return (
          <li
            key={i}
            onClick={handleClick}
            className={
              'nav__item' + (link.isActive ? ' nav__item--active' : '')
            }
          >
            <a href={link.hash} className="nav__link">
              {link.content}
            </a>
          </li>
        )
      })}
    </ul>
  )
}
