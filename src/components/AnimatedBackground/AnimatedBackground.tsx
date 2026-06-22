import { useEffect, useRef, useState } from 'react';

export default function AnimatedBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isReducedMotion, setIsReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setIsReducedMotion(mediaQuery.matches);
    const listener = (e: MediaQueryListEvent) => setIsReducedMotion(e.matches);
    mediaQuery.addEventListener('change', listener);
    return () => mediaQuery.removeEventListener('change', listener);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let isTabVisible = true;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const isMobile = width < 768;
    const particleCount = isMobile ? 34 : 82;
    
    const speedMultiplier = isMobile ? 0.18 : 0.28;

    interface Particle {
      x: number;
      y: number;
      vx: number;
      vy: number;
      radius: number;
      color: string;
      glowColor: string;
      baseAlpha: number;
      pulseSpeed: number;
      pulseOffset: number;
    }

    const particles: Particle[] = [];
    const colors = [
      'rgba(212, 175, 55, 0.7)',  // Gold (#D4AF37)
      'rgba(245, 215, 110, 0.85)', // Soft Gold (#F5D76E)
      'rgba(184, 134, 11, 0.6)',   // Bronze Gold (#B8860B)
    ];

    const glowColors = [
      'rgba(212, 175, 55, 0.35)',
      'rgba(245, 215, 110, 0.45)',
      'rgba(184, 134, 11, 0.25)',
    ];

    for (let i = 0; i < particleCount; i++) {
      const colorIndex = Math.floor(Math.random() * colors.length);
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * speedMultiplier,
        vy: (Math.random() - 0.5) * speedMultiplier,
        radius: Math.random() * 1.8 + 0.8, // 0.8px to 2.6px radius (1.6px to 5.2px diameter) - smaller size!
        color: colors[colorIndex],
        glowColor: glowColors[colorIndex],
        baseAlpha: Math.random() * 0.32 + 0.18,
        pulseSpeed: Math.random() * 0.006 + 0.003,
        pulseOffset: Math.random() * Math.PI * 2,
      });
    }

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);

    const handleVisibilityChange = () => {
      isTabVisible = document.visibilityState === 'visible';
    };
    document.addEventListener('visibilitychange', handleVisibilityChange);

    let tick = 0;

    const animate = () => {
      if (isReducedMotion || !isTabVisible) {
        animationFrameId = requestAnimationFrame(animate);
        return;
      }

      ctx.clearRect(0, 0, width, height);
      tick += 0.35;

      // Draw and update sparkles
      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];

        // Update position
        p.x += p.vx;
        p.y += p.vy;

        // Wrap boundaries
        if (p.x < -10) p.x = width + 10;
        if (p.x > width + 10) p.x = -10;
        if (p.y < -10) p.y = height + 10;
        if (p.y > height + 10) p.y = -10;

        // Calculate pulsing opacity (twinkling effect)
        const alpha = p.baseAlpha * (0.6 + 0.4 * Math.sin(tick * p.pulseSpeed + p.pulseOffset));

        // Draw particle glow
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius * 2.2, 0, Math.PI * 2);
        const glowCol = p.glowColor.replace(/[^,]+(?=\))/, (alpha * 0.4).toString());
        ctx.fillStyle = glowCol;
        ctx.fill();

        // Draw particle body
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        const particleCol = p.color.replace(/[^,]+(?=\))/, alpha.toString());
        ctx.fillStyle = particleCol;
        ctx.fill();
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
    };
  }, [isReducedMotion]);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden bg-[#050505]">
      {/* Background Mask to fade elements to solid black near edges */}
      <div className="absolute inset-0 bg-radial-[circle_at_center,rgba(5,5,5,0)_0%,#050505_100%] z-[1]" />

      {/* Layered slow-moving CSS blurred mesh blobs for depth */}
      <div 
        className="absolute w-[80vw] h-[80vw] md:w-[50vw] md:h-[50vw] rounded-full bg-radial-[circle,rgba(184,134,11,0.04)_0%,rgba(5,5,5,0)_70%] top-[-10%] left-[-10%] animate-[float-mesh-1_35s_ease-in-out_infinite]"
        style={{ filter: 'blur(95px)' }}
      />
      <div 
        className="absolute w-[90vw] h-[90vw] md:w-[60vw] md:h-[60vw] rounded-full bg-radial-[circle,rgba(212,175,55,0.03)_0%,rgba(5,5,5,0)_70%] bottom-[-20%] right-[-10%] animate-[float-mesh-2_45s_ease-in-out_infinite]"
        style={{ filter: 'blur(110px)' }}
      />

      {/* Canvas Layer for Sparkles */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full z-[2] mix-blend-screen" />
    </div>
  );
}
