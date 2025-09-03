// hooks/useLocalStorage.js
// Custom hook for localStorage (Note: This won't work in Claude.ai artifacts)
// Use this when implementing in your own environment

import { useState, useEffect } from 'react';

export const useLocalStorage = (key, initialValue) => {
  // Get value from localStorage or use initial value
  const [storedValue, setStoredValue] = useState(() => {
    try {
      // This will not work in Claude.ai artifacts
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.log('localStorage not available, using initial value');
      return initialValue;
    }
  });

  // Return a wrapped version of useState's setter function that persists the new value to localStorage
  const setValue = (value) => {
    try {
      // Allow value to be a function so we have the same API as useState
      const valueToStore = value instanceof Function ? value(storedValue) : value;
      setStoredValue(valueToStore);
      
      // Save to localStorage (won't work in Claude.ai)
      if (typeof window !== 'undefined') {
        window.localStorage.setItem(key, JSON.stringify(valueToStore));
      }
    } catch (error) {
      console.log('Error saving to localStorage:', error);
    }
  };

  return [storedValue, setValue];
};

// Alternative hook for in-memory storage (works in Claude.ai)
export const useMemoryStorage = (key, initialValue) => {
  const [storedValue, setStoredValue] = useState(initialValue);
  return [storedValue, setStoredValue];
};