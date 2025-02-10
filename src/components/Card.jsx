import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { Link } from 'react-router-dom';

const Card = () => {
  const [cardClass, setCardClass] = useState("");
  const [isCardOpened, setIsCardOpened] = useState(false);
  const timerRef = useRef(null);

  const toggleCard = () => {
    if (cardClass === "" || cardClass === "close-half") {
      setCardClass("open-half");
      setIsCardOpened(true);
      if (timerRef.current) clearTimeout(timerRef.current);
      timerRef.current = setTimeout(() => {
        setCardClass("open-fully");
        timerRef.current = null;
      }, 1000);
    } else {
      setCardClass("close-half");
      if (timerRef.current) clearTimeout(timerRef.current);
      timerRef.current = setTimeout(() => {
        setCardClass("");
        timerRef.current = null;
      }, 1000);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-gray-900 to-gray-800 overflow-clip">
      <div className="w-[400px] min-h-screen flex flex-col items-center justify-center gap-16">
        <motion.div
          initial={{ opacity: 0, visibility: "hidden" }}
          animate={{ opacity: 1, visibility: "visible" }}
          transition={{ duration: 1.2 }}
        >
          <div 
            id="card" 
            className={`${cardClass} cursor-pointer transform hover:scale-105 transition-transform`}
            onClick={toggleCard}
          >
            <div id="card-inside" className="bg-amber-100">
  <div className="wrap p-8 text-gray-800">
    <h2 className="text-2xl font-serif mb-4 text-center">
      Dear Caroline Risya Belinda,
    </h2>
    <p className="mb-4 font-serif italic">
      Wishing you a day filled with joy, laughter, and all the magic your heart desires!
    </p>
    <p className="mb-4">
      May this year bring you endless happiness, success, and beautiful moments to cherish.
    </p>
  
    <p className="text-right mt-8 font-serif">
      Yours,<br />
      T
    </p>
  </div>
</div>


            <div id="card-front" className="relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-amber-900 to-amber-800" />
              <div className="absolute inset-0 opacity-20 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMjUiIGZpbGw9Im5vbmUiIHN0cm9rZT0iI2ZmZiIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9zdmc+')]" />
              <div className="wrap relative z-10 p-8">
                <div className="border-4 border-amber-600 p-6 rounded-lg bg-gradient-to-br from-amber-800 to-amber-900">
                  <h1 className="text-4xl font-serif text-amber-300 text-center mb-4">
                    Happy Birthday
                  </h1>
                  <div className="flex justify-center">
                    <svg className="w-16 h-16 text-amber-400" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {isCardOpened && (
          <motion.div
            className="absolute bottom-20"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <Link to="/cake">
              <button className="px-8 py-4 bg-amber-700 text-amber-100 font-serif rounded-full hover:bg-amber-600 transition-colors shadow-lg hover:shadow-xl transform hover:scale-105">
              Blow the candles
              </button>
            </Link>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Card;