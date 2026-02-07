import React, { useState, useEffect } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import Footer from './components/Footer';
import KineticDotsLoader from './components/ui/kinetic-dots-loader';

function App() {
  const [scrolled, setScrolled] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const minDelayMs = 800;
    const startTime = Date.now();
    let isMounted = true;

    const finishLoading = () => {
      const elapsed = Date.now() - startTime;
      const remaining = Math.max(0, minDelayMs - elapsed);
      window.setTimeout(() => {
        if (isMounted) setIsLoading(false);
      }, remaining);
    };

    if (document.readyState === 'complete') {
      finishLoading();
      return () => {
        isMounted = false;
      };
    }

    window.addEventListener('load', finishLoading);
    return () => {
      isMounted = false;
      window.removeEventListener('load', finishLoading);
    };
  }, []);

  return (
    <div className="App">
      {isLoading && (
        <div
          className="loader-overlay fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm"
          role="status"
          aria-live="polite"
          aria-label="Loading"
        >
          <KineticDotsLoader />
        </div>
      )}
      <Navbar scrolled={scrolled} />
      <Hero />
      <Services />
      <Portfolio />
      <About />
      <Contact />
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}

export default App;
