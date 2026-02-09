import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const GROUPS = [
  { container: '.services-grid', items: '.service-card' },
  { container: '.team-grid', items: '.team-card' },
  { container: '.portfolio__grid', items: '.portfolio-card' },
  { container: '.contact-connect__grid', items: '.contact-connect__card' },
  { container: '.portfolio-showcase__gallery', items: '.portfolio-showcase__thumb' },
];

const EXTRA_SELECTORS = [
  '.portfolio-showcase__frame',
  '.portfolio-showcase__info',
  '.legal-page__card',
  '.legal-page__section',
  '.legal-page__panel',
];

function ScrollReveal() {
  const location = useLocation();

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const elements = new Set();

    GROUPS.forEach(({ container, items }) => {
      document.querySelectorAll(container).forEach((containerEl) => {
        const itemEls = Array.from(containerEl.querySelectorAll(items));
        itemEls.forEach((el, index) => {
          el.classList.add('reveal-on-scroll');
          el.style.setProperty('--reveal-delay', `${Math.min(index * 0.08, 0.4)}s`);
          elements.add(el);
        });
      });
    });

    EXTRA_SELECTORS.forEach((selector) => {
      document.querySelectorAll(selector).forEach((el) => {
        el.classList.add('reveal-on-scroll');
        el.style.setProperty('--reveal-delay', '0s');
        elements.add(el);
      });
    });

    if (!elements.size) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
          } else {
            entry.target.classList.remove('is-visible');
          }
        });
      },
      { threshold: 0.2, rootMargin: '0px 0px -8% 0px' }
    );

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [location.pathname]);

  return null;
}

export default ScrollReveal;
