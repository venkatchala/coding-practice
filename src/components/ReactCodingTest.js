//ArrayMover
//----------

import { useEffect, useReducer, useRef, useState } from "react";

// import { useState } from "react";

// const ArrayMover = () => {
//     const [array, setArray] = useState([1,2,3,4,5]);

//     const handleClickUpButton = (index) => {
//         if (index === 0) return;
//         const newArray = [...array];
//         [newArray[index], newArray[index - 1]] = [newArray[index - 1], newArray[index],];
//         setArray(newArray);
//     }

//     const handleClickDownButton = (index) => {
//         if (index === array.length - 1) return;
//         const newArray = [...array];
//         [newArray[index], newArray[index + 1]] = [newArray[index + 1], newArray[index],];
//         setArray(newArray);
//     }
//     return (
//         <div>
//             <ul>
//                 {
//                     array.map((item,index) => {
//                         <li key={index}>
//                             {item}
//                             <button onClick={() => handleClickUpButton(index)}>UP</button>
//                             <button onClick={() => handleClickDownButton(index)}>Down</button>
//                         </li>
//                     })
//                 }
//             </ul>
//         </div>
//     );
// };

// export default ArrayMover;

// Counter
// -------

// const Counter = () => {
//     const [count, setCount] = useState(0);

//     const handleClickIncrement = () => {
//         setCount(count + 1);
//     }

//     const handleClickDecrement = () => {
//         setCount(count - 1);
//     }
//     return (
//         <div>
//             <h2>Count: {count}</h2>
//             <button onClick={handleClickIncrement}>Increment</button>
//             <button onClick={handleClickDecrement}>Decrement</button>
//         </div>
//     );
// };

// export default Counter;

// Timer
// -----

// const CountTime = () => {
//     const [count, setCount] = useState(0);
//     const [isRunning, setIsRunning] = useState(false);
//     const ref = useRef(null);

//     const handleClickStart = () => {
//         if (!isRunning) {
//             ref.current = setInterval(() => {
//                 setCount(prevCount => prevCount + 1); 
//             }, 1000) 
//             setIsRunning(true)
//         }
//     }

//     const handleClickStop = () => {
//         if (isRunning) {
//             clearInterval(ref.current);
//             setIsRunning(false)
//         }
//     }

//     const handleClickReset = () => {
//         clearInterval(ref.current);
//         setIsRunning(false);
//         setCount(0);
//     }

//     useEffect(() => {
//         return () => clearInterval(ref.current);
//     },[])
//     return (
//         <div>
//             <h1>{count}</h1>
//             <button onClick={handleClickStart} disabled={isRunning}>Start</button>
//             <button onClick={handleClickStop} disabled={!isRunning}>Stop</button>
//             <button onClick={handleClickReset} disabled={count === 0}>Reset</button>
//         </div>
//     )
// }

// export default CountTime;


//Reducer Component
//-----------------

const initialState = { count: 0 };

const reducer = (state,action) => {
    switch (action.type) {
        case 'increment':
            return {count: state.count + 1};
        case 'decrement':
            return {count: state.count - 1};
        default:
            return state;
    }
}

const ReducerComponent = () => {
    const [state, dispatch] = useReducer(reducer, initialState);
    return (
      <div>
        <p>{state.count}</p>
        <button onClick={() => dispatch({type: 'increment'})}>Increment</button>
        <button onClick={() => dispatch({type: 'decrement'})}>Decrement</button>
      </div>
    );
};

export default ReducerComponent;