import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import FloatingWhatsApp from '../components/FloatingWhatsApp';
import ScrollProgress from '../components/ScrollProgress';

function LegalLayout({ children }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="App">
      <ScrollProgress />
      <Navbar scrolled={scrolled} />
      {children}
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}

export default LegalLayout;
