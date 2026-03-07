import { useContext } from "react";
import { CountryData } from "../context/ContextProvider";
import type { DestinationData } from "../types";

function CounterDisplay1() {
  const { data } = useContext(CountryData);
  console.log(data);
  return (
    <>
      {data.map((element: DestinationData, index: number) => {
        return (
          <div key={index}>
            <DisplayData {...element} />
          </div>
        );
      })}
    </>
  );
}

function DisplayData(props: DestinationData) {
  return (
    <>
      <img src={props.img.src} alt={props.img.alt} />
      <div className="details">
        <h2>{props.country}</h2>
        <h3>{props.title}</h3>
        <p>text: {props.text}</p>
        <p>Map: {props.googleMapsLink}</p>
        <p>Dates: {props.dates}</p>
      </div>
    </>
  );
}

export default CounterDisplay1;
