import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__top">
          <div className="footer__col footer__newsletter">
            <h3>Stay Connected</h3>
            <p>Join our newsletter for the latest updates and exclusive offers.</p>
            <form className="footer__form" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                aria-label="Email address"
              />
              <button type="submit" aria-label="Subscribe">
                →
              </button>
            </form>
          </div>

          <div className="footer__col">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About Us</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#portfolio">Work</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>

          <div className="footer__col">
            <h4>Contact Us</h4>
            <ul>
              <li>123 Innovation Street</li>
              <li>Tech City, TC 12345</li>
              <li>Phone: (123) 456-7890</li>
              <li>
                <a href="mailto:hello@dancecode.com">hello@dancecode.com</a>
              </li>
            </ul>
          </div>

          <div className="footer__col footer__social">
            <h4>Follow Us</h4>
            <div className="footer__social-row">
              <a href="#" aria-label="Facebook" className="social-pill">f</a>
              <a href="#" aria-label="X" className="social-pill">x</a>
              <a href="#" aria-label="Instagram" className="social-pill">ig</a>
              <a href="#" aria-label="LinkedIn" className="social-pill">in</a>
            </div>
          </div>
        </div>

        <div className="footer__bottom">
          <p>© {new Date().getFullYear()} DanceCode. All rights reserved.</p>
          <div className="footer__legal">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
            <a href="#">Cookie Settings</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
