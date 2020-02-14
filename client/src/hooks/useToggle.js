import { useEffect } from 'react';
import { useLocalStorage } from './useLocalStorage.js'


export const useToggle = (key, initialValue) => {
  //this is passing the key and initialValue into useLocalStorage hook and once useLocalStorage is ran it returns info for value and setValue
  const [value, setValue] = useLocalStorage(key, initialValue);
  
  //we use useEffect because we want to watch for a change then run the code inside
  useEffect(() => {
    
    if(value === true) {
      return document.body.classList.add("dark-mode");
    } else {
      return document.body.classList.remove("dark-mode");
    }

  }, [value]);

  return [value, setValue]
}