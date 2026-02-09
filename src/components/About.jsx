import React from 'react';
import './About.css';
import { GlowingEffect } from './ui/glowing-effect';

const About = () => {

  const whatsappNumber = '256767934191'; // Replace with your actual WhatsApp number
  const whatsappMessage = 'Hi! I found your website and would like to chat.';

    const handleClick = () => {
    window.open(`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`, '_blank');
  };

  const team = [
    {
      id: 1,
      name: 'Jay',
      role: 'Full Stack Developer',
      image: '/images/jay.jpeg',
      description: 'With expertise in modern web technologies, Jay transforms complex ideas into elegant, performant solutions.',
      badge: 'Core',
      meta: 'DanceCode Team',
      phone: '+256767934191'
    },
    {
      id: 2,
      name: 'Josh',
      role: 'UI/UX Designer',
      image: '/images/josh.jpeg',
      description: 'Josh brings designs to life with a keen eye for detail and user-centered thinking.',
      badge: 'Premium',
      meta: 'DanceCode Team',
      phone: '+256785479306'
    }
  ];

  return (
    <section id="about" className="about">
      <div className="container">
        <div className="about-header">
          <h2 className="section-title">Meet <span className="gradient-text">DanceCode</span></h2>
          <p className="section-description">
            We're a driven team of web professionals committed to delivering outstanding results. 
            By combining technical expertise with creative vision, we build websites that not only look remarkable but perform flawlessly.
          </p>
        </div>
        <div className="team-grid">
          {team.map((member, index) => (
            <div 
              key={member.id} 
              className="team-card"
              style={{ animationDelay: `${index * 0.3}s` }}
            >
              <GlowingEffect
                spread={40}
                glow={true}
                disabled={false}
                proximity={64}
                inactiveZone={0.05}
                borderWidth={2}
                className="team-card__glow"
              />
              <div className="team-card__surface">
                <div className="team-card__status">
                  <span className="status-dot status-dot--online" />
                  <span className="status-dot status-dot--star">★</span>
                </div>
                <div className="team-image-wrapper">
                  <div className="team-image-border">
                    <img 
                      src={member.image} 
                      alt={member.name}
                      className="team-image"
                    />
                  </div>
                </div>
                <h3 className="team-name">{member.name}</h3>
                <p className="team-role">{member.role}</p>
                <p className="team-meta">{member.meta}</p>
                <span className="team-badge">{member.badge}</span>
                <p className="team-description">{member.description}</p>
                <div className="team-actions">
<<<<<<< HEAD
                  <button className="team-action" type="button" aria-label="Connect" onClick={handleClick}>
                    <svg viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M12 6v12M6 12h12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                    </svg>
                  </button>
                  <button className="team-action" type="button" aria-label="Message" onClick={handleClick}>
=======
                  <a
                    className="team-action"
                    href={`tel:${member.phone}`}
                    aria-label={`Call ${member.name}`}
                  >
                    <svg viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M12 6v12M6 12h12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                    </svg>
                  </a>
                  <a
                    className="team-action"
                    href={`https://wa.me/${member.phone.replace(/[^0-9]/g, '')}`}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`Message ${member.name} on WhatsApp`}
                  >
>>>>>>> refs/remotes/origin/main
                    <svg viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M21 12a8.5 8.5 0 0 1-8.5 8.5H7l-4 3 1.4-4.6A8.5 8.5 0 1 1 21 12Z" stroke="currentColor" strokeWidth="2" fill="none" strokeLinejoin="round"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
