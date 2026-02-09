import { useEffect, useRef } from "react";
import "./Hero.css";

export default function Hero() {
  const canvasRef = useRef(null);
  const heroRef = useRef(null);

  // WhatsApp logic
  const whatsappNumber = "+256767934191";
  const whatsappMessage =
    "Hi! I would like to discuss a project with danceCode.";

  const handleWhatsAppClick = () => {
    const normalizedNumber = whatsappNumber.replace(/[^0-9]/g, "");
    window.open(
      `https://wa.me/${normalizedNumber}?text=${encodeURIComponent(
        whatsappMessage
      )}`,
      "_blank"
    );
  };

  // Particle system
  useEffect(() => {
    const canvas = canvasRef.current;
    const hero = heroRef.current;
    if (!canvas || !hero) return;

    const ctx = canvas.getContext("2d");
    const dpr = window.devicePixelRatio || 1;

    let width, height;
    let particles = [];
    const mouse = { x: null, y: null, radius: 120 };

    const resize = () => {
      width = hero.offsetWidth;
      height = hero.offsetHeight;

      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;

      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    resize();

    const mouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    };

    window.addEventListener("resize", resize);
    window.addEventListener("mousemove", mouseMove);

    class Particle {
      constructor() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.baseX = this.x;
        this.baseY = this.y;
        this.size = Math.random() * 2 + 1;
        this.speed = Math.random() * 0.02 + 0.01;
      }

      draw() {
        ctx.fillStyle = "rgba(34, 211, 238, 0.8)";
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }

      update() {
        if (mouse.x === null) return;

        const dx = mouse.x - this.x;
        const dy = mouse.y - this.y;
        const distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < mouse.radius) {
          const angle = Math.atan2(dy, dx);
          const force = (mouse.radius - distance) / mouse.radius;
          this.x -= Math.cos(angle) * force * 4;
          this.y -= Math.sin(angle) * force * 4;
        } else {
          this.x += (this.baseX - this.x) * this.speed;
          this.y += (this.baseY - this.y) * this.speed;
        }
      }
    }

    const init = () => {
      particles = [];
      for (let i = 0; i < 90; i++) {
        particles.push(new Particle());
      }
    };

    init();

    let animationId;
    const animate = () => {
      ctx.clearRect(0, 0, width, height);
      particles.forEach((p) => {
        p.update();
        p.draw();
      });
      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", mouseMove);
    };
  }, []);

  return (
    <section id="home" className="hero" ref={heroRef}>
      {/* PARTICLE CANVAS */}
      <canvas ref={canvasRef} className="particles-canvas" />

      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">
              <span className="gradient-text">Premium</span> Web Solutions That{" "}
              <span className="gradient-text">Dance</span> to Your Beat
            </h1>

            <p className="hero-description">
              At DanceCode, we create stunning, high-performance websites that
              captivate your audience and drive real results. From concept to
              launch, we're your trusted partner in building digital experiences
              that matter.
            </p>

            <button className="whatsapp-cta" onClick={handleWhatsAppClick}>
              <span>Let&apos;s Chat on WhatsApp</span>
            </button>
          </div>

          <div className="hero-illustration">
            <div className="illustration-item laptop">
              <div className="device">
                <div className="device-screen">
                  <div className="screen-header">
                    <span className="screen-dot"></span>
                    <span className="screen-dot"></span>
                    <span className="screen-dot"></span>
                  </div>
                  <div className="screen-content">
                    <div className="code-line w-80"></div>
                    <div className="code-line w-60"></div>
                    <div className="code-line w-90"></div>
                    <div className="code-line w-50"></div>
                    <div className="code-line w-70"></div>
                    <div className="screen-chip"></div>
                  </div>
                </div>
                <div className="device-base"></div>
              </div>
            </div>

            <div className="illustration-item code">
              <div className="float-card">
                <div className="card-title"></div>
                <div className="code-line w-70"></div>
                <div className="code-line w-50"></div>
                <div className="code-line w-80"></div>
              </div>
            </div>

            <div className="illustration-item teamwork">
              <div className="float-badge">
                <div className="badge-avatars">
                  <span className="avatar"></span>
                  <span className="avatar"></span>
                  <span className="avatar"></span>
                </div>
                <div className="badge-line w-80"></div>
                <div className="badge-line w-60"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="hero-background">
        <div className="gradient-orb orb-1"></div>
        
      </div>
    </section>
  );
}
