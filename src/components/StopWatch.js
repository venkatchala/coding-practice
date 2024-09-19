import { useEffect, useRef, useState } from "react";

const StopWatch = () => {
    const [timer, setTimer] = useState(0);
    const [isRunning, setIsRunning] = useState(false);
    const intervalRef = useRef(null);

    const handleClickStart = () => {
        if (!isRunning) {
            intervalRef.current = setInterval(() => {
                setTimer(prevTimer => prevTimer + 10);
            },10)
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
        setIsRunning(!isRunning);
        setTimer(0);
    }

    useEffect(() => {
        return () => {
            clearInterval(intervalRef.current)
        }
    },[])

    const formatTime = (timer) => {
        const milliseconds = String(timer % 100).padStart(2,'0');
        const seconds = String(Math.floor((timer / 100) % 60)).padStart(2, '0');
        const minutes = String(Math.floor((timer / 6000) % 60)).padStart(2, '0');
        return `${minutes}:${seconds}:${milliseconds}`
    }

    return (
      <div>
        <h1>{formatTime(timer)}</h1>
        <button className="m-2 p-2 bg-slate-400" onClick={handleClickStart} disabled={isRunning}>Start</button>
        <button className="m-2 p-2 bg-slate-400" onClick={handleClickStop} disabled={!isRunning}>Stop</button>
        <button className="m-2 p-2 bg-slate-400" onClick={handleClickReset} disabled={timer === 0}>Reset</button>
      </div>
    );
}

export default StopWatch;