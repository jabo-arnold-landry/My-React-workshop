import { createContext, useState, type Dispatch, type ReactNode, type SetStateAction } from "react";


export const Counter = createContext({});
interface ChildProp {
  children: ReactNode;
}

function CounterProvider({ children }: ChildProp) {
  const [count, setCount] = useState(0);
  return (
    <Counter.Provider value={{ count, setCount }}>{children}</Counter.Provider>
  );
}
export default CounterProvider;
