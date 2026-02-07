import React from 'react';
import './Hero.css';

const Hero = () => {
  const whatsappNumber = '1234567890'; // Replace with your actual WhatsApp number
  const whatsappMessage = 'Hi! I would like to discuss a project with DanceCode.';

  const handleWhatsAppClick = () => {
    window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`, '_blank');
  };

  return (
    <section id="home" className="hero">
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">
              <span className="gradient-text">Premium</span> Web Solutions That <span className="gradient-text">Dance</span> to Your Beat
            </h1>
            <p className="hero-description">
              At DanceCode, we create stunning, high-performance websites that captivate your audience and drive real results. 
              From concept to launch, we're your trusted partner in building digital experiences that matter. 💫
            </p>
            <button className="whatsapp-cta" onClick={handleWhatsAppClick}>
              <svg className="whatsapp-icon" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
              </svg>
              <span>Let's Chat on WhatsApp</span>
            </button>
          </div>
          <div className="hero-illustration">
            <div className="illustration-item laptop">
              <svg viewBox="0 0 200 150" fill="none">
                <rect x="20" y="20" width="160" height="100" rx="8" fill="url(#gradient1)" opacity="0.2"/>
                <rect x="30" y="30" width="140" height="70" fill="var(--color-dark-navy)"/>
                <line x1="40" y1="45" x2="100" y2="45" stroke="var(--color-electric-blue)" strokeWidth="2"/>
                <line x1="40" y1="55" x2="120" y2="55" stroke="var(--color-electric-blue)" strokeWidth="2" opacity="0.6"/>
                <line x1="40" y1="65" x2="80" y2="65" stroke="var(--color-electric-blue)" strokeWidth="2" opacity="0.4"/>
                <rect x="10" y="120" width="180" height="10" rx="2" fill="url(#gradient2)"/>
                <defs>
                  <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="var(--color-electric-blue)"/>
                    <stop offset="100%" stopColor="var(--color-blue-glow)"/>
                  </linearGradient>
                  <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="var(--color-electric-blue)"/>
                    <stop offset="100%" stopColor="var(--color-blue-glow)"/>
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <div className="illustration-item code">
              <svg viewBox="0 0 150 150" fill="none">
                <circle cx="75" cy="75" r="60" stroke="var(--color-electric-blue)" strokeWidth="2" opacity="0.3"/>
                <path d="M60 60 L50 75 L60 90" stroke="var(--color-electric-blue)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M90 60 L100 75 L90 90" stroke="var(--color-electric-blue)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                <line x1="70" y1="55" x2="80" y2="95" stroke="var(--color-electric-blue)" strokeWidth="3" strokeLinecap="round"/>
              </svg>
            </div>
            <div className="illustration-item teamwork">
              <svg viewBox="0 0 150 100" fill="none">
                <circle cx="50" cy="40" r="15" fill="var(--color-electric-blue)" opacity="0.3"/>
                <circle cx="100" cy="40" r="15" fill="var(--color-blue-glow)" opacity="0.3"/>
                <rect x="35" y="60" width="30" height="35" rx="4" fill="var(--color-electric-blue)" opacity="0.2"/>
                <rect x="85" y="60" width="30" height="35" rx="4" fill="var(--color-blue-glow)" opacity="0.2"/>
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="hero-background">
        <div className="gradient-orb orb-1"></div>
        <div className="gradient-orb orb-2"></div>
      </div>
    </section>
  );
};

export default Hero;
