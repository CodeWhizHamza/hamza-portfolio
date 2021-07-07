import React from 'react'
import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__top">
        <h3 className="footer__title">Ready to discuss your work?</h3>
        <h4 className="footer__subtitle">
          Let me change your ideas to reality.
        </h4>
        <button
          className="btn-outline"
          onClick={() =>
            window.open('https://www.fiverr.com/hamza_webdesign', '_blank')
          }
        >
          Start working!
        </button>
      </div>
      <div className="footer__bottom">
        &copy; Hamza, 2021. A portfolio site designed and developed by Hamza.
      </div>
    </footer>
  )
}
