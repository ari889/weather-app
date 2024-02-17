import { useEffect, useRef } from "react";

export function useDebounce(callback, delay) {
  let timeoutId = useRef(null);

  useEffect(() => {
    return () => {
      if (timeoutId.current) {
        clearTimeout(timeoutId.current);
      }
    };
  }, []);
  
  return (...args) => {
    if (timeoutId.current) {
      clearTimeout(timeoutId.current);
    }
    timeoutId.current = setTimeout(() => {
      callback(...args);
    }, delay);
  };
}
