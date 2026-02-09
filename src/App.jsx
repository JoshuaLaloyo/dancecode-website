import React, { useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
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
import ProjectPage from './components/ProjectPage';
import portfolioItems from './data/portfolioItems';
import ScrollProgress from './components/ScrollProgress';
import SmoothScroll from './components/SmoothScroll';
import ScrollReveal from './components/ScrollReveal';
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsConditions from './pages/TermsConditions';
import CookieSettings from './pages/CookieSettings';

function Home() {
  const [scrolled, setScrolled] = useState(false);
  const defaultProjectId =
    portfolioItems.find((item) => item.subtitle.toLowerCase().includes('product'))?.id ||
    portfolioItems[0].id;
  const [activeProjectId, setActiveProjectId] = useState(defaultProjectId);
  const [isProjectPageOpen, setIsProjectPageOpen] = useState(false);
  const [isProjectLoading, setIsProjectLoading] = useState(false);

  useEffect(() => {
    const getProjectIdFromHash = () => {
      const hash = window.location.hash.replace('#', '');
      if (!hash.startsWith('project=')) return null;
      return decodeURIComponent(hash.replace('project=', ''));
    };

    const handleHashChange = () => {
      const projectId = getProjectIdFromHash();
      const exists = projectId && portfolioItems.some((item) => item.id === projectId);

      if (exists) {
        setActiveProjectId(projectId);
        setIsProjectPageOpen(true);
        setIsProjectLoading(true);
      } else {
        setIsProjectPageOpen(false);
        setIsProjectLoading(false);
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (!isProjectPageOpen) return;
    setIsProjectLoading(true);
    const timer = window.setTimeout(() => {
      setIsProjectLoading(false);
    }, 700);

    return () => window.clearTimeout(timer);
  }, [activeProjectId, isProjectPageOpen]);

  useEffect(() => {
    if (!isProjectPageOpen) return;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [isProjectPageOpen]);

  const openProjectPage = (projectId) => {
    setActiveProjectId(projectId);
    setIsProjectLoading(true);
    setIsProjectPageOpen(true);
    const targetHash = `project=${encodeURIComponent(projectId)}`;
    if (window.location.hash !== `#${targetHash}`) {
      window.location.hash = targetHash;
    }
  };

  const closeProjectPage = () => {
    setIsProjectPageOpen(false);
    setIsProjectLoading(false);
    if (window.location.hash.startsWith('#project=')) {
      window.history.replaceState(null, document.title, window.location.pathname + window.location.search);
    }
  };

  const activeProject =
    portfolioItems.find((item) => item.id === activeProjectId) || portfolioItems[0];

  return (
    <div className="App">
      <ScrollProgress />
      {isProjectPageOpen ? (
        <ProjectPage
          project={activeProject}
          isLoading={isProjectLoading}
          onBack={closeProjectPage}
        />
      ) : (
        <>
          <Navbar scrolled={scrolled} />
          <Hero />
          <Services />
          <Portfolio onCheckout={openProjectPage} />
          <About />
          <Contact />
          <Footer />
          <FloatingWhatsApp />
        </>
      )}
    </div>
  );
}

function App() {
  const location = useLocation();
  const [isRouteLoading, setIsRouteLoading] = useState(true);

  useEffect(() => {
    const minDelayMs = 700;
    const startTime = Date.now();
    let isMounted = true;

    const finishLoading = () => {
      const elapsed = Date.now() - startTime;
      const remaining = Math.max(0, minDelayMs - elapsed);
      window.setTimeout(() => {
        if (isMounted) setIsRouteLoading(false);
      }, remaining);
    };

    setIsRouteLoading(true);
    const lenis = window.__lenis;
    if (lenis) {
      lenis.scrollTo(0, { immediate: true });
    } else {
      window.scrollTo(0, 0);
    }
    finishLoading();

    return () => {
      isMounted = false;
    };
  }, [location.pathname]);

  return (
    <>
      <SmoothScroll />
      <ScrollReveal />
      {isRouteLoading && (
        <div
          className="loader-overlay fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm"
          role="status"
          aria-live="polite"
          aria-label="Loading"
        >
          <KineticDotsLoader />
        </div>
      )}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route path="/terms" element={<TermsConditions />} />
        <Route path="/cookies" element={<CookieSettings />} />
      </Routes>
    </>
  );
}

export default App;
