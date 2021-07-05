import React from 'react'
import Title from '../common/Title/Title'
import ButtonOutline from '../common/ButtonOutline/ButtonOutline'

export default function Work() {
  return (
    <section id="work" className="works container">
      <Title text="My Work" />

      <article className="work">
        <div className="work__content">
          <div className="work__desc">
            <h3 className="work__title">Natours</h3>
            <p className="work__text">
              It’s an imagenary project for a tour company. Here I have used a
              lot of layouts settings, I have used skewmorpishm in action.
            </p>
            <ButtonOutline text="Visit site" />
          </div>
          <div className="work__techs">
            <div className="work__tech work__tech--blue">HTML</div>
            <div className="work__tech work__tech--green">CSS</div>
            <div className="work__tech work__tech--yellow">JavaScript</div>
          </div>
        </div>
        <div className="work__img-area">
          <img
            src="/img/natours-img.jpg"
            alt="Natours image"
            className="work__img"
          />
        </div>
      </article>
    </section>
  )
}
