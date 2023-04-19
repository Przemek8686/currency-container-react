import { useState, useEffect } from "react";

export const useCurrentDate = () => {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const IntervalID = setInterval(() => {
      setDate(new Date());
    }, 1000);
    return () => {
      clearInterval(IntervalID);
    };
  }, []);

  return date;
};
