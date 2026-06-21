import { motion } from 'motion/react';
import type { Key, ReactNode } from 'react';

type AnimatedElementProps = {
  children: ReactNode;
  key?: Key;
};

export default function AnimatedElement({ children }: AnimatedElementProps) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 }
      }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}
