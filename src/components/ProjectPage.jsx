import React from 'react';
import './ProjectPage.css';
import './Portfolio.css';
import CaseStudyShowcase from './CaseStudyShowcase';
import KineticDotsLoader from './ui/kinetic-dots-loader';

const ProjectPage = ({ project, isLoading, onBack }) => {
  return (
    <section className="project-page">
      <div className="project-page__glow" aria-hidden="true" />
      <div className="container project-page__header">
        <button className="project-page__back" type="button" onClick={onBack}>
          &larr; Back to portfolio
        </button>
        <div className="project-page__intro">
          <span className="project-page__eyebrow">Case Study</span>
          <h2 className="project-page__title">{project?.title || 'Project'}</h2>
          {project?.subtitle && (
            <p className="project-page__subtitle">{project.subtitle}</p>
          )}
        </div>
      </div>

      <div className="project-page__body">
        {isLoading ? (
          <div className="project-page__loading" role="status" aria-live="polite">
            <KineticDotsLoader className="project-page__loader" />
            <p>Loading project details...</p>
          </div>
        ) : (
          <div className="container">
            <CaseStudyShowcase project={project} />
          </div>
        )}
      </div>
    </section>
  );
};

export default ProjectPage;
