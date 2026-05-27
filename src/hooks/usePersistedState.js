import { useState, useEffect } from 'react';

/**
 * useState that automatically syncs its value to localStorage.
 *
 * @param {string} key - The localStorage key to read/write.
 * @param {*} defaultValue - Initial value when no stored value exists.
 * @returns {[*, Function]} - [state, setState] identical to useState.
 *
 * @example
 * const [activeCategory, setActiveCategory] = usePersistedState('activeCategory', 'introduction');
 */
export function usePersistedState(key, defaultValue) {
  const [state, setState] = useState(() => {
    const stored = localStorage.getItem(key);
    return stored !== null ? stored : defaultValue;
  });

  useEffect(() => {
    localStorage.setItem(key, state);
  }, [key, state]);

  return [state, setState];
}
