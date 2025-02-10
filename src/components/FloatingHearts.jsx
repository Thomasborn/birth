import React from 'react';
import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';

const FloatingHearts = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0">
      {[...Array(15)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute"
          initial={{
            opacity: 0,
            scale: 0,
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight
          }}
          animate={{
            opacity: [0, 1, 0],
            scale: [0, 1, 0],
            y: [null, -200],
            x: [null, (Math.random() - 0.5) * 100]
          }}
          transition={{
            duration: 4 + Math.random() * 2,
            repeat: Infinity,
            delay: i * 0.5,
            ease: "easeInOut"
          }}
        >
          <Heart className="text-pink-300/30" size={16 + Math.random() * 16} />
        </motion.div>
      ))}
    </div>
  );
};

export default FloatingHearts;