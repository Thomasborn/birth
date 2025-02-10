import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom"
import { useState, useEffect } from 'react'
import { Home, Picture, Card, Cake, Present } from "./components"
import CountdownTimer from "./components/CountdownTimer"
import './index.css'

function App() {
  const [isExpired, setIsExpired] = useState(false);

  useEffect(() => {
    const checkBirthdayDate = () => {
      const targetDate = new Date('2025-02-11T00:00:00');
      const now = new Date();
      if (now >= targetDate) {
        setIsExpired(true);
      }
    };

    // Initial check
    checkBirthdayDate();

    // Check every second
    const timer = setInterval(checkBirthdayDate, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <Router>
      <Routes>
        <Route 
          path="/" 
          element={
            isExpired ? <Home /> : <CountdownTimer />
          }
        />
        <Route path="/pictures" element={
          isExpired ? <Picture /> : <Navigate to="/" replace />
        } />
        <Route path="/card" element={
          isExpired ? <Card /> : <Navigate to="/" replace />
        } />
        <Route path="/cake" element={
          isExpired ? <Cake /> : <Navigate to="/" replace />
        } />
        <Route path="/present" element={
          isExpired ? <Present /> : <Navigate to="/" replace />
        } />

        {/* Redirect any unknown routes to home */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  )
}

export default App