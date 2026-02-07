import React from 'react';
import './Portfolio.css';

const items = [
  { title: 'Personal Design — Aurora', desc: 'A sophisticated visual identity exploring elegant motion and dynamic interactions.' },
  { title: 'Type Study — Flow', desc: 'Custom typography system paired with smooth, engaging motion visuals for modern web experiences.' },
  { title: 'App Concept — StepSync', desc: 'Intuitive scheduling platform with choreography management designed for creative professionals.' },
  { title: 'Poster — Night Loop', desc: 'Minimalist event design featuring kinetic shapes and responsive animations that captivate audiences.' },
];

function Portfolio() {
  return (
    <section id="portfolio" className="portfolio">
      <div className="container">
        <h2 className="portfolio__title">Our Work</h2>
        <p className="portfolio__subtitle">Showcasing our latest projects and creative explorations in web design and development</p>

        <div className="portfolio__grid">
          {items.map((it, i) => (
            <article key={i} className="portfolio__item">
              <div className="portfolio__thumb" aria-hidden="true">
                <span className="portfolio__thumb-label">{i + 1}</span>
              </div>
              <h3 className="portfolio__item-title">{it.title}</h3>
              <p className="portfolio__item-desc">{it.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
