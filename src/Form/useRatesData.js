import { useEffect, useState } from "react";

export const useRatesData = () => {
  const [ratesData, setRatesData] = useState({
    state: "loading",
  });
  const URL = "https://api.exchangerate.host/latest?base=PLN"

  useEffect(() => {
    const fetchRates = async () => {
      try {
        const response = await fetch(URL);

        if (!response.ok) {
          throw new Error(response.statusText);
        }

        const { rates, date } = await response.json();

        setRatesData({
          state: "success",
          rates,
          date,
        });
      } catch {
        setRatesData({
          state: "error",
        });
      }
    };
    setTimeout(fetchRates, 1000);
  }, []);

  return ratesData;
};
