import React, { useState } from 'react'
import { useCustomHook } from '../utils/useCustomHook';

const CustomArray = () => {
    const [array, setArray] = useState([]);
    const message = useCustomHook(array);
  return (
    <div>
        <button onClick={() => setArray([0,0,0,0])}>Set all to 0</button>
        <button onClick={() => setArray([1,2,3,4])}>Set positive values</button>
        <p>{message}</p>
      
    </div>
  )
}

export default CustomArray;
