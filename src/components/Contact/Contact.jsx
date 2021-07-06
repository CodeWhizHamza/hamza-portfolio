import React from 'react'
import Input from './Input'
import './Contact.css'

export default function Contact() {
  return (
    <section id="contact" className="contact container">
      <h2 className="contact__title">Get in touch</h2>
      <h4 className="contact__subtitle">
        Contact me for a quote, I’ll respond in 24 hrs
      </h4>
      <div className="contact__details">
        <div className="detail">
          <img src="/img/location.svg" alt="Location" className="detail__img" />
          <div className="detail__text">Yarhussain Swabi, Pakistan</div>
        </div>
        <div className="detail">
          <img src="/img/phone.svg" alt="Phone" className="detail__img" />
          <div className="detail__text">+92 342 1798 786</div>
        </div>
        <div className="detail">
          <img src="/img/mail.svg" alt="Mail" className="detail__img" />
          <div className="detail__text">muhammadhamzam1486@gmial.com</div>
        </div>
      </div>
      <form className="form">
        <div className="form__col">
          <Input
            label="Name"
            placeholder="e.g. John Doe"
            icon="/img/user.svg"
            id="name"
            type="text"
          />
          <Input
            label="Mail"
            placeholder="e.g. john@domain.com"
            icon="/img/mail.svg"
            id="mail"
            type="email"
          />
          <Input
            label="Phone"
            placeholder="e.g. +(1) 345 1234 "
            icon="/img/mobile.svg"
            id="phone"
            type="phone"
          />
        </div>
        <div className="form__col">
          <div className="form__textarea-box">
            <label className="form__label" htmlFor="messageBox">
              Message
            </label>
            <textarea
              id="messageBox"
              className="form__textarea"
              placeholder="Your message..."
            ></textarea>
          </div>
        </div>
        <button className="btn-solid" type="submit">
          Send message
        </button>
      </form>
    </section>
  )
}
