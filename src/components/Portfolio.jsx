import React from 'react';
import './Portfolio.css';
import { GlowingEffect } from './ui/glowing-effect';

const items = [
  {
    title: 'Pulse Creative',
    subtitle: 'Marketing Site • UI/UX',
    desc: 'A bold homepage redesign for a creative studio focused on storytelling and brand clarity.',
    tag: 'Launch',
    image:
      'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1200&auto=format&fit=crop',
  },
  {
    title: 'Northwind Labs',
    subtitle: 'SaaS Website • Product',
    desc: 'A modern product site with crisp messaging, clear benefits, and fast conversion paths.',
    tag: 'Case Study',
    image:
      'https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=80&w=1200&auto=format&fit=crop',
  },
  {
    title: 'Lumen Atelier',
    subtitle: 'Portfolio • Brand',
    desc: 'A cinematic portfolio site built to showcase motion work with a luxe, editorial feel.',
    tag: 'Featured',
    image:
      'https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=1200&auto=format&fit=crop',
  },
  {
    title: 'Harbor & Pine',
    subtitle: 'E-commerce • Lifestyle',
    desc: 'A warm, minimal storefront experience highlighting collections and seasonal drops.',
    tag: 'Popular',
    image:
      'https://images.unsplash.com/photo-1503899036084-c55cdd92da26?q=80&w=1200&auto=format&fit=crop',
  },
];

function Portfolio() {
  return (
    <section id="portfolio" className="portfolio">
      <div className="container">
        <h2 className="portfolio__title">Our Work</h2>
        <p className="portfolio__subtitle">
          Showcasing our latest projects and creative explorations in web design and development
        </p>
        <div className="portfolio__grid">
          {items.map((it, i) => (
            <article key={i} className="portfolio-card">
              <GlowingEffect
                spread={40}
                glow={true}
                disabled={false}
                proximity={64}
                inactiveZone={0.05}
                borderWidth={2}
                className="portfolio-card__glow"
              />
              <div className="portfolio-card__inner">
                <div
                  className="portfolio-card__media"
                  style={{ backgroundImage: `url(${it.image})` }}
                  role="img"
                  aria-label={it.title}
                />
                <div className="portfolio-card__body">
                  <div className="portfolio-card__header">
                    <h3 className="portfolio-card__title">{it.title}</h3>
                    <span className="portfolio-card__tag">{it.tag}</span>
                  </div>
                  <p className="portfolio-card__subtitle">{it.subtitle}</p>
                  <p className="portfolio-card__desc">{it.desc}</p>

                  <div className="portfolio-card__footer">
                    <button className="portfolio-card__cta" type="button">
                      Checkout <span className="cta-arrow">→</span>
                    </button>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
