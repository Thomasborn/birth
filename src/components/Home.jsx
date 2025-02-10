import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

function Home() {
  const [visibleCount, setVisibleCount] = useState(1);
  const navigate = useNavigate();
  const sentences = [
    "CAROLINE",
    "This is for U 💖",
    "Get ready for a surprise! 🎉"
  ];

  const handleClick = () => {
    if (visibleCount < sentences.length) {
      setVisibleCount(visibleCount + 1);
    } else {
      navigate('/pictures');
    }
  };

  return (
    <div 
      className="flex flex-col min-h-screen cursor-pointer w-full items-center justify-center overflow-hidden bg-gradient-to-br from-pink-200 to-purple-300" 
      onClick={handleClick}
    >
      <div className="w-[90%] max-w-[400px] px-8">
        {sentences.slice(0, visibleCount).map((sentence, index) => (
          <motion.p
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: index * 0.5 }}
            className="text-4xl font-bold text-customBlue drop-shadow-lg mb-4"
          >
            {sentence}
          </motion.p>
        ))}
      </div>

      {/* Add some floating hearts for extra cuteness */}
      {visibleCount === sentences.length && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="absolute inset-0 overflow-hidden"
        >
          {[...Array(10)].map((_, i) => (
            <motion.div
              key={i}
              initial={{ y: -10, x: Math.random() * 100 - 50 }}
              animate={{ y: window.innerHeight, x: Math.random() * 100 - 50 }}
              transition={{
                duration: Math.random() * 3 + 2,
                repeat: Infinity,
                ease: "linear",
                delay: Math.random() * 2
              }}
              className="text-4xl text-pink-500 absolute"
              style={{ left: `${Math.random() * 100}%` }}
            >
              ❤️
            </motion.div>
          ))}
        </motion.div>
      )}
    </div>
  );
}

export default Home;