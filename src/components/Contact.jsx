import React from 'react';
import './Contact.css';

const Contact = () => {
  const whatsappNumber = '+256767934191';
  const whatsappMessage = "Hi DanceCode! I'd love to discuss a project with you.";
  const normalizedNumber = whatsappNumber.replace(/[^0-9]/g, '');

  const socials = [
    {
      label: 'WhatsApp',
      href: `https://wa.me/${normalizedNumber}?text=${encodeURIComponent(whatsappMessage)}`,
      icon: (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
        </svg>
      ),
    },
    {
      label: 'Instagram',
      href: 'https://instagram.com',
      icon: (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M7 3h10a4 4 0 0 1 4 4v10a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V7a4 4 0 0 1 4-4Zm10 2H7a2 2 0 0 0-2 2v10c0 1.1.9 2 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2Zm-5 3.5a4.5 4.5 0 1 1 0 9 4.5 4.5 0 0 1 0-9Zm0 2a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5Zm4.75-.85a.85.85 0 1 1-1.7 0 .85.85 0 0 1 1.7 0Z" />
        </svg>
      ),
    },
    {
      label: 'Discord',
      href: 'https://discord.com',
      isActive: true,
      icon: (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M20.3 4.6a16.5 16.5 0 0 0-4-1.3c-.2.4-.5.9-.6 1.3a15 15 0 0 0-4.5 0c-.1-.4-.4-.9-.6-1.3a16.5 16.5 0 0 0-4 1.3A16 16 0 0 0 2 18.4c1.7 1.3 3.3 2 4.9 2.4.4-.6.8-1.2 1-1.9a10.3 10.3 0 0 1-1.6-.8l.4-.3c3 1.4 6.3 1.4 9.3 0l.4.3c-.5.3-1 .6-1.6.8.3.7.6 1.3 1 1.9 1.6-.4 3.2-1.1 4.9-2.4a16 16 0 0 0-3.4-13.8ZM9.1 15.6c-.9 0-1.6-.8-1.6-1.8s.7-1.8 1.6-1.8 1.6.8 1.6 1.8-.7 1.8-1.6 1.8Zm5.8 0c-.9 0-1.6-.8-1.6-1.8s.7-1.8 1.6-1.8 1.6.8 1.6 1.8-.7 1.8-1.6 1.8Z" />
        </svg>
      ),
    },
    {
      label: 'GitHub',
      href: 'https://github.com',
      icon: (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.7c-2.78.6-3.36-1.34-3.36-1.34-.45-1.14-1.1-1.44-1.1-1.44-.9-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.9 1.53 2.36 1.09 2.94.84.09-.66.35-1.09.64-1.34-2.22-.25-4.56-1.11-4.56-4.95 0-1.09.39-1.99 1.03-2.69-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.02a9.5 9.5 0 0 1 5 0c1.91-1.29 2.75-1.02 2.75-1.02.55 1.38.2 2.4.1 2.65.64.7 1.03 1.6 1.03 2.69 0 3.85-2.34 4.7-4.57 4.94.36.31.68.92.68 1.85v2.74c0 .26.18.58.69.48A10 10 0 0 0 12 2Z" />
        </svg>
      ),
    },
    {
      label: 'LinkedIn',
      href: 'https://linkedin.com',
      icon: (
        <svg viewBox="0 0 24 24" aria-hidden="true">
          <path d="M6.94 8.5V21H3.5V8.5h3.44ZM5.22 3A2.21 2.21 0 1 1 5.2 7.42 2.21 2.21 0 0 1 5.22 3ZM20.5 13.5V21H17v-6.2c0-1.56-.56-2.63-1.95-2.63-1.06 0-1.7.71-1.97 1.4-.1.25-.13.6-.13.96V21h-3.5s.05-10.5 0-11.5H13v1.63c.46-.7 1.27-1.7 3.1-1.7 2.27 0 3.98 1.48 3.98 4.07Z" />
        </svg>
      ),
    },
  ];

  return (
    <section id="contact" className="contact contact-connect">
      <div className="contact-connect__halo" aria-hidden="true" />
      <div className="container">
        <div className="contact-connect__content">
          <div className="contact-connect__header">
            <p className="contact-connect__eyebrow">Stay Connected</p>
            <h2 className="contact-connect__title">
              <span className="contact-connect__accent">Connect</span> With Us
            </h2>
            <p className="contact-connect__subtitle">
              Join our community and stay updated with the latest news, releases, and exclusive
              content.
            </p>
          </div>

          <div className="contact-connect__panel">
            <div className="contact-connect__panel-glow" aria-hidden="true" />
            <div className="contact-connect__grid">
              {socials.map((item) => (
                <a
                  key={item.label}
                  className={`contact-connect__card ${item.isActive ? 'is-active' : ''}`}
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                >
                  <span className="contact-connect__icon" aria-hidden="true">
                    {item.icon}
                  </span>
                  <span className="contact-connect__label">{item.label}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
