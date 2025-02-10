import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Cake, Gift, PartyPopper } from 'lucide-react';

const CountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });
  const navigate = useNavigate();
  
  useEffect(() => {
    const targetDate = new Date('2025-02-11T00:00:00');
    
    const calculateTimeLeft = () => {
      const now = new Date();
      const difference = targetDate - now;
      
      if (difference <= 0) {
        // Redirect to home when countdown ends
        navigate('/', { replace: true });
        return;
      }
      
      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);
      
      setTimeLeft({ days, hours, minutes, seconds });
    };
    
    // Calculate immediately
    calculateTimeLeft();
    
    // Update every second
    const timer = setInterval(calculateTimeLeft, 1000);
    
    return () => clearInterval(timer);
  }, [navigate]);

  const TimeBlock = ({ value, label }) => (
    <div className="flex flex-col items-center p-4 bg-pink-100 rounded-lg shadow-md mx-2">
      <span className="text-4xl font-bold text-pink-600">{value}</span>
      <span className="text-sm text-pink-500">{label}</span>
    </div>
  );
  
  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 to-purple-100 flex flex-col items-center justify-center p-4">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-pink-600 mb-2">Birthday Countdown!</h1>
        <div className="flex items-center justify-center space-x-2">
          <Cake className="text-pink-500" size={24} />
          <Gift className="text-purple-500" size={24} />
          <PartyPopper className="text-pink-500" size={24} />
        </div>
      </div>
      
      <div className="flex flex-wrap justify-center gap-4">
        <TimeBlock value={timeLeft.days} label="Days" />
        <TimeBlock value={timeLeft.hours} label="Hours" />
        <TimeBlock value={timeLeft.minutes} label="Minutes" />
        <TimeBlock value={timeLeft.seconds} label="Seconds" />
      </div>
      
      <div className="mt-8 text-center">
        <p className="text-lg text-purple-600">
          Get ready for an amazing celebration! 🎉
        </p>
      </div>
    </div>
  );
};

export default CountdownTimer;