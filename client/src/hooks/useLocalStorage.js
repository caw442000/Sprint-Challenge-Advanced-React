import { useState } from "react";

export const useLocalStorage = (key, initialValue) => {
  // this checks to see if there is a value in local storage if so it will use it otherwise it will use the initialValue passed in
  const [storedValue, setStoredValue] = useState(() => {
    const item = window.localStorage.getItem(key);
    return item ? JSON.parse(item) : initialValue;
  });

  // this then sets the new stored value on that key that was passed in and stores that in local storage
  const setValue = value => {
    setStoredValue(value);
    window.localStorage.setItem(key, JSON.stringify(value));
  };

  // this returs the value that is now stored in local storage and what the setStoredValue is 
  // this will then be placed in order on what it is being returned to
  return [storedValue, setValue];
};