import { useState, useEffect } from 'react';

/**
 * useState that automatically syncs its value to localStorage.
 *
 * @param key - The localStorage key to read/write.
 * @param defaultValue - Initial value when no stored value exists.
 * @returns [state, setState] identical to useState.
 *
 * @example
 * const [activeCategory, setActiveCategory] = usePersistedState('activeCategory', 'introduction');
 */
export function usePersistedState<T>(
  key: string,
  defaultValue: T,
): [T, React.Dispatch<React.SetStateAction<T>>] {
  const [state, setState] = useState<T>(() => {
    const stored = localStorage.getItem(key);
    return stored !== null ? (stored as T) : defaultValue;
  });

  useEffect(() => {
    localStorage.setItem(key, String(state));
  }, [key, state]);

  return [state, setState];
}
