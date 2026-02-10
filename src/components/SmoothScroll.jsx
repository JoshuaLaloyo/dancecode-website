import { useEffect } from 'react';
import Lenis from '@studio-freight/lenis';

export default function SmoothScroll() {
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    // Detect mobile devices
    const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent) || window.innerWidth < 768;

    const lenis = new Lenis({
      smooth: true,
      lerp: isMobile ? 0.15 : 0.1, // Faster lerp on mobile for snappier feel
      wheelMultiplier: isMobile ? 1 : 0.75,
      touchMultiplier: isMobile ? 1.5 : 0.9, // More responsive touch
      infinite: false,
      syncTouch: true, // Important for mobile
      syncTouchLerp: 0.1,
      touchInertiaMultiplier: 20, // Adjust touch momentum
    });

    window.__lenis = lenis;

    let rafId;
    const raf = (time) => {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    };
    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
      if (window.__lenis === lenis) {
        delete window.__lenis;
      }
    };
  }, []);

  return null;
}