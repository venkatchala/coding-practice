import { useState } from "react";

const Counter = ({num}) => {
    const [count, setCount] = useState(0);
    return (
        <div>
            <button className="m-2 p-2 border border-green-100 shadow-lg bg-green-400" onClick={() => setCount(count + num)}>Increment by {num}</button>
            <span className="m-2 p-2 text-red-400">{count}</span>
        </div>
    );
};

export default Counter;