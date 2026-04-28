// import { use } from "react";
// import { Counter } from "../context/Counter";
// import { increment } from "./slices/counterSlice";
import { type RooteState } from "./store/counterStore";
import { useSelector } from "react-redux";
export default function CounteComp() {
  const count = useSelector<RooteState>(
    (state) => state.counter.value,
  ) as number;
  //   console.log(count)

  return (
    <>
      <p>counter: {count}</p>
    </>
  );
}
