import React, { useRef, useEffect } from 'react';

interface Particle {
  x: number;
  y: number;
  fontSize: number;
  speed: number;
  driftAmp: number;
  driftPhase: number;
  opacity: number;
  color: string;
}

const PARTICLE_COUNT = 30;
const COLORS = [
  '149, 213, 178',  // forest-light
  '232, 197, 71',   // gold
  '130, 190, 150',  // forest-light variant
  '210, 175, 60',   // gold variant
];

const CarbonParticles: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = window.innerWidth;
    let height = window.innerHeight;
    let animFrameId: number;
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const particles: Particle[] = [];

    const init = () => {
      particles.length = 0;
      for (let i = 0; i < PARTICLE_COUNT; i++) {
        particles.push({
          x: Math.random() * width,
          y: Math.random() * height,
          fontSize: 12 + Math.random() * 16,
          speed: 0.06 + Math.random() * 0.1,
          driftAmp: 0.2 + Math.random() * 0.4,
          driftPhase: Math.random() * Math.PI * 2,
          opacity: 0.10 + Math.random() * 0.12,
          color: COLORS[Math.floor(Math.random() * COLORS.length)],
        });
      }
    };

    const resize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width * (window.devicePixelRatio || 1);
      canvas.height = height * (window.devicePixelRatio || 1);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(window.devicePixelRatio || 1, 0, 0, window.devicePixelRatio || 1, 0, 0);
    };

    const animate = () => {
      ctx.clearRect(0, 0, width, height);
      ctx.font = '500 1px Poppins, sans-serif';
      ctx.textBaseline = 'middle';
      ctx.textAlign = 'center';

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        if (!prefersReduced) {
          p.y -= p.speed;
          p.x += Math.sin(Date.now() * 0.00035 + p.driftPhase) * p.driftAmp * 0.4;
        }

        if (p.y < -80) {
          p.y = height + 80;
          p.x = Math.random() * width;
        }
        if (p.x < -80) p.x = width + 80;
        if (p.x > width + 80) p.x = -80;

        ctx.font = `500 ${p.fontSize}px Poppins, sans-serif`;
        ctx.fillStyle = `rgba(${p.color}, ${p.opacity})`;
        ctx.fillText('CO\u2082', p.x, p.y);
      }

      animFrameId = requestAnimationFrame(animate);
    };

    resize();
    init();
    animate();

    window.addEventListener('resize', resize);

    return () => {
      cancelAnimationFrame(animFrameId);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full pointer-events-none"
      style={{ zIndex: 0 }}
      aria-hidden="true"
    />
  );
};

export default CarbonParticles;
