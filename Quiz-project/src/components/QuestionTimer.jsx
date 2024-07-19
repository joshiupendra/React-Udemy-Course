import { useState, useEffect } from 'react';

export default function QuestionTimer({ timeout, onTimeout }) {
  const [remainingTime, setReaminingTime] = useState(timeout);

  useEffect(() => {
    console.log("Setting Timeout");
    const timer = setTimeout(onTimeout, timeout);

    return () => {
      clearTimeout(timer);
    };
  }, [timeout, onTimeout]);
  
  useEffect(() => {
    console.log("Setting Interval");
    const interval = setInterval(() => {
      setReaminingTime(prevRemainingTime => prevRemainingTime - 100);
    }, 100);

    return () => {
      clearInterval(interval);
    };
  }, []); 

  return (
    <progress id="question-time" max={timeout} value={remainingTime} />
  );
}