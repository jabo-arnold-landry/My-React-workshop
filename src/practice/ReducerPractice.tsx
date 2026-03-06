import { useReducer } from "react";

function reducer(state: Record<string, number>, action: any): any {
  switch (action.type) {
    case "increment":
      return { counter: state.counter + 1 };
    case "decrement":
      return { counter: state.counter - 1 };

    default:
      return state;
  }
}

function CounterReduce() {
  const [state, dispatch] = useReducer(reducer, { counter: 0 });
  return (
    <>
      <button
        onClick={() => {
          dispatch({ type: "increment" });
        }}
      >
        +
      </button>
      <p>value: {state.counter}</p>
      <button
        onClick={() => {
          dispatch({ type: "decrement" });
        }}
      >
        -
      </button>
    </>
  );
}

export default CounterReduce;
