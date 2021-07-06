import React from 'react'
import Title from '../common/Title/Title'
import './Socials.css'

export default function Socials() {
  const handleClick = e => {
    const href = e.target.closest('.social').getAttribute('datahref')
    window.open(href, '_blank')
  }
  const handleMouseOver = ({ target }) => {
    const elem = target.closest('.social')
    elem.closest('.socials').style.backgroundColor =
      elem.getAttribute('datacolor')
  }
  const handleMouseOut = ({ target }) => {
    const elem = target.closest('.social')
    elem.closest('.socials').style.backgroundColor = 'transparent'
  }

  return (
    <section id="social" className="socials container">
      <Title text="Social Profile" />
      <div className="socials__icons">
        <div
          onClick={handleClick}
          onMouseOver={handleMouseOver}
          onMouseOut={handleMouseOut}
          dataname="Instagram"
          datahref="https://www.instagram.com/motivational_boy_quotes/"
          className="social"
          datacolor="#C13584"
        >
          <img
            src="/img/instagram.svg"
            alt="Instagram"
            className="social__img"
          />
        </div>
        <div
          onClick={handleClick}
          onMouseOver={handleMouseOver}
          onMouseOut={handleMouseOut}
          dataname="Facebook"
          datahref="https://web.facebook.com/profile.php?id=100020512297430"
          className="social"
          datacolor="#4267B2"
        >
          <img src="/img/facebook.svg" alt="Facebook" className="social__img" />
        </div>
        <div
          onClick={handleClick}
          onMouseOver={handleMouseOver}
          onMouseOut={handleMouseOut}
          dataname="Github"
          datahref="http://github.com/hamza-student"
          className="social"
          datacolor="#555"
        >
          <img src="/img/github.svg" alt="Github" className="social__img" />
        </div>
        <div
          onClick={handleClick}
          onMouseOver={handleMouseOver}
          onMouseOut={handleMouseOut}
          dataname="Twitter"
          datahref="https://twitter.com/HamzaKingmaker"
          className="social"
          datacolor="#1DA1F2"
        >
          <img src="/img/twitter.svg" alt="Twitter" className="social__img" />
        </div>
        <div
          onClick={handleClick}
          onMouseOver={handleMouseOver}
          onMouseOut={handleMouseOut}
          dataname="Youtube"
          datahref="https://www.youtube.com/channel/UCr707nULNs7aAHP8M8hANZQ"
          className="social"
          datacolor="#f00"
        >
          <img src="/img/youtube.svg" alt="YouTube" className="social__img" />
        </div>
      </div>
    </section>
  )
}
