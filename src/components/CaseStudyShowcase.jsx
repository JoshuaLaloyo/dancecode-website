import React, { useEffect, useState } from 'react';
import { GlowingEffect } from './ui/glowing-effect';

const CaseStudyShowcase = ({ project }) => {
  const [activePageIndex, setActivePageIndex] = useState(0);

  useEffect(() => {
    setActivePageIndex(0);
  }, [project?.id]);

  if (!project) return null;

  const pages = project.pages || [];
  const meta = project.meta || [];
  const services = project.services || [];
  const activePage = pages[activePageIndex] || pages[0];

  if (!activePage) return null;

  return (
    <div className="portfolio-showcase" aria-live="polite">
      <GlowingEffect
        spread={60}
        glow={true}
        disabled={false}
        proximity={90}
        inactiveZone={0.1}
        borderWidth={2}
        className="portfolio-showcase__glow"
      />
      <div className="portfolio-showcase__inner">
        <div className="portfolio-showcase__header">
          <span className="portfolio-showcase__eyebrow">{project.type}</span>
          <h3 className="portfolio-showcase__title">{project.title}</h3>
          <p className="portfolio-showcase__lead">{project.overview}</p>
        </div>

        <div className="portfolio-showcase__content">
          <div className="portfolio-showcase__info">
            <div className="portfolio-showcase__meta">
              {meta.map((item) => (
                <div key={item.label} className="portfolio-showcase__meta-item">
                  <span>{item.label}</span>
                  <strong>{item.value}</strong>
                </div>
              ))}
            </div>
            <div className="portfolio-showcase__services">
              {services.map((service) => (
                <span key={service} className="portfolio-showcase__chip">
                  {service}
                </span>
              ))}
            </div>
            <a
              className="portfolio-showcase__visit"
              href={project.visitUrl}
              target="_blank"
              rel="noreferrer"
            >
              Visit website <span>↗</span>
            </a>
          </div>

          <div className="portfolio-showcase__media">
            <div className="portfolio-showcase__frame">
              <div className="portfolio-showcase__frame-inner">
                <img src={activePage.image} alt={`${project.title} ${activePage.label} page`} />
              </div>
            </div>
            <div className="portfolio-showcase__tabs" role="tablist" aria-label="Page previews">
              {pages.map((page, index) => (
                <button
                  key={page.label}
                  type="button"
                  className={`portfolio-showcase__tab ${index === activePageIndex ? 'is-active' : ''}`}
                  onClick={() => setActivePageIndex(index)}
                  aria-pressed={index === activePageIndex}
                >
                  {page.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="portfolio-showcase__gallery">
          {pages.map((page, index) => (
            <button
              key={page.label}
              type="button"
              className={`portfolio-showcase__thumb ${index === activePageIndex ? 'is-active' : ''}`}
              onClick={() => setActivePageIndex(index)}
              aria-pressed={index === activePageIndex}
            >
              <span
                className="portfolio-showcase__thumb-image"
                style={{ backgroundImage: `url(${page.image})` }}
              />
              <span className="portfolio-showcase__thumb-label">{page.label}</span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CaseStudyShowcase;
