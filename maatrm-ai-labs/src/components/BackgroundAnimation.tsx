import { motion } from 'motion/react';
import { useEffect, useState } from 'react';

export default function BackgroundAnimation() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden bg-[#050505]">
      {/* Subtle Ambient Glows (Nebula Light) */}
      <motion.div
        className="absolute w-[600px] h-[600px] rounded-full bg-gold/5 blur-[130px] top-[-10%] left-[-10%]"
        animate={{
          x: [0, 40, -20, 0],
          y: [0, -30, 40, 0],
          scale: [1, 1.1, 0.95, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      
      <motion.div
        className="absolute w-[700px] h-[700px] rounded-full bg-gold-bronze/5 blur-[150px] bottom-[-20%] right-[-10%]"
        animate={{
          x: [0, -50, 30, 0],
          y: [0, 40, -30, 0],
          scale: [1, 1.05, 0.95, 1],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute w-[500px] h-[500px] rounded-full bg-gold-soft/5 blur-[120px] top-[30%] left-[50%]"
        animate={{
          x: [0, 30, -30, 0],
          y: [0, -40, 40, 0],
          scale: [0.95, 1.05, 1, 0.95],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Twinkling/Floating Gold Particles with Random Drift */}
      <div className="absolute inset-0">
        {[...Array(75)].map((_, i) => {
          const size = Math.random() * 4.5 + 2.5; // 2.5px to 7px (larger)
          const left = Math.random() * 100;
          const top = Math.random() * 100;
          const delay = Math.random() * -18; // Negative delay so they are pre-scattered at load
          const duration = Math.random() * 10 + 8; // 8s to 18s (moderate speed)

          // Random closed-loop offset drift coordinates (wider drift)
          const xDrift1 = Math.random() * 200 - 100;
          const yDrift1 = Math.random() * 200 - 100;
          
          const xDrift2 = Math.random() * 200 - 100;
          const yDrift2 = Math.random() * 200 - 100;

          const xDrift3 = Math.random() * 200 - 100;
          const yDrift3 = Math.random() * 200 - 100;

          return (
            <motion.div
              key={i}
              className="absolute rounded-full bg-gold/25"
              style={{
                width: size,
                height: size,
                left: `${left}%`,
                top: `${top}%`,
                boxShadow: '0 0 6px rgba(212, 175, 55, 0.25)',
              }}
              animate={{
                x: [0, xDrift1, xDrift2, xDrift3, 0],
                y: [0, yDrift1, yDrift2, yDrift3, 0],
                opacity: [0.1, 0.7, 0.4, 0.7, 0.1],
                scale: [1, 1.25, 0.75, 1.25, 1],
              }}
              transition={{
                duration: duration,
                repeat: Infinity,
                delay: delay,
                ease: 'easeInOut',
              }}
            />
          );
        })}
      </div>
    </div>
  );
}
