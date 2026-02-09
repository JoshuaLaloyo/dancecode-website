import React from 'react';
import './LegalPage.css';
import LegalLayout from './LegalLayout';

function LegalPage({ title, subtitle, updated, summary, highlights, sections, meta }) {
  return (
    <LegalLayout>
      <section className="legal-page">
        <div className="legal-page__hero">
          <div className="container legal-page__hero-inner">
            <div className="legal-page__eyebrow">Legal</div>
            <h1 className="legal-page__title">{title}</h1>
            <p className="legal-page__subtitle">{subtitle}</p>
            <div className="legal-page__meta">
              {meta.map((item) => (
                <div key={item.label} className="legal-page__meta-item">
                  <span>{item.label}</span>
                  <strong>{item.value}</strong>
                </div>
              ))}
            </div>
            <div className="legal-page__chips">
              {highlights.map((chip) => (
                <span key={chip} className="legal-page__chip">
                  {chip}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="container legal-page__body">
          <div className="legal-page__main">
            <div className="legal-page__card">
              <p className="legal-page__summary">{summary}</p>
              <p className="legal-page__updated">Last updated: {updated}</p>
            </div>

            {sections.map((section) => (
              <div key={section.title} className="legal-page__section">
                <h2>{section.title}</h2>
                <p>{section.body}</p>
                {section.items?.length ? (
                  <ul>
                    {section.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                ) : null}
              </div>
            ))}
          </div>

          <aside className="legal-page__aside">
            <div className="legal-page__panel">
              <h3>Need clarity?</h3>
              <p>
                If you have questions about our policies, reach out and we will respond quickly.
              </p>
              <a className="legal-page__cta" href="mailto:hello@dancecode.com">
                hello@dancecode.com
              </a>
            </div>
            <div className="legal-page__panel legal-page__panel--dark">
              <h3>Quick takeaways</h3>
              <ul>
                {highlights.map((chip) => (
                  <li key={chip}>{chip}</li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </section>
    </LegalLayout>
  );
}

export default LegalPage;
