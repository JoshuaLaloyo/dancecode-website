import React from 'react';
import './Services.css';
import { GlowingEffect } from './ui/glowing-effect';
import { BackgroundPaths } from './ui/background-paths';

const Services = () => {
  const services = [
    {
      id: 1,
      title: 'Web Design',
      description: 'Custom, visually stunning website designs that reflect your brand and engage visitors. We create responsive, intuitive interfaces that turn visitors into customers.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="3" width="20" height="14" rx="2" ry="2"/>
          <line x1="8" y1="21" x2="16" y2="21"/>
          <line x1="12" y1="17" x2="12" y2="21"/>
        </svg>
      )
    },
    {
      id: 2,
      title: 'Web Development',
      description: 'Fast, secure, and scalable websites built with cutting-edge technology. We ensure your site performs flawlessly across all devices and handles your success.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="16 18 22 12 16 6"/>
          <polyline points="8 6 2 12 8 18"/>
        </svg>
      )
    },
    {
      id: 3,
      title: 'Maintenance & Support',
      description: 'Continuous care and optimization for your website. We handle updates, security, and performance so you can focus on your business.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>
        </svg>
      )
    }
  ];

  return (
    <section id="services" className="services">
      <div className="services-paths" aria-hidden="true">
        <BackgroundPaths showContent={false} className="services-paths__inner" />
      </div>
      <div className="container">
        <div className="services-header">
          <h2 className="section-title">What We <span className="gradient-text">Offer</span></h2>
          <p className="section-description">
            Comprehensive web solutions designed to help your business thrive online
          </p>
        </div>
        <div className="services-grid">
          {services.map((service, index) => (
            <div 
              key={service.id} 
              className="service-card"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <GlowingEffect
                spread={40}
                glow={true}
                disabled={false}
                proximity={64}
                inactiveZone={0.05}
                borderWidth={2}
              />
              <div className="service-card__content">
                <div className="service-icon">
                  {service.icon}
                </div>
                <h3 className="service-title">{service.title}</h3>
                <p className="service-description">{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
