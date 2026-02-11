import { useEffect } from 'react';
import Lenis from '@studio-freight/lenis';

export default function SmoothScroll() {
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    // Detect mobile devices
    const isMobile =
      /iPhone|iPad|iPod|Android/i.test(navigator.userAgent) ||
      window.innerWidth < 768 ||
      navigator.maxTouchPoints > 0;

    const lenis = new Lenis({
      smooth: true,
      // Slightly faster and smoother, especially on touch devices
      lerp: isMobile ? 0.14 : 0.08,
      wheelMultiplier: isMobile ? 1.1 : 0.9,
      touchMultiplier: isMobile ? 1.8 : 1.1,
      infinite: false,
      syncTouch: true,
      syncTouchLerp: isMobile ? 0.12 : 0.08,
      touchInertiaMultiplier: isMobile ? 16 : 12,
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
