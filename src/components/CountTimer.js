import { useEffect, useRef, useState } from "react";

const CountTimer = () => {
    const [count, setCount] = useState(0);
    const [isRunning, setIsRunning] = useState(false);
    const intervalRef = useRef(null);

    const handleClickStart = () => {
        if (!isRunning) {
            intervalRef.current = setInterval(() => {
                setCount(prevCount => prevCount + 1)
            }, 1000)
        setIsRunning(true);
        }
    }

    const handleClickStop = () => {
        if (isRunning) {
            clearInterval(intervalRef.current);
            setIsRunning(false);
        }
    }
    
    const handleClickReset = () => {
        clearInterval(intervalRef.current);
        setIsRunning(false);
        setCount(0);
    }
    useEffect(() => {
        return () => clearInterval(intervalRef.current)
    },[])
    return (
      <div>
        <span>{count}</span>
        <button className="m-2 bg-slate-400 p-2" onClick={handleClickStart} disabled={isRunning}>Start</button>
        <button className="m-2 bg-slate-400 p-2" onClick={handleClickStop} disabled={!isRunning}>Stop</button>
        <button className="m-2 bg-slate-400 p-2" onClick={handleClickReset} disabled={count === 0}>Reset</button>
      </div>
    );
}

export default CountTimer;