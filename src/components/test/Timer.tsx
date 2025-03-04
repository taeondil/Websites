import React, { useEffect } from 'react';
import { Clock } from 'lucide-react';
import { useTestStore } from '../../store/testStore';

function Timer() {
  const { 
    remainingTime, 
    updateRemainingTime, 
    nextQuestion,
    timePerQuestion
  } = useTestStore();

  useEffect(() => {
    if (remainingTime === null) {
      updateRemainingTime(timePerQuestion);
      return;
    }

    if (remainingTime <= 0) {
      nextQuestion();
      return;
    }

    const timer = setInterval(() => {
      updateRemainingTime(remainingTime - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [remainingTime]);

  return (
    <div className="flex items-center space-x-2 text-white">
      <Clock className="w-5 h-5" />
      <span className={`font-medium ${remainingTime && remainingTime <= 5 ? 'text-red-400' : ''}`}>
        {remainingTime}s
      </span>
    </div>
  );
}

export default Timer;