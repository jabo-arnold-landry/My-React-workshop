import { useEffect, useRef, useState, type FC } from "react";

function Count(){
  const [count, setCount] = useState(0);
  const [isRunning, setIsRunning] = useState(true);
  const prevValue = useRef(0);
  let timerID = useRef<NodeJS.Timeout>();

  useEffect(() => {
    timerID.current = setInterval(() => {
      setCount((prev) => prev + 1);
    }, 1000);

    return () => clearInterval(timerID.current);
  }, []);

  return (
    <div>
      <p>count: {count}</p>
      <button disabled={isRunning} onClick={() => setCount(0)}>
        reset
      </button>
      <button
        disabled={!isRunning}
        onClick={() => {
          prevValue.current = count;
          setCount(prevValue.current);
          clearInterval(timerID.current);
          setIsRunning((prev) => !prev);
        }}
      >
        wait
      </button>
      <button
        disabled={isRunning}
        onClick={() => {
          timerID.current = setInterval(() => {
            setCount((prev) => prev + 1);
          }, 1000);
          setIsRunning((prev) => !prev);
        }}
      >
        continue
      </button>
    </div>
  );
}

export default Count;
