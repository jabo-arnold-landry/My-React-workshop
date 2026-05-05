// import { use } from "react";
// import { Counter } from "../context/Counter";
// import { increment } from "./slices/counterSlice";
import { useSelectorApp } from "./hooks/hook";
export default function CounteComp() {
  const count = useSelectorApp((state) => state.counter.value);
  //   console.log(count)

  return (
    <>
      <p>counter: {count}</p>
    </>
  );
}
