import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__brand">
          <h3>DanceCode</h3>
          <p>Where Code Meets Creativity</p>
        </div>

        <nav className="footer__links" aria-label="Footer links">
          <a href="#services">Services</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </nav>

        <div className="footer__contact">
          <a href="mailto:hello@dancecode.com">hello@dancecode.com</a>
          <p>© {new Date().getFullYear()} DanceCode</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
