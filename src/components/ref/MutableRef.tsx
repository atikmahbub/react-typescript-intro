import React, { useRef, useState, useEffect } from "react";

const MutableRef = () => {
  const [timer, setTimer] = useState(0);
  const timerRef = useRef<number | null>(null);

  const stopTimer = () => {
    if (timerRef.current) window.clearInterval(timerRef.current);
  };

  useEffect(() => {
    timerRef.current = window.setInterval(() => {
      setTimer((prevState) => prevState + 1);
    }, 1000);
    return () => {
      stopTimer();
    };
  }, [timer]);

  const startTimer = () => {
    setTimer((prevState) => prevState + 1);
  };

  return (
    <div>
      Hook Timer - {timer}
      <button onClick={() => stopTimer()}>Stop Timer</button>
      <button onClick={() => startTimer()}>Start Timer</button>
    </div>
  );
};

export default MutableRef;
