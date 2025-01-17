import React, { useState } from "react";
//custom hook
const useLocalStorage = (key, initialValue) => {
    const [storedValue, setStoredValue] = useState(() => {
      
      const item = window.localStorage.getItem(key);
        if(item){
            try {
                return JSON.parse(item);
            }catch{
                return item;
            }
        }
        return initialValue;
    });
    
    const setValue = value => {
        if(typeof value !== "string")
            value = JSON.stringify(value);
        window.localStorage.setItem(key, value);
        setStoredValue(value);
    };
    
    return [storedValue, setValue];
};

export default useLocalStorage;

// const [token, setToken] = useLocalStorage("token")

// setToken(res.data.token)
