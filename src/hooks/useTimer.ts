import { useState, useEffect } from "react";

interface TimerOptions {
  delay: number;
}

export const useTimer = ({ delay }: TimerOptions) => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(true);
    }, delay);

    return () => clearTimeout(timer);
  }, [delay]);

  return show;
};
