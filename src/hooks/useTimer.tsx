import { useState, useEffect } from "react";

interface TimerOptions {
  delay: number;
}

const useTimer = ({ delay }: TimerOptions) => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(true);
    }, delay);

    return () => clearTimeout(timer);
  }, [delay]);

  return show;
};

export default useTimer;
