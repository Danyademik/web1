import { useState, useEffect } from 'react';

export const useClicker = (initialValue = 0) => {
  const [credits, setCredits] = useState(initialValue);
  const [clickValue, setClickValue] = useState(1);
  const [autoClicker, setAutoClicker] = useState(0);
  
  const handleClick = () => {
    setCredits(prev => prev + clickValue);
  };
  
  useEffect(() => {
    if (autoClicker > 0) {
      const interval = setInterval(() => {
        setCredits(prev => prev + autoClicker);
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [autoClicker]);
  
  return { 
    credits, 
    clickValue, 
    autoClicker, 
    handleClick, 
    setCredits, 
    setClickValue, 
    setAutoClicker 
  };
};