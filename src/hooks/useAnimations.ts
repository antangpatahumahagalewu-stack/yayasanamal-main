import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export const useFadeIn = (delay = 0, duration = 0.8) => {
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (elementRef.current) {
      gsap.fromTo(
        elementRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: duration,
          delay: delay,
          ease: 'power3.out',
        }
      );
    }
  }, [delay, duration]);

  return elementRef;
};

export const useFadeInUp = (delay = 0, duration = 0.8) => {
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (elementRef.current) {
      gsap.fromTo(
        elementRef.current,
        { opacity: 0, y: 80 },
        {
          opacity: 1,
          y: 0,
          duration: duration,
          delay: delay,
          ease: 'power3.out',
        }
      );
    }
  }, [delay, duration]);

  return elementRef;
};

export const useFadeInDown = (delay = 0, duration = 0.8) => {
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (elementRef.current) {
      gsap.fromTo(
        elementRef.current,
        { opacity: 0, y: -80 },
        {
          opacity: 1,
          y: 0,
          duration: duration,
          delay: delay,
          ease: 'power3.out',
        }
      );
    }
  }, [delay, duration]);

  return elementRef;
};

export const useScaleIn = (delay = 0, duration = 0.6) => {
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (elementRef.current) {
      gsap.fromTo(
        elementRef.current,
        { opacity: 0, scale: 0.8 },
        {
          opacity: 1,
          scale: 1,
          duration: duration,
          delay: delay,
          ease: 'back.out(1.7)',
        }
      );
    }
  }, [delay, duration]);

  return elementRef;
};

export const useParallax = (speed = 0.5) => {
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const handleScroll = () => {
      const scrollY = window.scrollY;
      const offset = scrollY * speed;
      element.style.transform = `translateY(${offset}px)`;
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [speed]);

  return elementRef;
};

export const useTextReveal = (delay = 0) => {
  const elementRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const words = element.textContent?.split(' ') || [];
    element.innerHTML = '';
    
    words.forEach((word, index) => {
      const span = document.createElement('span');
      span.textContent = word + ' ';
      span.style.opacity = '0';
      span.style.display = 'inline-block';
      element.appendChild(span);

      gsap.to(span, {
        opacity: 1,
        y: 0,
        duration: 0.8,
        delay: delay + index * 0.05,
        ease: 'power2.out',
      });
    });
  }, [delay]);

  return elementRef;
};
