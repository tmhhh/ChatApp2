import React, { useEffect, useRef, useState } from "react";

function Counter({ value, className }: { value: number; className: string }) {
  const [counterValue, setCounterValue] = useState<number>(0);
  //   const timeRef = useRef<NodeJS.Timer | null>(null);
  const timeRef = useRef<NodeJS.Timer | null>(null);
  useEffect(() => {
    console.log(value);
    const speed = 10;
    const step = Math.ceil(value / speed);
    let newValue = 0;

    new Promise((resolve, reject) => {
      timeRef.current = setInterval(() => {
        newValue += step;
        if (newValue > value) {
          clearInterval(timeRef.current as NodeJS.Timer);
          return resolve(true);
        }
        setCounterValue(newValue);
      }, 50);
    })
      .then(() => {
        setCounterValue(value);
      })
      .catch((err) => {
        console.log({ err });
      });
    return () => {
      clearInterval(timeRef.current as NodeJS.Timer);
    };
  }, [value]);
  return <p className={className}>{counterValue}</p>;
}

export default Counter;
