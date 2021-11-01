import React, { useState } from "react";

type CounterProps = {
  children: (
    count: number,
    setCount: React.Dispatch<React.SetStateAction<number>>
  ) => React.ReactNode | null;
};
const CounterComponent = ({ children }: CounterProps) => {
  const [count, setCount] = useState(0);
  return <div>{children(count, setCount)}</div>;
};

export default CounterComponent;
