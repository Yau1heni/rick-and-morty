import {useEffect, useState} from "react";

export   const useDebounce = (value: string, delay: number = 1000) => {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const timerId = setTimeout(() => {
      setDebouncedValue(value)
    }, delay);

    return () => clearTimeout(timerId);
  }, [delay, value]);

  return debouncedValue;
}