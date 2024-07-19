import { useState, useEffect } from 'react';

export default function QuestionTimer({ timeout, onTimeout }) {
  const [remainingTime, setReaminingTime] = useState(timeout);

  useEffect(() => {
    setTimeout(onTimeout, timeout);
  }, [timeout, onTimeout]);
  
  useEffect(() => {
    setInterval(() => {
      setReaminingTime(prevRemainingTime => prevRemainingTime - 100);
    }, 100);
  }, []); 

  return (
    <progress id="question-time" max={timeout} value={remainingTime} />
  );
}