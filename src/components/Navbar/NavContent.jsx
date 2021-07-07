import React from 'react'

import Links from './Links'
import HireMe from './HireMe'
export default function NavContent({ links, handleItemClick }) {
  return (
    <div className="nav__content">
      <Links {...{ links, handleItemClick }} />
      <HireMe />
    </div>
  )
}
