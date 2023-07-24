import { useState } from "react";

// how it is stored in the localstorage
// `{
//     value: "username",
//     expiryTime: new Date();
// }`

function useLocalStorageWithExpiry(key, initialValue, expiryTime) {
  const [storedValue, setStoredValue] = useState(checkValue());

  function checkValue() {
    const item = window.localStorage.getItem(key);

    if (!item) {
      return initialValue;
    }

    const itemData = JSON.parse(item);
    const itemTime = new Date(itemData.expiryDate).getTime();
    const currentTime = new Date().getTime();

    if (itemTime < currentTime) {
      window.localStorage.removeItem(key);
      return initialValue;
    }

    return itemData.value;
  }

  const addData = (value) => {
    const currentTime = new Date().getTime();
    const expiryDate = new Date(currentTime + expiryTime * 1000);

    const itemData = {
      value,
      expiryDate: expiryDate.toISOString(),
    };

    window.localStorage.setItem(key, JSON.stringify(itemData));
    setStoredValue(value);
  };
  return [storedValue, addData];
}

export default useLocalStorageWithExpiry;
