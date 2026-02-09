import React from 'react';
import LegalPage from './LegalPage';

function CookieSettings() {
  return (
    <LegalPage
      title="Cookie Settings"
      subtitle="Understand the cookies we use and how to manage your preferences."
      updated="February 9, 2026"
      summary="Cookies help us deliver a reliable experience and understand how visitors use the site. You can control cookie preferences in your browser at any time."
      highlights={['Essential', 'Performance', 'Preferences']}
      meta={[
        { label: 'Category', value: 'Cookies' },
        { label: 'Applies to', value: 'Website Only' },
        { label: 'Contact', value: 'hello@dancecode.com' },
      ]}
      sections={[
        {
          title: 'What are cookies?',
          body:
            'Cookies are small text files stored on your device that help websites remember preferences and measure usage.',
        },
        {
          title: 'Types of cookies we use',
          body: 'We use a small set of cookies to keep the experience smooth and insightful.',
          items: [
            'Essential cookies for core functionality.',
            'Performance cookies to understand traffic and usage.',
            'Preference cookies to remember your settings.',
          ],
        },
        {
          title: 'Managing cookies',
          body:
            'You can manage or delete cookies in your browser settings. Disabling cookies may limit some features.',
          items: [
            'Block cookies in your browser to opt out.',
            'Clear cookies to reset preferences.',
          ],
        },
      ]}
    />
  );
}

export default CookieSettings;
