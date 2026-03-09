import React, { useState } from "react";
import datas from "../data";
import type { DestinationData } from "../types";

function MemoPractice() {
  const [counter, setCounter] = useState(0);
  return (
    <>
      {datas.map((element, index) => {
        return (
          <div key={index}>
            <Display {...element} />
          </div>
        );
      })}
      <p>{counter}</p>
      <button onClick={() => setCounter((prev) => prev + 1)}>count</button>
    </>
  );
}

let Display = React.memo(function (props: DestinationData) {
  console.log("rendered");
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
});

export default MemoPractice;
