import { useContext } from "react";

// import type { DestinationData } from "../types";
import { CountryData } from "../context/ContextProvider";

function CounterDisplay1() {
  const { data } = useContext(CountryData);
  console.log(data);
  return <div>CounterDisplay1</div>;
}

export default CounterDisplay1;
