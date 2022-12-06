// BAsado en el hook de MiduDev https://www.youtube.com/watch?v=uutiLsX5kFE

import { useState } from 'react'

function useLocalStorage(key, initialValue) {
    const [storedValue, setStoredValue] = useState(
        () => {
            try {
                const item = window.localStorage.getItem(key);
                return item  ? JSON.parse(item): initialValue;
            }
            catch (error) {
                return initialValue;
            }
        }
    );

    const setValue = (value) => {
        try {
            const newValue = value instanceof Function ? value(storedValue) : value;
            setStoredValue(newValue);
            window.localStorage.setItem(key, JSON.stringify(newValue));
        }
        catch (error) {
            console.error(error);
        }
    }

    return [storedValue, setValue]
}

export default useLocalStorage;