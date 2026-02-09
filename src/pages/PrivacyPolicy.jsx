import React from 'react';
import LegalPage from './LegalPage';

function PrivacyPolicy() {
  return (
    <LegalPage
      title="Privacy Policy"
      subtitle="How we collect, use, and protect your information when you engage with DanceCode."
      updated="February 9, 2026"
      summary="We only collect information we need to deliver services and improve your experience. We never sell your data, and you can request access or deletion at any time."
      highlights={['Data Collection', 'Usage', 'Your Choices']}
      meta={[
        { label: 'Category', value: 'Privacy' },
        { label: 'Applies to', value: 'Website + Services' },
        { label: 'Contact', value: 'hello@dancecode.com' },
      ]}
      sections={[
        {
          title: 'Information we collect',
          body:
            'We collect details you voluntarily provide and limited technical data needed to operate and improve the site.',
          items: [
            'Contact details you submit (name, email, phone).',
            'Project information you share in forms or messages.',
            'Basic usage data like pages visited and device type.',
          ],
        },
        {
          title: 'How we use information',
          body: 'We use data to respond, deliver services, and improve performance.',
          items: [
            'Respond to inquiries and provide requested services.',
            'Improve site speed, content, and user experience.',
            'Send updates only when you opt in.',
          ],
        },
        {
          title: 'Your choices',
          body: 'You control how your data is used and can request changes.',
          items: [
            'Request access, updates, or deletion of your data.',
            'Opt out of non-essential communications anytime.',
            'Ask questions by emailing hello@dancecode.com.',
          ],
        },
      ]}
    />
  );
}

export default PrivacyPolicy;
