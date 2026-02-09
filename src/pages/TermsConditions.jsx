import React from 'react';
import LegalPage from './LegalPage';

function TermsConditions() {
  return (
    <LegalPage
      title="Terms & Conditions"
      subtitle="The rules for using our website and working with DanceCode."
      updated="February 9, 2026"
      summary="By accessing this site, you agree to these terms. If you do not agree, please do not use the site. Project-specific terms are defined in individual agreements."
      highlights={['Site Use', 'Engagements', 'Liability']}
      meta={[
        { label: 'Category', value: 'Terms' },
        { label: 'Applies to', value: 'Website + Services' },
        { label: 'Contact', value: 'hello@dancecode.com' },
      ]}
      sections={[
        {
          title: 'Use of the site',
          body: 'You may use this site only for lawful purposes and in a way that does not harm others.',
          items: [
            'Do not attempt to disrupt site security or functionality.',
            'Do not misuse or scrape content without permission.',
            'Respect intellectual property and brand assets.',
          ],
        },
        {
          title: 'Service engagements',
          body: 'Project scope, timelines, and pricing are defined in individual agreements.',
          items: [
            'Estimates shown on the site are non-binding.',
            'Deliverables are confirmed before work begins.',
            'Payment terms are stated in written proposals.',
          ],
        },
        {
          title: 'Limitation of liability',
          body: 'We are not liable for indirect or incidental damages resulting from use of the site.',
          items: [
            'We do not guarantee uninterrupted site access.',
            'Third-party links are provided for convenience only.',
          ],
        },
      ]}
    />
  );
}

export default TermsConditions;
