import React, { useEffect, useRef, useState } from 'react';
import './Portfolio.css';
import { GlowingEffect } from './ui/glowing-effect';
import CaseStudyShowcase from './CaseStudyShowcase';
import portfolioItems from '../data/portfolioItems';

function Portfolio({ onCheckout }) {
  const defaultProjectId =
    portfolioItems.find((item) => item.subtitle.toLowerCase().includes('product'))?.id ||
    portfolioItems[0].id;
  const [activeProjectId, setActiveProjectId] = useState(defaultProjectId);
  const detailRef = useRef(null);

  const activeProject =
    portfolioItems.find((item) => item.id === activeProjectId) || portfolioItems[0];

  useEffect(() => {
    setActiveProjectId(defaultProjectId);
  }, [defaultProjectId]);

  const handleSelect = (projectId) => {
    setActiveProjectId(projectId);
    window.requestAnimationFrame(() => {
      detailRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  };

  const handleCheckout = (event, projectId) => {
    event.stopPropagation();
    if (onCheckout) {
      onCheckout(projectId);
    }
  };

  const handleCardKeyDown = (event, projectId) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      handleSelect(projectId);
    }
  };

  return (
    <section id="portfolio" className="portfolio">
      <div className="container">
        <h2 className="portfolio__title">Our Work</h2>
        <p className="portfolio__subtitle">
          Showcasing our latest projects and creative explorations in web design and development
        </p>
        <div className="portfolio__grid">
          {portfolioItems.map((it) => (
            <article
              key={it.id}
              className="portfolio-card"
              role="button"
              tabIndex={0}
              data-active={activeProjectId === it.id}
              aria-label={`Open case study for ${it.title}`}
              onClick={() => handleSelect(it.id)}
              onKeyDown={(event) => handleCardKeyDown(event, it.id)}
            >
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
                <div className="portfolio-card__media" role="img" aria-label={it.title}>
                  <span
                    className="portfolio-card__media-image"
                    style={{ backgroundImage: `url(${it.pages[0].image})` }}
                  />
                </div>
                <div className="portfolio-card__body">
                  <div className="portfolio-card__header">
                    <h3 className="portfolio-card__title">{it.title}</h3>
                    <span className="portfolio-card__tag">{it.tag}</span>
                  </div>
                  <p className="portfolio-card__subtitle">{it.subtitle}</p>
                  <p className="portfolio-card__desc">{it.desc}</p>
                  <div className="portfolio-card__footer">
                    <div className="portfolio-card__link">
                      View case study <span className="cta-arrow">→</span>
                    </div>
                    <button
                      className="portfolio-card__cta"
                      type="button"
                      onClick={(event) => handleCheckout(event, it.id)}
                      aria-label={`Checkout ${it.title}`}
                    >
                      Checkout
                    </button>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div ref={detailRef} aria-live="polite">
          <CaseStudyShowcase project={activeProject} />
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
