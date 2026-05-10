import React, { useRef, useEffect } from 'react';

interface Particle {
  type: 'gas' | 'text';
  x: number;
  y: number;
  baseSize: number;
  speed: number;
  startY: number;
  distanceTraveled: number;
  maxTravel: number;
  wobbleAmp1: number;
  wobbleFreq1: number;
  wobblePhase1: number;
  wobbleAmp2: number;
  wobbleFreq2: number;
  wobblePhase2: number;
  color: string;
  maxOpacity: number;
  trail: { x: number; y: number }[];
  trailFrame: number;
  satelliteOffsets: { dx: number; dy: number }[];
}

const TOTAL_PARTICLES = 46;
const GAS_RATIO = 0.6;
const TRAIL_MAX = 3;
const TRAIL_INTERVAL = 8;
const SATELLITE_COUNT = 2;
const DEATH_Y = -100;

const COLORS = [
  '149, 213, 178',
  '232, 197, 71',
  '130, 190, 150',
  '210, 175, 60',
  '165, 215, 185',
  '245, 210, 85',
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

    const createParticle = (): Particle => {
      const type = Math.random() < GAS_RATIO ? 'gas' : 'text';
        const baseSize = type === 'gas' ? 20 + Math.random() * 20 : 16 + Math.random() * 18;
      const startY = height * (0.3 + Math.random() * 0.8);
      const maxTravel = startY - DEATH_Y + Math.random() * 60;
      const p: Particle = {
        type,
        x: Math.random() * width,
        y: startY,
        baseSize,
        speed: 0.12 + Math.random() * 0.3,
        startY,
        distanceTraveled: Math.random() * maxTravel * 0.85,
        maxTravel,
        wobbleAmp1: 0.1 + Math.random() * 0.35,
        wobbleFreq1: 0.00015 + Math.random() * 0.00035,
        wobblePhase1: Math.random() * Math.PI * 2,
        wobbleAmp2: 0.04 + Math.random() * 0.14,
        wobbleFreq2: 0.0005 + Math.random() * 0.0007,
        wobblePhase2: Math.random() * Math.PI * 2,
        color: COLORS[Math.floor(Math.random() * COLORS.length)],
        maxOpacity: 0.12 + Math.random() * 0.15,
        trail: [],
        trailFrame: Math.floor(Math.random() * TRAIL_INTERVAL),
        satelliteOffsets: [],
      };

      if (type === 'gas') {
        for (let i = 0; i < SATELLITE_COUNT; i++) {
          p.satelliteOffsets.push({
            dx: (Math.random() - 0.5) * 1.6,
            dy: (Math.random() - 0.5) * 1.6,
          });
        }
      }

      return p;
    };

    const init = () => {
      particles.length = 0;
      for (let i = 0; i < TOTAL_PARTICLES; i++) {
        particles.push(createParticle());
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

    const drawGasBlob = (p: Particle, life: number) => {
      const size = p.baseSize * (1 + life * 2.2);
      const opacity = p.maxOpacity * (1 - life);

      for (let i = p.trail.length - 1; i >= 0; i--) {
        const pt = p.trail[i];
        const t = (i + 1) / (p.trail.length + 1);
        const ts = size * 0.35 * t;
        const to = opacity * 0.18 * t;
        const grad = ctx.createRadialGradient(pt.x, pt.y, 0, pt.x, pt.y, ts);
        grad.addColorStop(0, `rgba(${p.color}, ${to})`);
        grad.addColorStop(1, `rgba(${p.color}, 0)`);
        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.arc(pt.x, pt.y, ts, 0, Math.PI * 2);
        ctx.fill();
      }

      const grad = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, size);
      grad.addColorStop(0, `rgba(${p.color}, ${opacity})`);
      grad.addColorStop(0.35, `rgba(${p.color}, ${opacity * 0.75})`);
      grad.addColorStop(0.7, `rgba(${p.color}, ${opacity * 0.15})`);
      grad.addColorStop(1, `rgba(${p.color}, 0)`);
      ctx.fillStyle = grad;
      ctx.beginPath();
      ctx.arc(p.x, p.y, size, 0, Math.PI * 2);
      ctx.fill();

      for (let i = 0; i < p.satelliteOffsets.length; i++) {
        const off = p.satelliteOffsets[i];
        const sx = p.x + off.dx * size * 0.55;
        const sy = p.y + off.dy * size * 0.55;
        const ss = size * 0.22;
        const sGrad = ctx.createRadialGradient(sx, sy, 0, sx, sy, ss);
        sGrad.addColorStop(0, `rgba(${p.color}, ${opacity * 0.55})`);
        sGrad.addColorStop(1, `rgba(${p.color}, 0)`);
        ctx.fillStyle = sGrad;
        ctx.beginPath();
        ctx.arc(sx, sy, ss, 0, Math.PI * 2);
        ctx.fill();
      }
    };

    const drawTextParticle = (p: Particle, life: number) => {
      const size = p.baseSize * (1 + life * 1.8);
      const opacity = p.maxOpacity * (1 - life);

      for (let i = p.trail.length - 1; i >= 0; i--) {
        const pt = p.trail[i];
        const t = (i + 1) / (p.trail.length + 1);
        const ts = size * 0.5 * t;
        const to = opacity * 0.15 * t;
        ctx.font = `500 ${ts}px Poppins, sans-serif`;
        ctx.fillStyle = `rgba(${p.color}, ${to})`;
        ctx.fillText('CO\u2082', pt.x, pt.y);
      }

      ctx.font = `500 ${size}px Poppins, sans-serif`;
      ctx.textBaseline = 'middle';
      ctx.textAlign = 'center';
      ctx.fillStyle = `rgba(${p.color}, ${opacity})`;
      ctx.fillText('CO\u2082', p.x, p.y);
    };

    const animate = () => {
      ctx.clearRect(0, 0, width, height);
      ctx.textBaseline = 'middle';
      ctx.textAlign = 'center';

      const time = performance.now();

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        if (!prefersReduced) {
          const wobble =
            Math.sin(time * p.wobbleFreq1 + p.wobblePhase1) * p.wobbleAmp1 +
            Math.sin(time * p.wobbleFreq2 + p.wobblePhase2) * p.wobbleAmp2;

          p.x += wobble;
          p.y -= p.speed;
          p.distanceTraveled += p.speed;

          if (p.x < -80) p.x = width + 80;
          if (p.x > width + 80) p.x = -80;

          p.trailFrame++;
          if (p.trailFrame >= TRAIL_INTERVAL) {
            p.trailFrame = 0;
            p.trail.push({ x: p.x, y: p.y });
            if (p.trail.length > TRAIL_MAX) p.trail.shift();
          }
        }

        if (p.distanceTraveled >= p.maxTravel) {
          const fresh = createParticle();
          Object.assign(p, fresh);
          continue;
        }

        const life = Math.min(p.distanceTraveled / p.maxTravel, 1);

        if (p.type === 'gas') {
          drawGasBlob(p, life);
        } else {
          drawTextParticle(p, life);
        }
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
